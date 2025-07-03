import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';

const API = 'http://localhost:5050';

function Dashboard() {
  const [accounts, setAccounts] = React.useState([]);
  const [transactions, setTransactions] = React.useState([]);
  React.useEffect(() => {
    axios.get(`${API}/accounts`).then(r => setAccounts(r.data));
    axios.get(`${API}/transactions`).then(r => setTransactions(r.data));
  }, []);
  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Accounts</h3>
      <ul>{accounts.map(a => <li key={a.id}>{a.name}: ${a.balance}</li>)}</ul>
      <h3>Recent Transactions</h3>
      <ul>{transactions.slice(-5).reverse().map(t => <li key={t.id}>{t.date}: {t.category} ${t.amount}</li>)}</ul>
    </div>
  );
}

function Accounts() {
  const [accounts, setAccounts] = React.useState([]);
  const [form, setForm] = React.useState({ name: '', type: '', balance: '' });
  React.useEffect(() => { axios.get(`${API}/accounts`).then(r => setAccounts(r.data)); }, []);
  function handleSubmit(e) {
    e.preventDefault();
    axios.post(`${API}/accounts`, { ...form, balance: parseFloat(form.balance) || 0 }).then(() => {
      axios.get(`${API}/accounts`).then(r => setAccounts(r.data));
      setForm({ name: '', type: '', balance: '' });
    });
  }
  return (
    <div>
      <h2>Accounts</h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-4">
        <input className="px-2 py-1 rounded bg-gray-700 border border-gray-600 text-gray-100" placeholder="Name" value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))} required />
        <input className="px-2 py-1 rounded bg-gray-700 border border-gray-600 text-gray-100" placeholder="Type" value={form.type} onChange={e => setForm(f => ({...f, type: e.target.value}))} required />
        <input className="px-2 py-1 rounded bg-gray-700 border border-gray-600 text-gray-100" placeholder="Balance" type="number" value={form.balance} onChange={e => setForm(f => ({...f, balance: e.target.value}))} />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded">Add</button>
      </form>
      <ul>{accounts.map(a => <li key={a.id}>{a.name} ({a.type}): ${a.balance}</li>)}</ul>
    </div>
  );
}

function Transactions() {
  const [transactions, setTransactions] = React.useState([]);
  const [accounts, setAccounts] = React.useState([]);
  const [form, setForm] = React.useState({ account_id: '', amount: '', category: '', date: '', description: '' });
  React.useEffect(() => {
    axios.get(`${API}/transactions`).then(r => setTransactions(r.data));
    axios.get(`${API}/accounts`).then(r => setAccounts(r.data));
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    axios.post(`${API}/transactions`, { ...form, amount: parseFloat(form.amount) || 0 }).then(() => {
      axios.get(`${API}/transactions`).then(r => setTransactions(r.data));
      setForm({ account_id: '', amount: '', category: '', date: '', description: '' });
    });
  }
  return (
    <div>
      <h2>Transactions</h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-4">
        <select className="px-2 py-1 rounded bg-gray-700 border border-gray-600 text-gray-100" value={form.account_id} onChange={e => setForm(f => ({...f, account_id: e.target.value}))} required>
          <option value="">Select Account</option>
          {accounts.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
        </select>
        <input className="px-2 py-1 rounded bg-gray-700 border border-gray-600 text-gray-100" placeholder="Amount" type="number" value={form.amount} onChange={e => setForm(f => ({...f, amount: e.target.value}))} required />
        <input className="px-2 py-1 rounded bg-gray-700 border border-gray-600 text-gray-100" placeholder="Category" value={form.category} onChange={e => setForm(f => ({...f, category: e.target.value}))} required />
        <input className="px-2 py-1 rounded bg-gray-700 border border-gray-600 text-gray-100" placeholder="Date" type="date" value={form.date} onChange={e => setForm(f => ({...f, date: e.target.value}))} required />
        <input className="px-2 py-1 rounded bg-gray-700 border border-gray-600 text-gray-100" placeholder="Description" value={form.description} onChange={e => setForm(f => ({...f, description: e.target.value}))} />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded">Add</button>
      </form>
      <ul>{transactions.map(t => <li key={t.id}>{t.date}: {t.category} ${t.amount} ({accounts.find(a => a.id === t.account_id)?.name || 'N/A'})</li>)}</ul>
    </div>
  );
}

function Budgets() {
  const [budgets, setBudgets] = React.useState([]);
  const [form, setForm] = React.useState({ category: '', amount: '', month: '' });
  React.useEffect(() => { axios.get(`${API}/budgets`).then(r => setBudgets(r.data)); }, []);
  function handleSubmit(e) {
    e.preventDefault();
    axios.post(`${API}/budgets`, { ...form, amount: parseFloat(form.amount) || 0 }).then(() => {
      axios.get(`${API}/budgets`).then(r => setBudgets(r.data));
      setForm({ category: '', amount: '', month: '' });
    });
  }
  return (
    <div>
      <h2>Budgets</h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-4">
        <input className="px-2 py-1 rounded bg-gray-700 border border-gray-600 text-gray-100" placeholder="Category" value={form.category} onChange={e => setForm(f => ({...f, category: e.target.value}))} required />
        <input className="px-2 py-1 rounded bg-gray-700 border border-gray-600 text-gray-100" placeholder="Amount" type="number" value={form.amount} onChange={e => setForm(f => ({...f, amount: e.target.value}))} required />
        <input className="px-2 py-1 rounded bg-gray-700 border border-gray-600 text-gray-100" placeholder="Month (YYYY-MM)" value={form.month} onChange={e => setForm(f => ({...f, month: e.target.value}))} required />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded">Add</button>
      </form>
      <ul>{budgets.map(b => <li key={b.id}>{b.month} - {b.category}: ${b.amount}</li>)}</ul>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center py-10">
        <nav className="mb-8">
          <Link className="text-blue-400 hover:underline mx-2" to="/">Dashboard</Link>
          <Link className="text-blue-400 hover:underline mx-2" to="/accounts">Accounts</Link>
          <Link className="text-blue-400 hover:underline mx-2" to="/transactions">Transactions</Link>
          <Link className="text-blue-400 hover:underline mx-2" to="/budgets">Budgets</Link>
        </nav>
        <div className="w-full max-w-2xl bg-gray-800 rounded-lg shadow p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/budgets" element={<Budgets />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
