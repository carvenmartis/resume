import Container from "@/components/content";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Certification from "@/pages/certification";
import Contact from "@/pages/contact";
import Education from "@/pages/education";
import Experience from "@/pages/experience";
import Profile from "@/pages/profile";
import Skills from "@/pages/skills";
import { ResumeData } from "@/types/resume";
import Languages from "@/pages/language";
import { Panel } from "@/components/panel";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col w-[840mm] h-[1188mm] mx-auto">
        <Header profile={ResumeData.profile} isImage={true} />

        <Container>
          <Panel side="left" className="gap-y-[10rem]">
            <Contact contact={ResumeData.contact} className="space-y-5" />

            <Education degrees={ResumeData.degrees} />
            <Certification certifications={ResumeData.certifications} />
          </Panel>

          <Panel side="right">
            <Profile profile={ResumeData.profile} className="mb-10" />

            <Experience experiences={ResumeData.experiences.slice(0, 5)} />
          </Panel>
        </Container>
        <Footer pageNumber={1} />
      </div>

      <div className="flex flex-col w-[840mm] h-[1188mm] mx-auto">
        <Header profile={ResumeData.profile} />

        <Container>
          <Panel side="left" className="gap-y-[10rem]">
            <Skills skills={ResumeData.skills.programming} />
            <Languages languages={ResumeData.skills.languages} />
          </Panel>

          <Panel side="right">
            <Experience experiences={ResumeData.experiences.slice(5)} />
          </Panel>
        </Container>
        <Footer pageNumber={2} />
      </div>
    </div>
  );
}
