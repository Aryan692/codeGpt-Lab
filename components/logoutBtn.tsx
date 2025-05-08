"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button" 
import { LogOut } from "lucide-react"

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch("/api/logout") 
    router.push("/auth/login") 
  }

  return (
    <Button
      variant="outline"
      onClick={handleLogout}
      className="flex items-center gap-2"
    >
      <LogOut className="h-4 w-4" />
      Logout
    </Button>
  )
}
