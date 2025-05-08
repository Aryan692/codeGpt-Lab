export default function ChatMessage({ role, content }: { role: string; content: string }) {
  return (
    <div className={`p-3 rounded-xl ${role === "user" ? "bg-blue-100 text-left" : "bg-gray-100 text-right"}`}>
      <p className="text-sm whitespace-pre-wrap">{content}</p>
    </div>
  )
}
