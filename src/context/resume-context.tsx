'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { CertificationProps, ContactProps, DegreeProps, ProfileProps, ResumeData } from '@/types/resume'
import { loadOverrides } from '@/app/actions'

interface ResumeContextValue {
  profile: ProfileProps
  contact: ContactProps
  degrees: DegreeProps[]
  certifications: CertificationProps[]
  setProfile: (profile: ProfileProps) => void
  setContact: (contact: ContactProps) => void
  setDegrees: (degrees: DegreeProps[]) => void
  setCertifications: (certifications: CertificationProps[]) => void
}

const ResumeContext = createContext<ResumeContextValue>({
  profile: ResumeData.profile,
  contact: ResumeData.contact,
  degrees: ResumeData.degrees,
  certifications: ResumeData.certifications,
  setProfile: () => {},
  setContact: () => {},
  setDegrees: () => {},
  setCertifications: () => {},
})

export const useResume = () => useContext(ResumeContext)

export function ResumeProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<ProfileProps>(ResumeData.profile)
  const [contact, setContact] = useState<ContactProps>(ResumeData.contact)
  const [degrees, setDegrees] = useState<DegreeProps[]>(ResumeData.degrees)
  const [certifications, setCertifications] = useState<CertificationProps[]>(ResumeData.certifications)

  useEffect(() => {
    loadOverrides().then(overrides => {
      if (overrides.profile) setProfile(prev => ({ ...prev, ...overrides.profile }))
      if (overrides.contact) setContact(prev => ({ ...prev, ...overrides.contact }))
      if (overrides.degrees) setDegrees(overrides.degrees)
      if (overrides.certifications) setCertifications(overrides.certifications)
    })
  }, [])

  return (
    <ResumeContext.Provider value={{ profile, contact, degrees, certifications, setProfile, setContact, setDegrees, setCertifications }}>
      {children}
    </ResumeContext.Provider>
  )
}
