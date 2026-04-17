'use client'

import Container from "@/components/content";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Certification from "@/sections/certification";
import Contact from "@/sections/contact";
import Education from "@/sections/education";
import Experience from "@/sections/experience";
import Profile from "@/sections/profile";
import Skills from "@/sections/skills";
import { ResumeData } from "@/types/resume";
import Languages from "@/sections/language";
import { Panel } from "@/components/panel";
import Hobby from "@/sections/hobby";
import { useResume } from "@/context/resume-context";

export default function Home() {
  const { profile, contact, degrees, certifications } = useResume();

  return (
    <div>
      <div className="resume-page bg-white dark:bg-[#111111] text-[#171717] dark:text-[#f1f5f3] flex flex-col w-[840mm] h-[1188mm] mx-auto">
        <Header profile={profile} image={profile.image} />

        <Container>
          <Panel side="left" className="gap-y-40">
            <Contact contact={contact} className="space-y-5" />
            <Education degrees={degrees} />
            <Certification certifications={certifications} />
          </Panel>

          <Panel side="right">
            <Profile profile={profile} className="mb-20" />
            <Hobby experiences={ResumeData.hobbies} />
            <Experience experiences={ResumeData.experiences.slice(0, 3)} />
          </Panel>
        </Container>
        <Footer pageNumber={1} />
      </div>

      <div className="resume-page bg-white dark:bg-[#111111] text-[#171717] dark:text-[#f1f5f3] flex flex-col w-[840mm] h-[1188mm] mx-auto">
        <Header profile={profile} />

        <Container>
          <Panel side="left" className="gap-y-40">
            <Skills skills={ResumeData.skills.programming} />
            <Languages languages={ResumeData.skills.languages} />
          </Panel>

          <Panel side="right">
            <Experience experiences={ResumeData.experiences.slice(3, 9)} />
          </Panel>
        </Container>
        <Footer pageNumber={2} />
      </div>

      <div className="resume-page bg-white dark:bg-[#111111] text-[#171717] dark:text-[#f1f5f3] flex flex-col w-[840mm] h-[1188mm] mx-auto">
        <Header profile={profile} />

        <Container>
          <Panel side="center">
            <Experience experiences={ResumeData.experiences.slice(9)} />
          </Panel>
        </Container>
        <Footer pageNumber={3} />
      </div>
    </div>
  );
}
