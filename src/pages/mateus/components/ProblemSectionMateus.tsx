
import { Users, Shield, Zap } from 'lucide-react';
import { ProblemSection } from '../../../components/ProblemSection';

export function ProblemSectionMateus() {
  return (
    <ProblemSection
      title="Success Barriers Hold Back"
      problems={[
        { 
          icon: Users, 
          title: "Workplace Morale Declining", 
          description: "Low employee spirits create a toxic environment that drains productivity and crushes innovation." 
        },
        { 
          icon: Shield, 
          title: "Profit Growth Stagnating", 
          description: "Traditional team building initiatives fail to deliver meaningful ROI, leaving money on the table." 
        },
        { 
          icon: Zap, 
          title: "Missing Magic Touch", 
          description: "Companies struggle to find that unique spark that transforms ordinary workplaces into extraordinary success stories." 
        }
      ]}
    />
  );
}
