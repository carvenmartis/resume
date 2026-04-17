'use client'

import { useRef } from 'react'
import { updateTheme } from '@/app/actions'
import { ThemeProps, FONT_OPTIONS } from '@/types/resume'

interface ThemeEditorProps {
  theme: ThemeProps
  onChange: (theme: ThemeProps) => void
}

export default function ThemeEditor({ theme, onChange }: ThemeEditorProps) {
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const commit = (updated: ThemeProps) => {
    onChange(updated)
    clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => updateTheme(updated), 400)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="theme-font" className="text-xs font-medium text-gray-500 dark:text-gray-400">Font</label>
        <select
          id="theme-font"
          value={theme.fontFamily}
          onChange={e => commit({ ...theme, fontFamily: e.target.value })}
          className="border border-gray-300 dark:border-gray-600 rounded px-3 py-1.5 text-sm bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#8ea59b]"
        >
          {FONT_OPTIONS.map(font => (
            <option key={font.value} value={font.value}>{font.label}</option>
          ))}
        </select>
        <span className={`text-sm text-gray-500 dark:text-gray-400 font-preview-${theme.fontFamily}`}>
          The quick brown fox jumps over the lazy dog
        </span>
      </div>

      <div className="flex items-center gap-3">
        <label htmlFor="theme-accent" className="text-xs font-medium text-gray-500 dark:text-gray-400 flex-1">Accent color</label>
        <input
          id="theme-accent"
          type="color"
          value={theme.accentColor}
          onChange={e => commit({ ...theme, accentColor: e.target.value })}
          title="Accent color"
          className="w-7 h-7 rounded cursor-pointer border border-gray-200 dark:border-gray-700 bg-transparent p-0.5"
        />
        <span className="text-xs text-gray-400 dark:text-gray-500 font-mono w-16">{theme.accentColor}</span>
      </div>
    </div>
  )
}
