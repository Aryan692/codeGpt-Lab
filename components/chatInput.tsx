"use client"

import { useState } from "react"

export default function ChatInput({ onSend }: { onSend: (msg: string) => void }) {
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    onSend(input)
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
      <input
        className="flex-1 border px-3 py-2 rounded-lg"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
        Send
      </button>
    </form>
  )
}
