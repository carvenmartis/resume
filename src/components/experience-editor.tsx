'use client'

import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { updateExperiences } from '@/app/actions'
import { Experience } from '@/types/resume'
import EditorInput from '@/components/editor-input'
import EditorTextarea from '@/components/editor-textarea'

interface ExperienceEditorProps {
  experiences: Experience[]
  onChange: (experiences: Experience[]) => void
}

const EMPTY: Experience = { position: '', company: '', location: '', period: '', description: '', responsibilities: [], technologies: [] }

export default function ExperienceEditor({ experiences, onChange }: ExperienceEditorProps) {
  const keysRef = useRef<number[]>(experiences.map((_, i) => i))
  while (keysRef.current.length < experiences.length) keysRef.current.push(Date.now() + keysRef.current.length)
  const [collapsed, setCollapsed] = useState<Set<number>>(new Set(experiences.map((_, i) => i)))

  const toggle = (key: number) =>
    setCollapsed(prev => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })

  const commit = (updated: Experience[]) => {
    onChange(updated)
    updateExperiences(updated)
  }

  const handleField = (index: number, field: keyof Experience) => ({
    onChange: (value: string) => {
      onChange(experiences.map((e, i) => i === index ? { ...e, [field]: value } : e))
    },
    onPersist: (value: string) => {
      updateExperiences(experiences.map((e, i) => i === index ? { ...e, [field]: value } : e))
    },
  })

  const handleArrayField = (index: number, field: 'responsibilities' | 'technologies') => ({
    onChange: (value: string) => {
      const arr = value.split('\n').map(s => s.trim()).filter(Boolean)
      onChange(experiences.map((e, i) => i === index ? { ...e, [field]: arr } : e))
    },
    onPersist: (value: string) => {
      const arr = value.split('\n').map(s => s.trim()).filter(Boolean)
      updateExperiences(experiences.map((e, i) => i === index ? { ...e, [field]: arr } : e))
    },
  })

  const addExperience = () => {
    const key = Date.now()
    keysRef.current = [...keysRef.current, key]
    commit([...experiences, { ...EMPTY }])
  }

  const removeExperience = (index: number) => {
    const key = keysRef.current[index]
    keysRef.current = keysRef.current.filter((_, i) => i !== index)
    setCollapsed(prev => { const next = new Set(prev); next.delete(key); return next })
    commit(experiences.filter((_, i) => i !== index))
  }

  return (
    <div className="flex flex-col gap-3">
      {experiences.map((exp, i) => {
        const key = keysRef.current[i]
        const isCollapsed = collapsed.has(key)

        return (
          <div key={key} className="flex flex-col rounded-md border border-gray-100 dark:border-gray-800">
            <div className={`flex items-center justify-between gap-1 px-2 ${isCollapsed ? 'py-1' : 'py-2 px-3'}`}>
              <button type="button" onClick={() => toggle(key)} className="flex-1 flex items-center gap-1.5 text-left min-w-0">
                <i className={`bx bx-chevron-${isCollapsed ? 'right' : 'down'} text-gray-400 shrink-0 ${isCollapsed ? 'text-[0.7rem]' : 'text-[0.85rem]'}`} />
                <span className={`font-medium text-gray-600 dark:text-gray-300 truncate ${isCollapsed ? 'text-[0.7rem]' : 'text-xs'}`}>
                  {exp.position
                    ? `${exp.position}${exp.company ? ` — ${exp.company}${exp.location ? `, ${exp.location}` : ''}` : ''}`
                    : 'Untitled'}
                </span>
              </button>
              <button type="button" title="Remove experience" onClick={() => removeExperience(i)}
                className="text-gray-300 hover:text-red-500 dark:text-gray-600 dark:hover:text-red-400 transition-colors shrink-0">
                <i className="bx bx-trash text-[0.8rem]" />
              </button>
            </div>

            <AnimatePresence initial={false}>
              {!isCollapsed && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-3 px-3 pb-3">
                    <EditorInput id={`exp-${key}-position`} label="Position"   defaultValue={exp.position}   {...handleField(i, 'position')} />
                    <EditorInput id={`exp-${key}-company`}  label="Company"    defaultValue={exp.company}    {...handleField(i, 'company')} />
                    <EditorInput id={`exp-${key}-location`} label="Location"   defaultValue={exp.location ?? ''} {...handleField(i, 'location')} />
                    <EditorInput id={`exp-${key}-period`}   label="Period"     defaultValue={exp.period}     {...handleField(i, 'period')} />
                    <EditorTextarea id={`exp-${key}-desc`}  label="Description" defaultValue={exp.description} rows={3} {...handleField(i, 'description')} />
                    <EditorTextarea id={`exp-${key}-resp`}  label="Responsibilities (one per line)" defaultValue={exp.responsibilities.join('\n')} rows={4} {...handleArrayField(i, 'responsibilities')} />
                    <EditorTextarea id={`exp-${key}-tech`}  label="Technologies (one per line)"     defaultValue={exp.technologies.join('\n')}     rows={4} {...handleArrayField(i, 'technologies')} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}

      <button type="button" onClick={addExperience}
        className="flex items-center gap-2 text-xs text-[#8ea59b] hover:text-[#7a9189] font-medium transition-colors">
        <i className="bx bx-plus text-[1rem]" />
        Add experience
      </button>
    </div>
  )
}
