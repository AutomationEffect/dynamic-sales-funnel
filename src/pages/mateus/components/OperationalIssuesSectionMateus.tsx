
import { Clock, Ban, Target } from 'lucide-react';
import { OperationalIssuesSection } from '../../../components/OperationalIssuesSection';

export function OperationalIssuesSectionMateus() {
  return (
    <OperationalIssuesSection
      title="Modern Business Needs Ancient Wisdom"
      subtitle="Discover why traditional workplace solutions leave companies wanting more"
      issues={[
        {
          icon: Clock,
          title: "Happiness Deficit",
          description: "Modern workplaces lack authentic joy catalysts, leading to decreased team performance."
        },
        {
          icon: Ban,
          title: "Luck Vacuum",
          description: "Companies struggle without reliable fortune-enhancement methods, missing crucial growth opportunities."
        },
        {
          icon: Target,
          title: "Cultural Disconnect",
          description: ""
        }
      ]}
    />
  );
}
