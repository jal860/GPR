import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Updated deployment - shadcn/ui demo app
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Welcome to Your shadcn/ui App
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A beautiful, modern UI built with Next.js and shadcn/ui components
          </p>
          <Button size="lg" className="mr-4">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Beautiful Components</CardTitle>
              <CardDescription>
                Pre-built components that are accessible and customizable
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Built with Radix UI primitives and styled with Tailwind CSS for a perfect developer experience.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>TypeScript Ready</CardTitle>
              <CardDescription>
                Full TypeScript support out of the box
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Type-safe components with excellent IntelliSense support for better development.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Customizable</CardTitle>
              <CardDescription>
                Easy to customize and extend with your own styles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Copy, paste, and customize. Own your code and make it yours.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">Ready to Deploy</CardTitle>
              <CardDescription className="text-blue-700">
                Your app is configured and ready to be deployed to Vercel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Deploy to Vercel
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
