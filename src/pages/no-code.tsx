
// Fix import - add missing imports and remove unused ones
import { Users, Shield, Zap, Clock, TrendingDown, AlertTriangle, DollarSign, Ban, Target, Calendar } from 'lucide-react';
import { HeroSection } from '../components/HeroSection';
import { ProblemSection } from '../components/ProblemSection';
import { SolutionSection } from '../components/SolutionSection';
import { MidPageCTA } from '../components/MidPageCTA';
import { MarketChallengesSection } from '../components/MarketChallengesSection';
import { OperationalIssuesSection } from '../components/OperationalIssuesSection';
import { SocialProofSection } from '../components/SocialProofSection';
import { FAQSection } from '../components/FAQSection';
import { CalendlySection } from '../components/CalendlySection';

export default function HomePage() {
  const scrollToCalendly = () => {
    const element = document.getElementById('calendly-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Automate Your"
        highlightedText="Business Growth"
        subtitle="Transform your SMB with powerful no-code automation solutions that cut costs and save hundreds of hours monthly"
        badgeText="Trusted Automation Partner"
        primaryButtonText="Start Free"
        onButtonClick={scrollToCalendly}
        trustText={{main: "100+ Businesses Automated", sub: "Join companies saving 40+ hours weekly with our solutions"}}
        stats={{ value: "85%", label: "Average Time Saved"}}
        heroImage={{
          src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
          alt: "Business Growth"
        }}
      />

      <ProblemSection
        title="Manual Work Kills Growth"
        problems={[
          { icon: Users, title: "Time Slips Away", description: "Your team wastes countless hours on repetitive tasks while strategic initiatives gather dust." },
          { icon: Shield, title: "Tools Don't Talk", description: "Disconnected software creates data silos that cripple productivity and decision-making." },
          { icon: Zap, title: "Costs Keep Climbing", description: "Manual processes drain resources and inflate operational costs, strangling your bottom line." }
        ]}
      />

      <SolutionSection
        title="Automate Today, Scale Tomorrow"
        solutions={[
          "Our intelligent automation eliminates repetitive tasks, saving 20+ weekly hours",
          "Seamless software integration connects your tools for unified data flow",
          "Automated workflows reduce operational costs by eliminating manual processes"
        ]}
        image={{
          src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
          alt: "Business Solution"
        }}
        stats={{
          value: "85% Cost Reduction",
          label: "Average Client Savings"
        }}
      />

      <MidPageCTA
        title="Trusted By 100+ Growing Businesses"
        subtitle="Save 20+ hours weekly with custom automation solutions"
        ctaButton={{
          text: "Get Started Free",
          subtext: "Save 20+ hours weekly with custom automation solutions"
        }}
        onButtonClick={scrollToCalendly}
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80"
      />

      <MarketChallengesSection
        title="Face Your Growth Barriers Now"
        subtitle="Recognize these industry roadblocks? They're keeping your business from reaching its true potential."
        challenges={[
          {
            icon: TrendingDown,
            title: "Data Accuracy Hangs By a Thread",
            description: "Manual data handling introduces errors that damage customer relationships and create costly compliance risks."
          },
          {
            icon: AlertTriangle,
            title: "Innovation Takes a Back Seat",
            description: "Your skilled team remains trapped in administrative tasks while competitors drive market-changing initiatives."
          },
          {
            icon: DollarSign,
            title: "Scale Hits a Manual Wall",
            description: "Growth opportunities slip away as your current processes buckle under increasing business demands."
          }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80"
      />

      <OperationalIssuesSection
        title="Tech Complexity Crushing Progress"
        subtitle="Stop letting these technical hurdles hold your business back"
        issues={[
          {
            icon: Clock,
            title: "System Chaos",
            description: "Multiple unintegrated business tools create information bottlenecks and process delays."
          },
          {
            icon: Ban,
            title: "Lost Opportunities",
            description: "Delayed responses and inconsistent follow-ups result in significant revenue loss."
          },
          {
            icon: Target,
            title: "Reliability Risk",
            description: "Manual processes introduce human error points that compromise your business operations."
          }
        ]}
      />

      <SocialProofSection
        title="Real Results, Real Business Growth"
        subtitle="Join 100+ businesses saving 20+ hours weekly through our intelligent automation solutions"
        testimonials={[
          {
            name: "Sarah Chen",
            role: "Operations Director, TechFlow Solutions",
            content: "Horizon Dev automated our entire lead processing workflow, cutting response time by 80% and doubling our conversion rate in just two months.",
            image: {
              src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
              alt: "Sarah Chen"
            }
          },
          {
            name: "Michael Rodriguez",
            role: "CEO, Digital Marketing Agency",
            content: "From manual chaos to streamlined efficiency. Horizon Dev's automation reduced our operational costs by 40% and eliminated data entry errors.",
            image: {
              src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
              alt: "Michael Rodriguez"
            }
          },
          {
            name: "Jennifer Walsh",
            role: "Founder, E-commerce Startup",
            content: "From manual chaos to streamlined efficiency. Horizon Dev's automation reduced our operational costs by 40% and eliminated data entry errors.",
            image: {
              src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80",
              alt: "Jennifer Walsh"
            }
          }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80"
      />

      <FAQSection
        title="Automation Solutions FAQ"
        subtitle="Get answers about our business automation services and implementation process"
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80"
        gradientColors={{
          from: "blue-600",
          to: "purple-600"
        }}
        decorativeColors={{
          first: "bg-blue-200",
          second: "bg-purple-200",
          third: "bg-pink-200"
        }}
        faqs={[
          {
            question: "How quickly can you implement automation solutions?",
            answer: "Project timelines vary based on complexity, but we work on an hourly basis to deliver efficient solutions. Most automations can be implemented within days to weeks."
          },
          {
            question: "Which automation platforms do you work with?",
            answer: "We specialize in N8N, Zapier, and Make platforms, creating custom automation solutions that integrate seamlessly with your existing business tools and workflows."
          },
          {
            question: "Do I need technical knowledge to work with you?",
            answer: "No technical expertise required. Our developers handle all technical aspects while you focus on your business goals and requirements."
          },
          {
            question: "How do you ensure automation reliability and security?",
            answer: "We implement robust error handling, monitoring systems, and security measures in every automation to ensure reliable, secure operation of your workflows."
          },
          {
            question: "What types of tasks can you automate?",
            answer: "We automate various tasks including data entry, sales follow-ups, customer service responses, API integrations, and complex workflow processes across multiple platforms."
          },
          {
            question: "How do you handle system integration challenges?",
            answer: "Our expert developers seamlessly connect different platforms and APIs, ensuring smooth data flow and communication between all your business tools."
          }
        ]}
      />

      <CalendlySection
        id="calendly-section"
        title="Transform Your Business With Automation"
        subtitle="Discover how our automation solutions can save 20+ hours weekly and reduce costs"
        badgeIcon={Clock}
        badgeText="Free Strategy Session - 30min"
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
        calendlyUrl="https://calendly.com/austinnreed/n8n"
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80"
      />
    </div>
  );
}
