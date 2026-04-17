'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { CertificationProps, ContactProps, DegreeProps, Experience, ProfileProps, ResumeData, SkillsProps, ThemeProps, DEFAULT_THEME } from '@/types/resume'
import { loadOverrides } from '@/app/actions'

interface ResumeContextValue {
  profile: ProfileProps
  contact: ContactProps
  degrees: DegreeProps[]
  certifications: CertificationProps[]
  skills: SkillsProps
  experiences: Experience[]
  theme: ThemeProps
  setProfile: (v: ProfileProps) => void
  setContact: (v: ContactProps) => void
  setDegrees: (v: DegreeProps[]) => void
  setCertifications: (v: CertificationProps[]) => void
  setSkills: (v: SkillsProps) => void
  setExperiences: (v: Experience[]) => void
  setTheme: (v: ThemeProps) => void
}

const ResumeContext = createContext<ResumeContextValue>({
  profile: ResumeData.profile,
  contact: ResumeData.contact,
  degrees: ResumeData.degrees,
  certifications: ResumeData.certifications,
  skills: ResumeData.skills,
  experiences: ResumeData.experiences,
  theme: DEFAULT_THEME,
  setProfile: () => {},
  setContact: () => {},
  setDegrees: () => {},
  setCertifications: () => {},
  setSkills: () => {},
  setExperiences: () => {},
  setTheme: () => {},
})

export const useResume = () => useContext(ResumeContext)

export function ResumeProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<ProfileProps>(ResumeData.profile)
  const [contact, setContact] = useState<ContactProps>(ResumeData.contact)
  const [degrees, setDegrees] = useState<DegreeProps[]>(ResumeData.degrees)
  const [certifications, setCertifications] = useState<CertificationProps[]>(ResumeData.certifications)
  const [skills, setSkills] = useState<SkillsProps>(ResumeData.skills)
  const [experiences, setExperiences] = useState<Experience[]>(ResumeData.experiences)
  const [theme, setTheme] = useState<ThemeProps>(DEFAULT_THEME)

  useEffect(() => {
    loadOverrides().then(o => {
      if (o.profile) setProfile(prev => ({ ...prev, ...o.profile }))
      if (o.contact) setContact(prev => ({ ...prev, ...o.contact }))
      if (o.degrees) setDegrees(o.degrees)
      if (o.certifications) setCertifications(o.certifications)
      if (o.skills) setSkills(o.skills)
      if (o.experiences) setExperiences(o.experiences)
      if (o.theme) setTheme(o.theme)
    })
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty('--theme-color', theme.accentColor)
    document.documentElement.style.setProperty('--resume-font', `'${theme.fontFamily}', Arial, sans-serif`)
  }, [theme.accentColor, theme.fontFamily])

  return (
    <ResumeContext.Provider value={{ profile, contact, degrees, certifications, skills, experiences, theme, setProfile, setContact, setDegrees, setCertifications, setSkills, setExperiences, setTheme }}>
      {children}
    </ResumeContext.Provider>
  )
}
