import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MessageSquare,
  Upload,
  Sun,
  Palmtree,
  Home,
  Briefcase,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sun className="h-12 w-12 text-orange-500" />
            <Palmtree className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Aruba
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your complete guide to relocating to One Happy Island. Get
            personalized assistance, manage your documents, and connect with our
            AI assistant for all your relocation needs.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/chat">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat with AI Assistant
              </Button>
            </Link>
            <Link href="/files">
              <Button size="lg" variant="outline">
                <Upload className="mr-2 h-5 w-5" />
                Upload Documents
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          How We Help You Relocate
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-2 hover:border-blue-500 transition-colors">
            <CardHeader>
              <MessageSquare className="h-10 w-10 text-blue-600 mb-2" />
              <CardTitle>AI Assistant</CardTitle>
              <CardDescription>
                Get instant answers about visa requirements, housing, job
                opportunities, and local regulations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/chat">
                <Button variant="link" className="pl-0">
                  Start chatting →
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-green-500 transition-colors">
            <CardHeader>
              <Upload className="h-10 w-10 text-green-600 mb-2" />
              <CardTitle>Document Management</CardTitle>
              <CardDescription>
                Securely upload and organize all your relocation documents in
                one place
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/files">
                <Button variant="link" className="pl-0">
                  Manage files →
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-orange-500 transition-colors">
            <CardHeader>
              <Briefcase className="h-10 w-10 text-orange-600 mb-2" />
              <CardTitle>Relocation Guide</CardTitle>
              <CardDescription>
                Step-by-step guidance through every stage of your move to Aruba
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/guide">
                <Button variant="link" className="pl-0">
                  View guide →
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Home className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Aruba offers a unique blend of Caribbean lifestyle, business
              opportunities, and year-round sunshine. Let us help you make the
              move smooth and stress-free.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Perfect Climate</h3>
                <p className="text-gray-600">
                  Enjoy 82°F average temperature year-round with minimal
                  rainfall
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Safe & Stable</h3>
                <p className="text-gray-600">
                  One of the safest islands in the Caribbean with political
                  stability
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">
                  Business Friendly
                </h3>
                <p className="text-gray-600">
                  Attractive tax benefits and growing economy for entrepreneurs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
