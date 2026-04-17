'use client'

import { useEffect } from 'react'

function DarkModeSync() {
  useEffect(() => {
    const apply = (dark: boolean) => document.documentElement.classList.toggle('dark', dark)
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    apply(mq.matches)
    mq.addEventListener('change', e => apply(e.matches))
  }, [])
  return null
}

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DarkModeSync />
      {children}
    </>
  )
}
