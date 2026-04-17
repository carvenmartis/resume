'use client'

import { useResume } from '@/context/resume-context'

export default function ExportJsonButton() {
  const { profile, contact, degrees, certifications, skills, experiences, theme } = useResume()

  const handleExport = () => {
    const data = { profile, contact, degrees, certifications, skills, experiences, theme }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'resume.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <button
      type="button"
      onClick={handleExport}
      className="w-full py-2 px-4 border border-[#8ea59b] text-[#8ea59b] hover:bg-[#8ea59b]/10 font-semibold rounded-md transition-colors text-sm"
    >
      Export JSON
    </button>
  )
}
