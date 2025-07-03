const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5050;
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./finance.db');

app.use(cors());
app.use(express.json());

// Create tables if they don't exist
const createTables = () => {
  db.run(`CREATE TABLE IF NOT EXISTS accounts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    balance REAL DEFAULT 0
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    account_id INTEGER,
    amount REAL,
    category TEXT,
    date TEXT,
    description TEXT,
    FOREIGN KEY(account_id) REFERENCES accounts(id)
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS budgets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category TEXT NOT NULL,
    amount REAL NOT NULL,
    month TEXT NOT NULL
  )`);
};
createTables();

app.get('/', (req, res) => {
  res.send('Personal Finance App API');
});

// Accounts CRUD
app.get('/accounts', (req, res) => {
  db.all('SELECT * FROM accounts', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});
app.post('/accounts', (req, res) => {
  const { name, type, balance } = req.body;
  db.run('INSERT INTO accounts (name, type, balance) VALUES (?, ?, ?)', [name, type, balance || 0], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, name, type, balance: balance || 0 });
  });
});
app.put('/accounts/:id', (req, res) => {
  const { name, type, balance } = req.body;
  db.run('UPDATE accounts SET name=?, type=?, balance=? WHERE id=?', [name, type, balance, req.params.id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ updated: this.changes });
  });
});
app.delete('/accounts/:id', (req, res) => {
  db.run('DELETE FROM accounts WHERE id=?', [req.params.id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: this.changes });
  });
});

// Transactions CRUD
app.get('/transactions', (req, res) => {
  db.all('SELECT * FROM transactions', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});
app.post('/transactions', (req, res) => {
  const { account_id, amount, category, date, description } = req.body;
  db.run('INSERT INTO transactions (account_id, amount, category, date, description) VALUES (?, ?, ?, ?, ?)', [account_id, amount, category, date, description], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, account_id, amount, category, date, description });
  });
});
app.put('/transactions/:id', (req, res) => {
  const { account_id, amount, category, date, description } = req.body;
  db.run('UPDATE transactions SET account_id=?, amount=?, category=?, date=?, description=? WHERE id=?', [account_id, amount, category, date, description, req.params.id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ updated: this.changes });
  });
});
app.delete('/transactions/:id', (req, res) => {
  db.run('DELETE FROM transactions WHERE id=?', [req.params.id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: this.changes });
  });
});

// Budgets CRUD
app.get('/budgets', (req, res) => {
  db.all('SELECT * FROM budgets', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});
app.post('/budgets', (req, res) => {
  const { category, amount, month } = req.body;
  db.run('INSERT INTO budgets (category, amount, month) VALUES (?, ?, ?)', [category, amount, month], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, category, amount, month });
  });
});
app.put('/budgets/:id', (req, res) => {
  const { category, amount, month } = req.body;
  db.run('UPDATE budgets SET category=?, amount=?, month=? WHERE id=?', [category, amount, month, req.params.id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ updated: this.changes });
  });
});
app.delete('/budgets/:id', (req, res) => {
  db.run('DELETE FROM budgets WHERE id=?', [req.params.id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: this.changes });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 