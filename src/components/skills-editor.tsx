'use client'

import { useRef, useState, KeyboardEvent } from 'react'
import { updateSkills } from '@/app/actions'
import { SkillsProps } from '@/types/resume'

interface SkillsEditorProps {
  skills: SkillsProps
  onChange: (skills: SkillsProps) => void
}

export default function SkillsEditor({ skills, onChange }: SkillsEditorProps) {
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const commit = (programming: string[]) => {
    const updated = { ...skills, programming }
    onChange(updated)
    clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => updateSkills(updated), 800)
  }

  const addSkill = () => {
    const value = input.trim()
    if (!value || skills.programming.includes(value)) return
    commit([...skills.programming, value])
    setInput('')
  }

  const removeSkill = (skill: string) => {
    commit(skills.programming.filter(s => s !== skill))
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') { e.preventDefault(); addSkill() }
    if (e.key === 'Backspace' && !input && skills.programming.length > 0) {
      commit(skills.programming.slice(0, -1))
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <div
        className="flex flex-wrap gap-1.5 min-h-10 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {skills.programming.map((skill, i) => (
          <span key={i} className="flex items-center gap-1 px-2 py-0.5 bg-[#8ea59b]/15 text-[#5a7870] dark:text-[#8ea59b] rounded text-[0.65rem] font-medium">
            {skill}
            <button type="button" onClick={() => removeSkill(skill)} className="hover:text-red-500 transition-colors leading-none">
              ×
            </button>
          </span>
        ))}
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={skills.programming.length === 0 ? 'Type a skill and press Enter…' : ''}
          className="flex-1 min-w-24 bg-transparent text-xs text-gray-700 dark:text-gray-300 placeholder-gray-300 dark:placeholder-gray-600 outline-none"
        />
      </div>
      <p className="text-[0.6rem] text-gray-400">Press Enter to add · Backspace to remove last</p>
    </div>
  )
}
