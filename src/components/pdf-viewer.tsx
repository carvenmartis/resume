'use client'
import dynamic from 'next/dynamic'

export default dynamic(
  async () => {
    const [{ PDFViewer }, { default: ResumePDF }] = await Promise.all([
      import('@react-pdf/renderer'),
      import('@/pdf/resume-pdf'),
    ])

    return function PDFPreview() {
      const imageUrl = window.location.origin + '/bg-img.jpg'
      return (
        <PDFViewer style={{ width: '100%', height: '100%', border: 'none' }}>
          <ResumePDF imageUrl={imageUrl} />
        </PDFViewer>
      )
    }
  },
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center w-full h-full bg-gray-500">
        <p className="text-white text-sm">Generating PDF preview…</p>
      </div>
    ),
  }
)
