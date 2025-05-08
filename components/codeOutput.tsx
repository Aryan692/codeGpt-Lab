import { ScrollArea } from "@/components/ui/scroll-area"

type Props = {
  output: string
}

export default function CodeOutput({ output }: Props) {
  return (
    <div>
      <h2 className="font-semibold mb-2">🔽 Output:</h2>
      <ScrollArea className="h-32 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg text-sm text-gray-800 dark:text-gray-200">
        {output}
      </ScrollArea>
    </div>
  )
}
