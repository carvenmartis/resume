'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ResumeProvider, useResume } from '@/context/resume-context'
import NameEditor from '@/components/name-editor'
import EditorTextarea from '@/components/editor-textarea'
import ContactEditor from '@/components/contact-editor'
import EducationEditor from '@/components/education-editor'
import PrintButton from '@/components/print-button'
import { updateProfileSummary } from '@/app/actions'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.6rem] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 pt-2 border-t border-gray-100 dark:border-gray-800">
      {children}
    </p>
  )
}

function EditorSidebar({ previewOpen, onTogglePreview }: { previewOpen: boolean; onTogglePreview: () => void }) {
  const { profile, setProfile, contact, setContact, degrees, setDegrees } = useResume()
  const inner = previewOpen ? '' : 'max-w-lg mx-auto w-full'

  return (
    <motion.aside
      animate={{ width: previewOpen ? '18rem' : '100%' }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className="h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col print:hidden"
    >
      <div className={`flex-1 flex flex-col gap-5 p-6 overflow-y-auto ${inner}`}>
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-100">Resume Editor</h2>
          <button
            type="button"
            onClick={onTogglePreview}
            title={previewOpen ? 'Collapse preview' : 'Expand preview'}
            className="p-1.5 rounded text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <i className={`bx ${previewOpen ? 'bx-layout' : 'bx-expand-alt'} text-[0.9rem]`} />
          </button>
        </div>

        <SectionLabel>Profile</SectionLabel>
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

        <SectionLabel>Contact</SectionLabel>
        <ContactEditor contact={contact} onChange={setContact} />

        <SectionLabel>Education</SectionLabel>
        <EducationEditor degrees={degrees} onChange={setDegrees} />
      </div>

      <div className={`p-6 border-t border-gray-200 dark:border-gray-700 ${inner}`}>
        <PrintButton />
      </div>
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
