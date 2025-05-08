"use client"

import { useState } from "react"

import { executeCode } from "@/lib/executeCode"
import { Button } from "@/components/ui/button"
import CodeEditor from "@/components/codeEditor"
import CodeOutput from "@/components/codeOutput"

export default function EditorPage() {
  const [code, setCode] = useState("// Write your JS code here")
  const [output, setOutput] = useState("")

  
 

  const runCode = () => {
    const logs: string[] = []
    const originalLog = console.log
  
    try {
      // Hijack console.log
      console.log = (...args) => {
        logs.push(args.join(" "))
      }
  
      const result = eval(code)
      if (result !== undefined) logs.push(String(result))
      setOutput(logs.join("\n"))
    } catch (err: any) {
      setOutput("Error: " + err.message)
    } finally {
      // Restore console.log
      console.log = originalLog
    }
  }
  
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Live JavaScript Code Editor</h1>
      <CodeEditor code={code} setCode={setCode} />
      <Button onClick={runCode} className="mt-4">Run</Button>
      <CodeOutput output={output} />
    </div>
  )
}
