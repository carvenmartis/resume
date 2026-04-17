'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { ContactProps, DegreeProps, ProfileProps, ResumeData } from '@/types/resume'
import { loadOverrides } from '@/app/actions'

interface ResumeContextValue {
  profile: ProfileProps
  contact: ContactProps
  degrees: DegreeProps[]
  setProfile: (profile: ProfileProps) => void
  setContact: (contact: ContactProps) => void
  setDegrees: (degrees: DegreeProps[]) => void
}

const ResumeContext = createContext<ResumeContextValue>({
  profile: ResumeData.profile,
  contact: ResumeData.contact,
  degrees: ResumeData.degrees,
  setProfile: () => {},
  setContact: () => {},
  setDegrees: () => {},
})

export const useResume = () => useContext(ResumeContext)

export function ResumeProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<ProfileProps>(ResumeData.profile)
  const [contact, setContact] = useState<ContactProps>(ResumeData.contact)
  const [degrees, setDegrees] = useState<DegreeProps[]>(ResumeData.degrees)

  useEffect(() => {
    loadOverrides().then(overrides => {
      if (overrides.profile) setProfile(prev => ({ ...prev, ...overrides.profile }))
      if (overrides.contact) setContact(prev => ({ ...prev, ...overrides.contact }))
      if (overrides.degrees) setDegrees(overrides.degrees)
    })
  }, [])

  return (
    <ResumeContext.Provider value={{ profile, contact, degrees, setProfile, setContact, setDegrees }}>
      {children}
    </ResumeContext.Provider>
  )
}
