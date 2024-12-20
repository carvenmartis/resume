import Container from "@/components/content";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LeftPanel from "@/pages/left-panel";
import RightPanel from "@/pages/right-panel";
import { ResumeData } from "@/types/resume";

export default function Home() {
  return (
    <div className="flex flex-col w-[840mm] h-[1150mm] mx-auto">
      <Header profile={ResumeData.profile} />

      <Container>
        <LeftPanel resume={ResumeData} />

        <RightPanel resume={ResumeData} />
      </Container>
      <Footer pageNumber={1} />
    </div>
  );
}
