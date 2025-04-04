
import { Clock, Users, Calendar } from 'lucide-react';
import { HeroSection } from '../../components/HeroSection';
import { SolutionSection } from '../../components/SolutionSection';
import { CalendlySection } from '../../components/CalendlySection';
import { ProblemSectionMateus } from './components/ProblemSectionMateus';
import { MidPageCTAMateus } from './components/MidPageCTAMateus';
import { MarketChallengesSectionMateus } from './components/MarketChallengesSectionMateus';
import { OperationalIssuesSectionMateus } from './components/OperationalIssuesSectionMateus';
import { SocialProofSectionMateus } from './components/SocialProofSectionMateus';
import { FAQSectionMateus } from './components/FAQSectionMateus';

export default function MateusPage() {
  const scrollToCalendly = () => {
    const element = document.getElementById('calendly-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Rub For"
        highlightedText="Success Today"
        subtitle="Transform your workplace culture with our unique happiness-boosting belly rubs. Watch productivity soar as your team discovers the ancient secret to workplace joy."
        badgeText="Happiness Guaranteed"
        primaryButtonText="Start Rubbing"
        onButtonClick={scrollToCalendly}
        trustText={{main: "Join 500+ Happy Companies", sub: "Spreading joy one belly rub at a time"}}
        stats={{ value: "97%", label: "Employee Satisfaction Rate"}}
        heroImage={{
          src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
          alt: "Business Growth"
        }}
      />

      <ProblemSectionMateus />

      <SolutionSection
        title="Transform Workspace Into Prosperity Zone"
        solutions={[
          "Our sacred belly rubs boost team spirit and workplace energy instantly",
          "Fortune-drawing belly touches deliver consistent 30% monthly revenue increases guaranteed",
          "Experience magical workplace transformation through ancient prosperity-activating belly wisdom"
        ]}
        image={{
          src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
          alt: "Business Solution"
        }}
        stats={{
          value: "98% Success Rate",
          label: "Client Satisfaction"
        }}
      />

      <MidPageCTAMateus onButtonClick={scrollToCalendly} />

      <MarketChallengesSectionMateus />

      <OperationalIssuesSectionMateus />

      <SocialProofSectionMateus />

      <FAQSectionMateus />

      <CalendlySection
        id="calendly-section"
        title="Book Your Lucky Belly Rub Session"
        subtitle="Transform workplace happiness with our proven fortune-boosting consultation, backed by real results."
        badgeIcon={Clock}
        badgeText="Free Good Fortune Session"
        features={[
          {
            icon: Calendar,
            title: "Flexible Scheduling",
            description: "Choose a time that works best for you"
          },
          {
            icon: Clock,
            title: "15-Minute Session",
            description: "Focused discussion on your business needs"
          },
          {
            icon: Users,
            title: "Expert Consultation",
            description: "Meet with our senior growth strategist"
          }
        ]}
        calendlyUrl="calendly.com/mateus"
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80"
      />
    </div>
  );
}
