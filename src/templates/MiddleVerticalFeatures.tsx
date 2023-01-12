import { MiddleVerticalFeatureRow } from '../feature/MiddleVerticalFeatureRow';
import { Section } from '../layout/Section';

const MiddleVerticalFeatures = () => (
  <Section
    title="So What Is Malaria Screening?"
    description="And why is it important?"
  >
    <MiddleVerticalFeatureRow
      title="title."
      description="description."
      image="/assets/images/feature.svg"
      imageAlt=""
    />
    <MiddleVerticalFeatureRow
      title="title."
      description="description."
      image="/assets/images/feature2.svg"
      imageAlt="Deep learning page"
      reverse
    />
  </Section>
);

export { MiddleVerticalFeatures };
