import { PortfolioLayout } from "../layouts/PortfolioLayout";
import { About } from "../components/About";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { EducationCards } from "../components/EducationCards";
import { Projects } from "../components/Projects";
import { ToolSection } from "../components/ToolSection";
import { Testimonials } from "../components/Testimonials";
import { Certifications } from "../components/Certifications.tsx";
import { FAQAccordion } from "../components/FAQAccordion";
import { Section } from "../components/ui/Section";
import { Footer } from "../components/Footer";
import { HelpCircleIcon } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export function Portfolio() {
  const {
      profile,
      experience,
      education,
      projects,
      tools,
      certifications,
      testimonials,
      faqs,
      navigation,
      gains
  } = portfolioData;

  return (
    <PortfolioLayout profile={profile} navItems={navigation}>
      <About profile={profile} gains={gains} />
      <ExperienceTimeline experience={experience} />
      <EducationCards education={education} />
      <Projects projects={projects} />
        <Certifications certifications={certifications} />
      <ToolSection tools={tools} />
      <Testimonials testimonials={testimonials} />

      <Section id="faq" title="FAQ" icon={HelpCircleIcon}>
        <FAQAccordion faqs={faqs} />
      </Section>

      <Footer profile={profile} />
    </PortfolioLayout>);

}