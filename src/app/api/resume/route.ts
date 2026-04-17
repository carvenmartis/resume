import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { ResumeData } from '@/types/resume'

const DATA_FILE = path.join(process.cwd(), 'data/resume.json')

export async function GET() {
  let overrides: Record<string, unknown> = {}
  if (fs.existsSync(DATA_FILE)) {
    overrides = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'))
  }

  const resume = {
    profile: { ...ResumeData.profile, ...(overrides.profile as object ?? {}) },
    contact: { ...ResumeData.contact, ...(overrides.contact as object ?? {}) },
    degrees: (overrides.degrees ?? ResumeData.degrees),
    certifications: (overrides.certifications ?? ResumeData.certifications),
    skills: (overrides.skills ?? ResumeData.skills),
    experiences: (overrides.experiences ?? ResumeData.experiences),
    hobbies: ResumeData.hobbies,
    theme: (overrides.theme ?? { accentColor: '#8ea59b', fontFamily: 'Lato' }),
  }

  return NextResponse.json(resume)
}
