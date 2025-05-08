"use client"

import { useState, useEffect, useRef } from "react"

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const chatEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to the bottom when new message is added
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = { role: "user", content: input }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput("")

    // Simulate bot typing animation
    setIsTyping(true)

    // Wait for the typing animation before sending bot response
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ messages: newMessages }),
    })

    const data = await res.json()

    setTimeout(() => {
      const botMessage: Message = { role: "assistant", content: data.reply }
      setMessages([...newMessages, botMessage])
      setIsTyping(false)
    }, 1500) // Adjust delay for typing animation
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 py-10">
      <div className="max-w-3xl mx-auto bg-gray-950 p-6 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold mb-6 text-center">🤖 CodeGPT Lab</h1>

        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-xl ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-white"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

         
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-[80%] p-3 rounded-xl bg-gray-700 text-white">
                <div className="animate-pulse">
                  {/* <span className="block h-2 bg-white rounded w-1/2 mb-2"></span> */}
                  <span className="block h-2 bg-white rounded w-1/4">...typing</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none"
            placeholder="Type a message..."
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
          >
            Send
          </button>
        </div>

      
        <div ref={chatEndRef} />
      </div>
    </div>
  )
}
