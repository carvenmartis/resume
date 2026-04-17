import { EditorShell } from '@/components/editor-shell'

export default function EditorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-950">
      <EditorShell>{children}</EditorShell>
    </div>
  )
}
