'use client'

import { updateProfileName } from '@/app/actions'
import { useRef } from 'react'
import EditorInput from '@/components/editor-input'

interface NameEditorProps {
  firstName: string
  lastName: string
  onChange: (firstName: string, lastName: string) => void
}

export default function NameEditor({ firstName, lastName, onChange }: NameEditorProps) {
  const valuesRef = useRef({ firstName, lastName })

  return (
    <div className="flex flex-col gap-4">
      <EditorInput
        id="firstName"
        label="First Name"
        defaultValue={firstName}
        onChange={value => {
          valuesRef.current.firstName = value
          onChange(value, valuesRef.current.lastName)
        }}
        onPersist={value => updateProfileName(value, valuesRef.current.lastName)}
      />
      <EditorInput
        id="lastName"
        label="Last Name"
        defaultValue={lastName}
        onChange={value => {
          valuesRef.current.lastName = value
          onChange(valuesRef.current.firstName, value)
        }}
        onPersist={value => updateProfileName(valuesRef.current.firstName, value)}
      />
    </div>
  )
}
