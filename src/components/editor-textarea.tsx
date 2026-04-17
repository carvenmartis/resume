'use client'

import { useEffect, useRef } from 'react'

interface EditorTextareaProps {
  label: string
  id: string
  defaultValue?: string
  rows?: number
  debounceMs?: number
  onChange?: (value: string) => void
  onPersist?: (value: string) => void
}

export default function EditorTextarea({
  label,
  id,
  defaultValue,
  rows = 5,
  debounceMs = 800,
  onChange,
  onPersist,
}: EditorTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    if (textareaRef.current && defaultValue !== undefined) {
      textareaRef.current.value = defaultValue
    }
    if (sessionStorage.getItem('resume-editor-focus') === id) {
      textareaRef.current?.focus()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleFocus = () => {
    sessionStorage.setItem('resume-editor-focus', id)
  }

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (e.relatedTarget !== null) {
      sessionStorage.removeItem('resume-editor-focus')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    const target = e.target

    onChange?.(value)
    requestAnimationFrame(() => target.focus())

    clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => onPersist?.(value), debounceMs)
  }

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-xs font-medium text-gray-500 dark:text-gray-400">
        {label}
      </label>
      <textarea
        id={id}
        ref={textareaRef}
        defaultValue={defaultValue}
        rows={rows}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        className="border border-gray-300 dark:border-gray-600 rounded px-3 py-1.5 text-sm bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#8ea59b] resize-none leading-relaxed"
      />
    </div>
  )
}
