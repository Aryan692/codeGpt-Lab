export function executeCode(code: string): string {
    try {
      const result = eval(code)
      return typeof result === "undefined" ? "undefined" : String(result)
    } catch (err: any) {
      return "Error: " + err.message
    }
  }