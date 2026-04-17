import fs from 'fs'
import path from 'path'
import ResumeDocument from '@/components/resume-document'
import { ResumeData, ThemeProps, DEFAULT_THEME } from '@/types/resume'
import ThemeStyleInjector from '@/components/theme-style-injector'
import AutoDownloadPdf from '@/components/auto-download-pdf'

const DATA_FILE = path.join(process.cwd(), 'data/resume.json')

export const dynamic = 'force-dynamic'

export default async function ResumePage({ searchParams }: { searchParams: Promise<Record<string, string>> }) {
  const params = await searchParams

  let overrides: Record<string, unknown> = {}
  if (fs.existsSync(DATA_FILE)) {
    overrides = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'))
  }

  const profile = { ...ResumeData.profile, ...(overrides.profile as object ?? {}) }
  const contact = { ...ResumeData.contact, ...(overrides.contact as object ?? {}) }
  const degrees = (overrides.degrees ?? ResumeData.degrees) as typeof ResumeData.degrees
  const certifications = (overrides.certifications ?? ResumeData.certifications) as typeof ResumeData.certifications
  const skills = (overrides.skills ?? ResumeData.skills) as typeof ResumeData.skills
  const experiences = (overrides.experiences ?? ResumeData.experiences) as typeof ResumeData.experiences
  const theme = (overrides.theme ?? DEFAULT_THEME) as ThemeProps
  const autoDownload = params?.download === '1'

  return (
    <>
      <ThemeStyleInjector theme={theme} />
      {autoDownload && <AutoDownloadPdf />}
      <div className="min-h-screen bg-gray-200 dark:bg-black flex flex-col items-center">
        <div className="preview-scale">
        <ResumeDocument
          profile={profile}
          contact={contact}
          degrees={degrees}
          certifications={certifications}
          skills={skills}
          experiences={experiences}
          hobbies={ResumeData.hobbies}
        />
        </div>
      </div>
    </>
  )
}
