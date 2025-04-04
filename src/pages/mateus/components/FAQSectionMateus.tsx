
import { FAQSection } from '../../../components/FAQSection';

export function FAQSectionMateus() {
  return (
    <FAQSection
      title="Buddha Belly Rubbing FAQs"
      subtitle="Find answers about our unique workplace happiness enhancement service"
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
          question: "How does the buddha belly rubbing service actually work?",
          answer: "Our certified belly-rubbing sessions involve gentle interaction with Mateus, bringing joy and luck through traditional practices in a professional setting."
        },
        {
          question: "What benefits can companies expect from this service?",
          answer: "Companies typically experience increased employee happiness, improved productivity, and positive workplace energy. The joyful giggles create lasting positive effects."
        },
        {
          question: "How long does each belly rubbing session take?",
          answer: "Each session is efficiently structured to maximize benefits while respecting workplace schedules. We accommodate both individual and group sessions."
        },
        {
          question: "Is this service appropriate for all workplace environments?",
          answer: "Yes! Our service is professionally conducted and culturally respectful, suitable for diverse workplace settings and company cultures."
        },
        {
          question: "How do you measure the impact on employee happiness?",
          answer: "We track satisfaction through pre and post-session surveys, measuring happiness levels and productivity improvements in participating teams."
        },
        {
          question: "How frequently should we schedule belly rubbing sessions?",
          answer: "We recommend regular sessions based on your company size and needs, typically weekly or monthly for optimal results."
        }
      ]}
    />
  );
}
