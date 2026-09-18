import { Hero } from '../sections/Hero';
import { BrandPhilosophy } from '../sections/BrandPhilosophy';
import { CollectionPreview } from '../sections/CollectionPreview';
import { EditorialStory } from '../sections/EditorialStory';
import { SignaturePieces } from '../sections/SignaturePieces';
import { MaterialStory } from '../sections/MaterialStory';
import { PricingPhilosophy } from '../sections/PricingPhilosophy';
import { JournalPreview } from '../sections/JournalPreview';
import { FinalCTA } from '../sections/FinalCTA';

export function HomePage() {
  return (
    <main>
      <Hero />
      <BrandPhilosophy />
      <CollectionPreview />
      <EditorialStory />
      <SignaturePieces />
      <MaterialStory />
      <PricingPhilosophy />
      <JournalPreview />
      <FinalCTA />
    </main>
  );
}
