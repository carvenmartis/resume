'use client'

import { useRef } from 'react'
import { updateProfileImage, removeProfileImage } from '@/app/actions'

interface ProfileImageEditorProps {
  image?: string
  onChange: (image: string | undefined) => void
}

export default function ProfileImageEditor({ image, onChange }: ProfileImageEditorProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()

    img.onload = () => {
      const MAX = 400
      const scale = Math.min(MAX / img.width, MAX / img.height, 1)
      canvas.width = img.width * scale
      canvas.height = img.height * scale
      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height)
      const base64 = canvas.toDataURL('image/jpeg', 0.85)
      onChange(base64)
      updateProfileImage(base64)
      URL.revokeObjectURL(img.src)
    }

    img.src = URL.createObjectURL(file)
    e.target.value = ''
  }

  const handleRemove = () => {
    onChange(undefined)
    removeProfileImage()
  }

  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Photo</span>

      {image ? (
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt="Profile" className="object-cover w-full h-full" />
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="text-xs text-[#8ea59b] hover:text-[#7a9189] font-medium transition-colors"
            >
              Change
            </button>
            <button
              type="button"
              onClick={handleRemove}
              title="Remove photo"
              className="text-xs text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex items-center gap-2 text-xs text-[#8ea59b] hover:text-[#7a9189] font-medium transition-colors"
        >
          <i className="bx bx-upload text-[1rem]" />
          Upload photo
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
        className="hidden"
        aria-label="Upload profile photo"
      />
    </div>
  )
}
