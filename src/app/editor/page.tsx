'use client'

import ResumeDocument from '@/components/resume-document'
import { useResume } from '@/context/resume-context'
import { ResumeData } from '@/types/resume'

export default function EditorPage() {
  const { profile, contact, degrees, certifications, skills, experiences } = useResume()

  return (
    <ResumeDocument
      profile={profile}
      contact={contact}
      degrees={degrees}
      certifications={certifications}
      skills={skills}
      experiences={experiences}
      hobbies={ResumeData.hobbies}
    />
  )
}
