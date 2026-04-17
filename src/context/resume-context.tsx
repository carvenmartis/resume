'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { ProfileProps, ResumeData } from '@/types/resume'
import { loadProfileOverrides } from '@/app/actions'

interface ResumeContextValue {
  profile: ProfileProps
  setProfile: (profile: ProfileProps) => void
}

const ResumeContext = createContext<ResumeContextValue>({
  profile: ResumeData.profile,
  setProfile: () => {},
})

export const useResume = () => useContext(ResumeContext)

export function ResumeProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<ProfileProps>(ResumeData.profile)

  useEffect(() => {
    loadProfileOverrides().then(overrides => {
      if (overrides) setProfile(prev => ({ ...prev, ...overrides }))
    })
  }, [])

  return (
    <ResumeContext.Provider value={{ profile, setProfile }}>
      {children}
    </ResumeContext.Provider>
  )
}
