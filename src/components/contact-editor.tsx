'use client'

import { updateContact } from '@/app/actions'
import { ContactProps } from '@/types/resume'
import EditorInput from '@/components/editor-input'

interface ContactEditorProps {
  contact: ContactProps
  onChange: (contact: ContactProps) => void
}

export default function ContactEditor({ contact, onChange }: ContactEditorProps) {
  const handle = (field: keyof ContactProps) => ({
    onChange: (value: string) => onChange({ ...contact, [field]: value }),
    onPersist: (value: string) => updateContact({ [field]: value }),
  })

  return (
    <div className="flex flex-col gap-4">
      <EditorInput id="contact-location" label="Location" defaultValue={contact.location} {...handle('location')} />
      <EditorInput id="contact-phone"    label="Phone"    defaultValue={contact.phone}    {...handle('phone')} />
      <EditorInput id="contact-email"    label="Email"    defaultValue={contact.email}    {...handle('email')} />
    </div>
  )
}
