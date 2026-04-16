'use client'
import { useState } from 'react'

export default function PrintButton() {
  const [loading, setLoading] = useState(false)

  async function handleDownload() {
    setLoading(true)

    let previewEl: HTMLElement | null = null
    let prevZoom = ''

    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import('html2canvas-pro'),
        import('jspdf'),
      ])

      const pages = Array.from(
        document.querySelectorAll<HTMLElement>('.resume-page')
      )

      // Temporarily reset zoom so html2canvas captures the full-resolution layout
      previewEl = document.querySelector<HTMLElement>('.preview-scale')
      if (previewEl) {
        prevZoom = previewEl.style.zoom
        previewEl.style.zoom = '1'
        // Wait for the browser to re-layout at full scale
        await new Promise((r) => setTimeout(r, 80))
      }

      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })

      for (let i = 0; i < pages.length; i++) {
        const canvas = await html2canvas(pages[i], {
          scale: 0.75,
          useCORS: true,
          allowTaint: true,
          logging: false,
          onclone: (_doc, el) => {
            el.querySelectorAll('*').forEach((node) => {
              node.classList.forEach((cls) => {
                if (cls.startsWith('dark:')) node.classList.remove(cls)
              })
            })
            el.classList.forEach((cls) => {
              if (cls.startsWith('dark:')) el.classList.remove(cls)
            })
          },
        })

        if (i > 0) pdf.addPage()
        pdf.addImage(canvas.toDataURL('image/jpeg', 0.92), 'JPEG', 0, 0, 210, 297)
      }

      pdf.save('resume.pdf')
    } catch (err) {
      console.error('PDF generation failed', err)
    } finally {
      if (previewEl) previewEl.style.zoom = prevZoom
      setLoading(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={loading}
      className="mt-auto w-full py-2 px-4 bg-[#8ea59b] hover:bg-[#7a9189] text-white font-semibold rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? 'Generating PDF…' : 'Download PDF'}
    </button>
  )
}
