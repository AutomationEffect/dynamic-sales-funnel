
import { MidPageCTA } from '../../../components/MidPageCTA';

interface MidPageCTAMateusProps {
  onButtonClick: () => void;
}

export function MidPageCTAMateus({ onButtonClick }: MidPageCTAMateusProps) {
  return (
    <MidPageCTA
      title="Happiness Guaranteed By Results"
      subtitle="Join 1000+ companies boosting productivity through joyful belly rubs"
      ctaButton={{
        text: "Book Now",
        subtext: "Join 1000+ companies boosting productivity through joyful belly rubs"
      }}
      onButtonClick={onButtonClick}
      backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80"
    />
  );
}
