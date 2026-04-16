'use client'
import { useState } from 'react'

export default function PrintButton() {
  const [loading, setLoading] = useState(false)

  async function handleDownload() {
    setLoading(true)
    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import('html2canvas-pro'),
        import('jspdf'),
      ])

      const pages = Array.from(
        document.querySelectorAll<HTMLElement>('.resume-page')
      )

      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })

      for (let i = 0; i < pages.length; i++) {
        const canvas = await html2canvas(pages[i], {
          scale: 0.75,
          useCORS: true,
          allowTaint: true,
          logging: false,
          onclone: (doc, el) => {
            // Reset zoom on the cloned preview container so html2canvas
            // captures the full-resolution layout without touching the live DOM
            const previewScale = doc.querySelector<HTMLElement>('.preview-scale')
            if (previewScale) previewScale.style.zoom = '1'

            // Strip all dark: classes so the PDF is always light mode
            ;[el, ...Array.from(el.querySelectorAll('*'))].forEach((node) => {
              node.classList.forEach((cls) => {
                if (cls.startsWith('dark:')) node.classList.remove(cls)
              })
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
