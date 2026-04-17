'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ResumeProvider, useResume } from '@/context/resume-context'
import NameEditor from '@/components/name-editor'
import EditorTextarea from '@/components/editor-textarea'
import ContactEditor from '@/components/contact-editor'
import EducationEditor from '@/components/education-editor'
import TrainingEditor from '@/components/training-editor'
import PrintButton from '@/components/print-button'
import { updateProfileSummary } from '@/app/actions'

function CollapsibleSection({
  label,
  compact = false,
  children,
}: {
  label: string
  compact?: boolean
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(true)

  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className={`flex items-center justify-between w-full text-left group ${
          compact
            ? 'pt-2 border-t border-gray-100 dark:border-gray-800'
            : 'pb-2 border-b-2 border-[#8ea59b]/40'
        }`}
      >
        <span className={`font-semibold uppercase tracking-widest ${
          compact
            ? 'text-[0.6rem] text-gray-400 dark:text-gray-500'
            : 'text-xs text-gray-500 dark:text-gray-400'
        }`}>
          {label}
        </span>
        <i className={`bx bx-chevron-${open ? 'down' : 'right'} text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors ${compact ? 'text-[0.7rem]' : 'text-[0.85rem]'}`} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className={compact ? 'flex flex-col gap-4 pt-4' : 'flex flex-col gap-4 pt-3'}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function EditorSidebar({ previewOpen, onTogglePreview }: { previewOpen: boolean; onTogglePreview: () => void }) {
  const { profile, setProfile, contact, setContact, degrees, setDegrees, certifications, setCertifications } = useResume()

  const toggleBtn = (
    <button
      type="button"
      onClick={onTogglePreview}
      title={previewOpen ? 'Collapse preview' : 'Expand preview'}
      className="p-1.5 rounded text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      <i className={`bx ${previewOpen ? 'bx-layout' : 'bx-expand-alt'} text-[0.9rem]`} />
    </button>
  )

  return (
    <motion.aside
      animate={{ width: previewOpen ? '18rem' : '100%' }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className="relative h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col print:hidden overflow-hidden"
    >
      <div className="absolute top-3 right-3 z-10">
        {toggleBtn}
      </div>

      {previewOpen ? (
        <>
          <div className="flex-1 flex flex-col gap-5 p-6 pt-10 overflow-y-auto">
            <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-100">Resume Editor</h2>
            <CollapsibleSection label="Profile" compact>
              <NameEditor
                firstName={profile.firstName}
                lastName={profile.lastName}
                onChange={(firstName, lastName) => setProfile({ ...profile, firstName, lastName })}
              />
              <EditorTextarea
                id="summary"
                label="Summary"
                defaultValue={profile.summary}
                rows={6}
                onChange={value => setProfile({ ...profile, summary: value })}
                onPersist={value => updateProfileSummary(value)}
              />
            </CollapsibleSection>
            <CollapsibleSection label="Contact" compact>
              <ContactEditor contact={contact} onChange={setContact} />
            </CollapsibleSection>
            <CollapsibleSection label="Education" compact>
              <EducationEditor degrees={degrees} onChange={setDegrees} />
            </CollapsibleSection>
            <CollapsibleSection label="Training" compact>
              <TrainingEditor certifications={certifications} onChange={setCertifications} />
            </CollapsibleSection>
          </div>
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <PrintButton />
          </div>
        </>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto p-8 pt-12">
            <div className="max-w-5xl mx-auto flex flex-col gap-6">
              <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-100">Resume Editor</h2>
              <div className="grid grid-cols-3 gap-8">
                <div className="flex flex-col gap-4">
                  <CollapsibleSection label="Profile">
                    <NameEditor
                      firstName={profile.firstName}
                      lastName={profile.lastName}
                      onChange={(firstName, lastName) => setProfile({ ...profile, firstName, lastName })}
                    />
                    <EditorTextarea
                      id="summary"
                      label="Summary"
                      defaultValue={profile.summary}
                      rows={8}
                      onChange={value => setProfile({ ...profile, summary: value })}
                      onPersist={value => updateProfileSummary(value)}
                    />
                  </CollapsibleSection>
                </div>
                <div className="flex flex-col gap-4">
                  <CollapsibleSection label="Contact">
                    <ContactEditor contact={contact} onChange={setContact} />
                  </CollapsibleSection>
                </div>
                <div className="flex flex-col gap-4">
                  <CollapsibleSection label="Education">
                    <EducationEditor degrees={degrees} onChange={setDegrees} />
                  </CollapsibleSection>
                </div>
                <div className="flex flex-col gap-4">
                  <CollapsibleSection label="Training">
                    <TrainingEditor certifications={certifications} onChange={setCertifications} />
                  </CollapsibleSection>
                </div>
              </div>
            </div>
          </div>
          <div className="px-8 py-5 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-5xl mx-auto">
              <PrintButton />
            </div>
          </div>
        </>
      )}
    </motion.aside>
  )
}

export function EditorShell({ children }: { children: React.ReactNode }) {
  const [previewOpen, setPreviewOpen] = useState(true)

  return (
    <ResumeProvider>
      <EditorSidebar previewOpen={previewOpen} onTogglePreview={() => setPreviewOpen(v => !v)} />
      <AnimatePresence>
        {previewOpen && (
          <motion.main
            key="preview"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="flex-1 h-full overflow-y-auto bg-gray-300 dark:bg-gray-950 flex flex-col items-center"
          >
            <div className="preview-scale">
              {children}
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </ResumeProvider>
  )
}
