
import { SocialProofSection } from '../../../components/SocialProofSection';

export function SocialProofSectionMateus() {
  return (
    <SocialProofSection
      title="Real Results, Happy Employees, Better Business"
      subtitle="Join hundreds of companies boosting workplace joy and productivity through our unique wellness solution."
      testimonials={[
        {
          name: "Sarah Chen",
          role: "HR Director, Tech Solutions Inc",
          content: "Team morale increased 40% after implementing Mateus's services. Our employees are happier and more productive than ever!",
          image: {
            src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
            alt: "Sarah Chen"
          }
        },
        {
          name: "Michael O'Brien",
          role: "CEO, Fortune 500 Company",
          content: "The belly rubs bring such joy! Our team bonding improved dramatically, and revenue increased 30% since starting.",
          image: {
            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
            alt: "Michael O'Brien"
          }
        },
        {
          name: "Lisa Wang",
          role: "Operations Manager, StartUp Hub",
          content: "The belly rubs bring such joy! Our team bonding improved dramatically, and revenue increased 30% since starting.",
          image: {
            src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80",
            alt: "Lisa Wang"
          }
        }
      ]}
      backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80"
    />
  );
}
