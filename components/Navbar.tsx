"use client"

import Link from "next/link";
import LogoutButton from "./logoutBtn";
// import { useTheme } from "next-themes";
// import { Button } from "@/components/ui/button";
// import { Sun, Moon } from "lucide-react";
// import { useEffect } from "react";

export default function Navbar() {
  // const { theme, setTheme } = useTheme();

  // const handleThemeToggle = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };

  //  useEffect(() => {
  //     if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //       document.documentElement.classList.add('dark');
  //     }
  //   }, []);

  return (
    <header className="w-full bg-white dark:bg-black border-b">
      <nav className="container mx-auto flex justify-between items-center h-16 px-4">
        <Link href="/" className="text-xl font-bold border-3 border-white px-2 ">
          CodeGPT Lab
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/chat" className="hover:underline hover:text-gray-500">Chat</Link>
          <Link href="/dashboard" className="hover:underline hover:text-gray-500">
          Dashboard
        </Link>
          <Link href="/editor" className="hover:underline hover:text-gray-500">Editor</Link>
          <Link href="/profile" className="hover:underline hover:text-gray-500">Profile</Link>
          <LogoutButton/>

          {/* Theme toggle button */}
          {/* <Button onClick={handleThemeToggle} variant="outline">
            {theme === "dark" ? (
              <Sun className="text-yellow-500" />
            ) : (
              <Moon className="text-gray-800" />
            )}
          </Button> */}
        </div>
      </nav>
    </header>
  );
}
