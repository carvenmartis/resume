import Container from '@/components/content'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Certification from '@/sections/certification'
import Contact from '@/sections/contact'
import Education from '@/sections/education'
import Experience from '@/sections/experience'
import Profile from '@/sections/profile'
import Skills from '@/sections/skills'
import Languages from '@/sections/language'
import { Panel } from '@/components/panel'
import Hobby from '@/sections/hobby'
import { ProfileProps, ContactProps, DegreeProps, CertificationProps, SkillsProps, Experience as ExperienceType, HobbyProps } from '@/types/resume'

interface ResumeDocumentProps {
  profile: ProfileProps
  contact: ContactProps
  degrees: DegreeProps[]
  certifications: CertificationProps[]
  skills: SkillsProps
  experiences: ExperienceType[]
  hobbies: HobbyProps[]
}

export default function ResumeDocument({ profile, contact, degrees, certifications, skills, experiences, hobbies }: ResumeDocumentProps) {
  return (
    <div>
      <div className="resume-page bg-white text-[#171717] flex flex-col w-[840mm] h-[1188mm] mx-auto">
        <Header profile={profile} image={profile.image} />
        <Container>
          <Panel side="left" className="gap-y-40">
            <Contact contact={contact} className="space-y-5" />
            <Education degrees={degrees} />
            <Certification certifications={certifications} />
          </Panel>
          <Panel side="right">
            <Profile profile={profile} className="mb-20" />
            <Hobby experiences={hobbies} />
            <Experience experiences={experiences.slice(0, 3)} />
          </Panel>
        </Container>
        <Footer pageNumber={1} />
      </div>

      <div className="resume-page bg-white text-[#171717] flex flex-col w-[840mm] h-[1188mm] mx-auto">
        <Header profile={profile} />
        <Container>
          <Panel side="left" className="gap-y-40">
            <Skills skills={skills.programming} />
            <Languages languages={skills.languages} />
          </Panel>
          <Panel side="right">
            <Experience experiences={experiences.slice(3, 9)} />
          </Panel>
        </Container>
        <Footer pageNumber={2} />
      </div>

      <div className="resume-page bg-white text-[#171717] flex flex-col w-[840mm] h-[1188mm] mx-auto">
        <Header profile={profile} />
        <Container>
          <Panel side="center">
            <Experience experiences={experiences.slice(9)} />
          </Panel>
        </Container>
        <Footer pageNumber={3} />
      </div>
    </div>
  )
}
