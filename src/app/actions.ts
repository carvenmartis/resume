'use server'

import fs from 'fs'
import path from 'path'
import type { ProfileProps } from '@/types/resume'

const DATA_FILE = path.join(process.cwd(), 'data/resume.json')

function readData(): Record<string, unknown> {
  if (!fs.existsSync(DATA_FILE)) return {}
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'))
}

function writeData(data: Record<string, unknown>) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true })
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2))
}

export async function loadProfileOverrides(): Promise<Partial<ProfileProps> | null> {
  const data = readData()
  return (data.profile as Partial<ProfileProps>) ?? null
}

export async function updateProfileName(firstName: string, lastName: string) {
  const data = readData()
  data.profile = { ...(data.profile as object ?? {}), firstName, lastName }
  writeData(data)
}

export async function updateProfileSummary(summary: string) {
  const data = readData()
  data.profile = { ...(data.profile as object ?? {}), summary }
  writeData(data)
}
