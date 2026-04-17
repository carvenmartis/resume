'use client'

import { useEffect, useRef } from 'react'

interface EditorInputProps {
  label: string
  id: string
  defaultValue?: string
  debounceMs?: number
  onChange?: (value: string) => void
  onPersist?: (value: string) => void
}

export default function EditorInput({
  label,
  id,
  defaultValue,
  debounceMs = 800,
  onChange,
  onPersist,
}: EditorInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    if (inputRef.current && defaultValue !== undefined) {
      inputRef.current.value = defaultValue
    }
    if (sessionStorage.getItem('resume-editor-focus') === id) {
      inputRef.current?.focus()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleFocus = () => {
    sessionStorage.setItem('resume-editor-focus', id)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.relatedTarget !== null) {
      sessionStorage.removeItem('resume-editor-focus')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <input
        id={id}
        ref={inputRef}
        defaultValue={defaultValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        className="border border-gray-300 dark:border-gray-600 rounded px-3 py-1.5 text-sm bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#8ea59b]"
      />
    </div>
  )
}
