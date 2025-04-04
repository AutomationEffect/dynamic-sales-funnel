
import { TrendingDown, AlertTriangle, DollarSign } from 'lucide-react';
import { MarketChallengesSection } from '../../../components/MarketChallengesSection';

export function MarketChallengesSectionMateus() {
  return (
    <MarketChallengesSection
      title="Is Success Slipping Away?"
      subtitle="Recognize these workplace barriers blocking your path to prosperity? It's time to face them head-on."
      challenges={[
        {
          icon: TrendingDown,
          title: "Employee Engagement Crisis",
          description: "Disengaged teams cost businesses 34% of salary in lost productivity, creating a downward spiral of performance."
        },
        {
          icon: AlertTriangle,
          title: "Wellness Programs Missing the Mark",
          description: "Traditional corporate wellness initiatives fail to deliver authentic joy, resulting in wasted resources and unchanged outcomes."
        },
        {
          icon: DollarSign,
          title: "Fortune Favors Others",
          description: "Without access to proven luck-enhancement methods, companies watch competitors capture market opportunities they should have seized."
        }
      ]}
      backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80"
    />
  );
}
