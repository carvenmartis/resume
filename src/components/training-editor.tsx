'use client'

import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { updateCertifications } from '@/app/actions'
import { CertificationProps } from '@/types/resume'
import EditorInput from '@/components/editor-input'

interface TrainingEditorProps {
  certifications: CertificationProps[]
  onChange: (certifications: CertificationProps[]) => void
}

const EMPTY: CertificationProps = { title: '', company: '', date: '' }

const sortByDate = (certs: CertificationProps[]) =>
  [...certs].sort((a, b) => (parseInt(b.date) || 0) - (parseInt(a.date) || 0))

export default function TrainingEditor({ certifications, onChange }: TrainingEditorProps) {
  const keysRef = useRef<number[]>(certifications.map((_, i) => i))
  while (keysRef.current.length < certifications.length) keysRef.current.push(Date.now() + keysRef.current.length)
  const [collapsed, setCollapsed] = useState<Set<number>>(new Set(certifications.map((_, i) => i)))

  const toggle = (key: number) =>
    setCollapsed(prev => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })

  const commit = (updated: CertificationProps[]) => {
    const sorted = sortByDate(updated)
    onChange(sorted)
    updateCertifications(sorted)
  }

  const handleField = (index: number, field: keyof CertificationProps) => ({
    onChange: (value: string) => {
      onChange(certifications.map((c, i) => i === index ? { ...c, [field]: value } : c))
    },
    onPersist: (value: string) => {
      const updated = sortByDate(certifications.map((c, i) => i === index ? { ...c, [field]: value } : c))
      onChange(updated)
      updateCertifications(updated)
    },
  })

  const addCertification = () => {
    const key = Date.now()
    keysRef.current = [...keysRef.current, key]
    commit([...certifications, { ...EMPTY }])
  }

  const removeCertification = (index: number) => {
    const key = keysRef.current[index]
    keysRef.current = keysRef.current.filter((_, i) => i !== index)
    setCollapsed(prev => { const next = new Set(prev); next.delete(key); return next })
    commit(certifications.filter((_, i) => i !== index))
  }

  return (
    <div className="flex flex-col gap-3">
      {certifications.map((cert, i) => {
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
                  {cert.title || 'Untitled'}
                </span>
              </button>
              <button
                type="button"
                title="Remove training"
                onClick={() => removeCertification(i)}
                className="text-gray-300 hover:text-red-500 dark:text-gray-600 dark:hover:text-red-400 transition-colors shrink-0"
              >
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
                    <EditorInput id={`cert-${key}-title`}   label="Title"   defaultValue={cert.title}   {...handleField(i, 'title')} />
                    <EditorInput id={`cert-${key}-company`} label="Company" defaultValue={cert.company} {...handleField(i, 'company')} />
                    <EditorInput id={`cert-${key}-date`}    label="Year"    defaultValue={cert.date}    {...handleField(i, 'date')} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}

      <button
        type="button"
        onClick={addCertification}
        className="flex items-center gap-2 text-xs text-[#8ea59b] hover:text-[#7a9189] font-medium transition-colors"
      >
        <i className="bx bx-plus text-[1rem]" />
        Add training
      </button>
    </div>
  )
}
