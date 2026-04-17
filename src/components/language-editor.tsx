'use client'

import { useRef } from 'react'
import { updateSkills } from '@/app/actions'
import { LanguageItemProps, SkillsProps } from '@/types/resume'
import EditorInput from '@/components/editor-input'

interface LanguageEditorProps {
  skills: SkillsProps
  onChange: (skills: SkillsProps) => void
}

const EMPTY: LanguageItemProps = { title: '', level: 3 }

export default function LanguageEditor({ skills, onChange }: LanguageEditorProps) {
  const keysRef = useRef<number[]>(skills.languages.map((_, i) => i))

  const commit = (languages: LanguageItemProps[]) => {
    const updated = { ...skills, languages }
    onChange(updated)
    updateSkills(updated)
  }

  const handleTitle = (index: number) => ({
    onChange: (value: string) => {
      onChange({ ...skills, languages: skills.languages.map((l, i) => i === index ? { ...l, title: value } : l) })
    },
    onPersist: (value: string) => {
      updateSkills({ ...skills, languages: skills.languages.map((l, i) => i === index ? { ...l, title: value } : l) })
    },
  })

  const setLevel = (index: number, level: number) => {
    commit(skills.languages.map((l, i) => i === index ? { ...l, level } : l))
  }

  const addLanguage = () => {
    keysRef.current = [...keysRef.current, Date.now()]
    commit([...skills.languages, { ...EMPTY }])
  }

  const removeLanguage = (index: number) => {
    keysRef.current = keysRef.current.filter((_, i) => i !== index)
    commit(skills.languages.filter((_, i) => i !== index))
  }

  return (
    <div className="flex flex-col gap-3">
      {skills.languages.map((lang, i) => {
        const key = keysRef.current[i]
        return (
          <div key={key} className="flex flex-col gap-2 rounded-md border border-gray-100 dark:border-gray-800 px-3 py-2">
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <EditorInput
                  id={`lang-${key}-title`}
                  label="Language"
                  defaultValue={lang.title}
                  {...handleTitle(i)}
                />
              </div>
              <button
                type="button"
                title="Remove language"
                onClick={() => removeLanguage(i)}
                className="text-gray-300 hover:text-red-500 dark:text-gray-600 dark:hover:text-red-400 transition-colors mt-4 shrink-0"
              >
                <i className="bx bx-trash text-[0.8rem]" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400 dark:text-gray-500 w-12 shrink-0">Level</span>
              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5].map(dot => (
                  <button
                    key={dot}
                    type="button"
                    onClick={() => setLevel(i, dot)}
                    className="w-3 h-3 rounded-full transition-colors"
                    style={{ backgroundColor: dot <= lang.level ? '#8ea59b' : '#d1d5db' }}
                    title={`Level ${dot}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )
      })}

      <button
        type="button"
        onClick={addLanguage}
        className="flex items-center gap-2 text-xs text-[#8ea59b] hover:text-[#7a9189] font-medium transition-colors"
      >
        <i className="bx bx-plus text-[1rem]" />
        Add language
      </button>
    </div>
  )
}
