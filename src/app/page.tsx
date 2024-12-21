import Container from "@/components/content";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Certification from "@/pages/certification";
import Contact from "@/pages/contact";
import Education from "@/pages/education";
import Experience from "@/pages/experience";
import LeftPanel from "@/components/left-panel";
import Profile from "@/pages/profile";
import RightPanel from "@/components/right-panel";
import Skills from "@/pages/skills";
import { ResumeData } from "@/types/resume";
import Languages from "@/pages/language";

export default function Home() {
  return (
    <div className="flex flex-col w-[840mm] h-[1150mm] mx-auto">
      <div className="">
        <Header profile={ResumeData.profile} isImage={true} />

        <Container>
          <LeftPanel>
            <Contact contact={ResumeData.contact} className="space-y-5" />

            <Education degrees={ResumeData.degrees} />
            <Certification certifications={ResumeData.certifications} />
          </LeftPanel>

          <RightPanel>
            <Profile profile={ResumeData.profile} className="mb-10" />

            <Experience experiences={ResumeData.experiences.slice(0, 5)} />
          </RightPanel>
        </Container>
        <Footer pageNumber={1} />
      </div>

      <div className="mt-[9rem] ">
        <Header profile={ResumeData.profile} />

        <Container>
          <LeftPanel>
            <Skills skills={ResumeData.skills} />
            <Languages skills={ResumeData.skills} />
          </LeftPanel>

          <RightPanel>
            <Experience experiences={ResumeData.experiences.slice(5)} />
          </RightPanel>
        </Container>
        <Footer pageNumber={2} />
      </div>
    </div>
  );
}
