'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { importResumeData, clearResumeData } from '@/app/actions'

export default function StartPage() {
  const router = useRouter()
  const fileRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<'import' | 'new' | null>(null)

  const handleStartNew = async () => {
    setLoading('new')
    await clearResumeData()
    router.push('/editor')
  }

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setError(null)
    setLoading('import')

    const reader = new FileReader()
    reader.onload = async (ev) => {
      try {
        const data = JSON.parse(ev.target?.result as string)
        await importResumeData(data)
        router.push('/editor')
      } catch {
        setError('Invalid JSON file. Please select a valid resume export.')
        setLoading(null)
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
      <div className="w-full max-w-md flex flex-col items-center gap-10">

        <div className="flex flex-col items-center gap-2 text-center">
          <div className="w-12 h-12 rounded-full bg-[#8ea59b]/15 flex items-center justify-center mb-2">
            <i className="bx bx-file text-[1.4rem] text-[#8ea59b]" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            Resume Editor
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Import an existing resume or start from scratch.
          </p>
        </div>

        <div className="w-full flex flex-col gap-3">
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            disabled={loading !== null}
            className="group w-full flex items-center gap-4 p-5 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700 hover:border-[#8ea59b] hover:bg-[#8ea59b]/5 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-left"
          >
            <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:bg-[#8ea59b]/10 flex items-center justify-center shrink-0 transition-colors">
              {loading === 'import'
                ? <i className="bx bx-loader-alt bx-spin text-[1.1rem] text-[#8ea59b]" />
                : <i className="bx bx-upload text-[1.1rem] text-gray-500 group-hover:text-[#8ea59b] transition-colors" />
              }
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">Import JSON</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Load a previously exported resume file</p>
            </div>
          </button>

          <div className="relative flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
            <span className="text-xs text-gray-400 dark:text-gray-600 shrink-0">or</span>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
          </div>

          <button
            type="button"
            onClick={handleStartNew}
            disabled={loading !== null}
            className="group w-full flex items-center gap-4 p-5 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-[#8ea59b] hover:bg-[#8ea59b]/5 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-left"
          >
            <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:bg-[#8ea59b]/10 flex items-center justify-center shrink-0 transition-colors">
              {loading === 'new'
                ? <i className="bx bx-loader-alt bx-spin text-[1.1rem] text-[#8ea59b]" />
                : <i className="bx bx-plus text-[1.1rem] text-gray-500 group-hover:text-[#8ea59b] transition-colors" />
              }
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">Start New</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Begin with a blank resume template</p>
            </div>
          </button>
        </div>

        {error && (
          <p className="text-xs text-red-500 dark:text-red-400 flex items-center gap-1.5">
            <i className="bx bx-error-circle text-[0.9rem]" />
            {error}
          </p>
        )}

        <input
          ref={fileRef}
          type="file"
          accept=".json,application/json"
          onChange={handleImport}
          className="hidden"
          aria-label="Import JSON file"
        />
      </div>
    </div>
  )
}
