"use client"

import Editor from "@monaco-editor/react"

type Props = {
  code: string
  setCode: (code: string) => void
}

export default function CodeEditor({ code, setCode }: Props) {
  return (
    <div className="rounded-xl overflow-hidden border">
      <Editor
        height="400px"
        defaultLanguage="javascript"
        theme="vs-dark"
        value={code}
        onChange={(val) => setCode(val || "")}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
        }}
      />
    </div>
  )
}
