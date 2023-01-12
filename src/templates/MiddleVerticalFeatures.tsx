import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const MiddleVerticalFeatures = () => (
  <Section
    title="So What Is Malaria Screening?"
    description="And why is it important?"
  >
    <VerticalFeatureRow
      title="title."
      description="description."
      image="/assets/images/feature.svg"
      imageAlt=""
    />
    <VerticalFeatureRow
      title="title."
      description="description."
      image="/assets/images/feature2.svg"
      imageAlt="Deep learning page"
      reverse
    />
  </Section>
);

export { MiddleVerticalFeatures };
