'use client'

import { useEffect, useState } from 'react'

function waitForImages(): Promise<void> {
  const images = Array.from(document.querySelectorAll<HTMLImageElement>('img'))
  const pending = images.filter(img => !img.complete)
  if (pending.length === 0) return Promise.resolve()
  return Promise.all(pending.map(img => new Promise<void>(resolve => {
    img.onload = () => resolve()
    img.onerror = () => resolve()
  }))).then(() => undefined)
}

function nextFrame(): Promise<void> {
  return new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())))
}

export default function AutoDownloadPdf() {
  const [status, setStatus] = useState<'generating' | 'done'>('generating')

  useEffect(() => {
    let cancelled = false

    const run = async () => {
      try {
        await document.fonts.ready
        await waitForImages()
        await nextFrame()

        const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
          import('html2canvas-pro'),
          import('jspdf'),
        ])

        const pages = Array.from(document.querySelectorAll<HTMLElement>('.resume-page'))
        if (pages.length === 0) throw new Error('No .resume-page elements found')

        const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })

        for (let i = 0; i < pages.length; i++) {
          const canvas = await html2canvas(pages[i], {
            scale: 0.75,
            useCORS: true,
            allowTaint: true,
            logging: false,
            onclone: (doc, el) => {
              const previewScale = doc.querySelector<HTMLElement>('.preview-scale')
              if (previewScale) previewScale.style.zoom = '1'
              ;[el, ...Array.from(el.querySelectorAll('*'))].forEach(node => {
                node.classList.forEach(cls => {
                  if (cls.startsWith('dark:')) node.classList.remove(cls)
                })
              })
            },
          })

          if (i > 0) pdf.addPage()
          pdf.addImage(canvas.toDataURL('image/jpeg', 0.92), 'JPEG', 0, 0, 210, 297)
        }

        if (!cancelled) {
          pdf.save('resume.pdf')
          setStatus('done')
        }
      } catch (err) {
        console.error('PDF generation failed:', err)
        if (!cancelled) setStatus('done')
      }
    }

    run()
    return () => { cancelled = true }
  }, [])

  if (status === 'done') return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3">
        <i className="bx bx-loader-alt bx-spin text-[2rem] text-[#8ea59b]" />
        <p className="text-sm font-medium text-gray-700">Generating PDF…</p>
      </div>
    </div>
  )
}
