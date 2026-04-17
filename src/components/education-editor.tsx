'use client'

import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { updateDegrees } from '@/app/actions'
import { DegreeProps } from '@/types/resume'
import EditorInput from '@/components/editor-input'

interface EducationEditorProps {
  degrees: DegreeProps[]
  onChange: (degrees: DegreeProps[]) => void
}

const EMPTY_DEGREE: DegreeProps = { title: '', school: '', city: '', startDate: '', endDate: '' }

export default function EducationEditor({ degrees, onChange }: EducationEditorProps) {
  const keysRef = useRef<number[]>(degrees.map((_, i) => i))
  const [collapsed, setCollapsed] = useState<Set<number>>(new Set())

  const toggle = (key: number) =>
    setCollapsed(prev => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })

  const commit = (updated: DegreeProps[]) => {
    onChange(updated)
    updateDegrees(updated)
  }

  const handleField = (index: number, field: keyof DegreeProps) => ({
    onChange: (value: string) => {
      onChange(degrees.map((d, i) => i === index ? { ...d, [field]: value } : d))
    },
    onPersist: (value: string) => {
      updateDegrees(degrees.map((d, i) => i === index ? { ...d, [field]: value } : d))
    },
  })

  const addDegree = () => {
    const key = Date.now()
    keysRef.current = [...keysRef.current, key]
    setCollapsed(prev => new Set(prev).add(key))
    commit([...degrees, { ...EMPTY_DEGREE }])
  }

  const removeDegree = (index: number) => {
    const key = keysRef.current[index]
    keysRef.current = keysRef.current.filter((_, i) => i !== index)
    setCollapsed(prev => { const next = new Set(prev); next.delete(key); return next })
    commit(degrees.filter((_, i) => i !== index))
  }

  return (
    <div className="flex flex-col gap-3">
      {degrees.map((degree, i) => {
        const key = keysRef.current[i]
        const isCollapsed = collapsed.has(key)

        return (
          <div key={key} className="flex flex-col rounded-md border border-gray-100 dark:border-gray-800">
            <div className={`flex items-center justify-between gap-1 px-2 ${isCollapsed ? 'py-1' : 'py-2 px-3'}`}>
              <button
                type="button"
                onClick={() => toggle(key)}
                className="flex-1 flex items-center gap-1.5 text-left min-w-0"
              >
                <i className={`bx bx-chevron-${isCollapsed ? 'right' : 'down'} text-gray-400 shrink-0 ${isCollapsed ? 'text-[0.7rem]' : 'text-[0.85rem]'}`} />
                <span className={`font-medium text-gray-600 dark:text-gray-300 truncate ${isCollapsed ? 'text-[0.7rem]' : 'text-xs'}`}>
                  {degree.title || 'Untitled'}
                </span>
              </button>
              <button
                type="button"
                onClick={() => removeDegree(i)}
                className="text-[0.65rem] text-red-400 hover:text-red-600 transition-colors shrink-0"
              >
                Remove
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
                    <EditorInput id={`degree-${key}-title`}     label="Title"      defaultValue={degree.title}     {...handleField(i, 'title')} />
                    <EditorInput id={`degree-${key}-school`}    label="School"     defaultValue={degree.school}    {...handleField(i, 'school')} />
                    <EditorInput id={`degree-${key}-city`}      label="City"       defaultValue={degree.city}      {...handleField(i, 'city')} />
                    <EditorInput id={`degree-${key}-startDate`} label="Start Year" defaultValue={degree.startDate} {...handleField(i, 'startDate')} />
                    <EditorInput id={`degree-${key}-endDate`}   label="End Year"   defaultValue={degree.endDate}   {...handleField(i, 'endDate')} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}

      <button
        type="button"
        onClick={addDegree}
        className="flex items-center gap-2 text-xs text-[#8ea59b] hover:text-[#7a9189] font-medium transition-colors"
      >
        <i className="bx bx-plus text-[1rem]" />
        Add education
      </button>
    </div>
  )
}
