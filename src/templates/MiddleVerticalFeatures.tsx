import { MiddleVerticalFeatureRow } from '../feature/MiddleVerticalFeatureRow';
import { Section } from '../layout/Section';

const MiddleVerticalFeatures = () => (
  <Section
    title={
        <>
          {'So What '}
          <span className="font-bold underline decoration-red-500 decoration-double">
            {'Is'}
          </span>
          {' Malaria Screening? '}
        </>
      }
    description="And why is it important?"
  >
    <MiddleVerticalFeatureRow
      title={
        <>
          {'Using 3D-printing to '}
          <span className="font-bold underline decoration-red-500 decoration-double">
            {'power up '}
          </span>
          {'smartphones. '}
        </>
      }
      description="description."
      image="/assets/images/feature.svg"
      imageAlt=""
    />
    <MiddleVerticalFeatureRow
      title={
        <>
          {'Using 3D-printing to '}
          <span className="font-bold underline decoration-red-500 decoration-double">
            {'power up '}
          </span>
          {'smartphones. '}
        </>
      }
      description="description."
      image="/assets/images/feature2.svg"
      imageAlt="Deep learning page"
      reverse
    />
  </Section>
);

export { MiddleVerticalFeatures };
