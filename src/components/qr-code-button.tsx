'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import QRCode from 'react-qr-code'

export default function QrCodeButton() {
  const [open, setOpen] = useState(false)
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(`${window.location.origin}/resume?download=1`)
  }, [])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        title="Share via QR code"
        className="p-1.5 rounded text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <i className="bx bx-qr text-[0.9rem]" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 flex flex-col items-center gap-5 w-72"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex flex-col items-center gap-1 text-center">
                <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-100">Scan to view resume</h2>
                <p className="text-xs text-gray-400 dark:text-gray-500">Open on any device</p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-gray-100">
                {url && <QRCode value={url} size={180} />}
              </div>

              <div className="flex flex-col items-center gap-1 w-full">
                <p className="text-[0.65rem] text-gray-400 dark:text-gray-500 font-mono break-all text-center">{url}</p>
                <button
                  type="button"
                  onClick={() => navigator.clipboard.writeText(url)}
                  className="text-xs text-[#8ea59b] hover:text-[#7a9189] font-medium transition-colors mt-1"
                >
                  Copy link
                </button>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                title="Close"
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              >
                <i className="bx bx-x text-[1.1rem]" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
