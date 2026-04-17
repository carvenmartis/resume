'use client'

import { useEffect } from 'react'
import { ThemeProps } from '@/types/resume'

export default function ThemeStyleInjector({ theme }: { theme: ThemeProps }) {
  useEffect(() => {
    document.documentElement.style.setProperty('--theme-color', theme.accentColor)
    document.documentElement.style.setProperty('--resume-font', `'${theme.fontFamily}', Arial, sans-serif`)
  }, [theme.accentColor, theme.fontFamily])

  return null
}
