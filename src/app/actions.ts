'use server'

import fs from 'fs'
import path from 'path'
import type { ProfileProps, ContactProps, DegreeProps, CertificationProps, SkillsProps, Experience } from '@/types/resume'

const DATA_FILE = path.join(process.cwd(), 'data/resume.json')

function readData(): Record<string, unknown> {
  if (!fs.existsSync(DATA_FILE)) return {}
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'))
}

function writeData(data: Record<string, unknown>) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true })
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2))
}

export async function loadOverrides(): Promise<{
  profile?: Partial<ProfileProps>
  contact?: Partial<ContactProps>
  degrees?: DegreeProps[]
  certifications?: CertificationProps[]
  skills?: SkillsProps
  experiences?: Experience[]
}> {
  return readData() as ReturnType<typeof loadOverrides> extends Promise<infer T> ? T : never
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

export async function updateContact(contact: Partial<ContactProps>) {
  const data = readData()
  data.contact = { ...(data.contact as object ?? {}), ...contact }
  writeData(data)
}

export async function updateDegrees(degrees: DegreeProps[]) {
  const data = readData()
  data.degrees = degrees
  writeData(data)
}

export async function updateCertifications(certifications: CertificationProps[]) {
  const data = readData()
  data.certifications = certifications
  writeData(data)
}

export async function updateSkills(skills: SkillsProps) {
  const data = readData()
  data.skills = skills
  writeData(data)
}

export async function updateExperiences(experiences: Experience[]) {
  const data = readData()
  data.experiences = experiences
  writeData(data)
}
