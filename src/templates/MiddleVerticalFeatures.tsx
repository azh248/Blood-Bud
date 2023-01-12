import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="See How We Streamlined Malaria Screening"
    description="Hint: by breaking down the expensive and unnecessary diagnosis process and replacing it with cheaper alternatives!"
  >
    <VerticalFeatureRow
      title="Using 3D-printing to power up smartphones."
      description="Traditional malaria diagnosis has always relied on expensive microscopes to see blood cells up close. We've replaced that with affordable, 3D-printed smartphone attachments to achieve 200x magnification at a widely accessible price point."
      image="/assets/images/feature.svg"
      imageAlt="Smartphone attachment"
    />
    <VerticalFeatureRow
      title="Deep learning-based diagnosis"
      description="text here."
      image="/assets/images/feature2.svg"
      imageAlt="Deep learning page"
      reverse
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
