import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="See How We Streamlined Malaria Screening"
    description="Hint: by breaking down the expensive and unnecessary diagnosis process and replacing it with cheaper alternatives!"
  >
    <VerticalFeatureRow
      title={
        <>
          {'Using 3D-printing to '}
          <span className="font-bold underline decoration-red-500 decoration-double">
            {'power up '}
          </span>
          {'smartphones. '}
        </>
      }
      description={
        <>
          {'Traditional malaria diagnosis has long relied on expensive microscopes to see blood cells up close. '}
          <span className="text-gray-900">
            {'We\'ve replaced that with '}
            <span className="text-xl font-bold underline decoration-red-500 decoration-wavy">
              {'affordable, 3D-printed '}
            </span>
            <span className="text-gray-900">
              {'smartphone microscope attachments to make the whole process '}
            </span>
            <span className="text-xl font-bold underline decoration-red-500 decoration-wavy">
              {'simple and widely accessible.'}
            </span>
          </span>
        </>
      }
      image="/assets/images/microscope.png"
      imageAlt="Smartphone attachment"
    />
    <VerticalFeatureRow
      title={
        <>
          {'Fast and accurate diagnosis, powered by '}
          <span className="font-bold underline decoration-red-500 decoration-double">
            {'state-of-the-art'}
          </span>
          {' deep learning models. '}
        </>
      }
      description="text here."
      image="/assets/images/feature2.svg"
      imageAlt="Deep learning page"
      reverse
    />
    <VerticalFeatureRow
      title={
        <>
          {'Using 3D-printing to '}
          <span className="font-bold underline decoration-red-500 decoration-double">
            {'power up '}
          </span>
          {'smartphones. '}
        </>
      }
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
