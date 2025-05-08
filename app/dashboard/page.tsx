// app/dashboard/page.tsx
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Code2, MessageSquareText, UserCircle } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          👋 Welcome to CodeGPT Lab Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Code Editor Card */}
          <Card className="hover:shadow-lg transition-all cursor-pointer">
            <CardContent className="p-6 flex items-center justify-between">
           
             <div>
                <h2 className="text-xl font-semibold">Code Editor</h2>
                <p className="text-sm text-gray-500">Practice JavaScript live</p>
              </div>
           
              <Code2 className="h-8 w-8 text-indigo-500" />
            </CardContent>
          </Card>

          {/* Chatbot Card */}
          <Card className="hover:shadow-lg transition-all cursor-pointer">
            <CardContent className="p-6 flex items-center justify-between">
          <div>
                <h2 className="text-xl font-semibold">Chat with AI</h2>
                <p className="text-sm text-gray-500">Ask doubts to our AI assistant</p>
              </div>
             
              <MessageSquareText className="h-8 w-8 text-green-500" />
            </CardContent>
          </Card>

          {/* Profile Card */}
          <Card className="hover:shadow-lg transition-all cursor-pointer">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Your Profile</h2>
                <p className="text-sm text-gray-500">Check your details</p>
              </div>
            
              <UserCircle className="h-8 w-8 text-orange-500" />
            </CardContent>
          </Card>
        </div>

        {/* Footer or Stats Section */}
        <div className="text-sm text-gray-400 pt-4 text-center">
          Built with 💙 by Balram Tiwari | CodeGPT Lab
        </div>
      </div>
    </div>
  );
}
