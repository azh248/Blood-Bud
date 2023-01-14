import { FeatureRowBox } from '../feature/FeatureRowBox';
import { FeatureRowBoxHalf } from '../feature/FeatureRowBoxHalf'
import { Section } from '../layout/Section';

const VerticalFeatureRowBoxes = () => (
  <Section
    title={""}
    description=""
  >
    <FeatureRowBox
      title={
        <>
          {'Why is improving blood screening '}
          <span className="font-bold underline decoration-red-500 decoration-double">
            {'important'}
          </span>
          {'?'}
        </>
      }
      description=
      {
        <>
          {'Hematological diseases like malaria, sickle cell disease, and HIV collectively affect '}
          <span className="font-bold underline decoration-blue-500 decoration-wavy">
            {'2 billion'}
          </span>
          {' people globally, and they\'re responsible for '}
          <span className="font-bold underline decoration-yellow-500 decoration-wavy">
            {'millions'}
          </span>
          {' of deaths per year. Currently, screening methods to detect these diseases exist, but they require high costs and expensive equipment.'}
        </>
      }
      image="/assets/images/bloodimage.png"
      imageAlt=""
    />
    <FeatureRowBox
      title={
        <>
          {'Cool. So how does '}
          <span className="font-bold underline decoration-red-500 decoration-double">
            {'BloodBud'}
          </span>
          {' factor in?'}
        </>
      }
      description={
        <>
          {'We aim to provide accurate, affordable, and accessible diagnostics for hematological diseases. By combining 3D printing with deep learning, we\'ve created a '}
            <span className="font-bold underline decoration-purple-500 decoration-wavy">
              {'low-cost'}
            </span>
          {' diagnostic framework accessible to remote or developing areas, '}
            <span className="font-bold underline decoration-green-500 decoration-wavy">
              {'without'}
            </span>
            {' a need for medical training and equipment.'}
        </>
      }
      image="/assets/images/bloodscreening.png"
      imageAlt="Deep learning page"
      reverse
    />

    <div className="mb-12 mt-12">
        {"Title" && (
        <h2 className="text-4xl text-gray-900 font-bold">How does BloodBud&nbsp;
          <div className="inline font-bold underline decoration-red-500 decoration-double">work</div>
          ?</h2>
        )}
        {/* {"Description" && (
          <div className="mt-4 text-xl text-gray-800 md:px-20">help</div>
        )} */}
    </div>
    
    <FeatureRowBox
      title={
        <>
          {'Using 3D-printing to '}
          <span className="font-bold underline decoration-red-500 decoration-double">
            {'power up'}
          </span>
          {' smartphones. '}
        </>
      }
      description={
        <>
          {'We use a 3D-printed microscope attachment to greatly lower the cost of the screening test, while still retaining a '}
            <span className="font-bold underline decoration-yellow-500 decoration-wavy">
              {'high level'}
            </span>
          {' of image resolution, on par with traditional screening tests that use laboratory microscopes. We then combine the affordability of this microscope attachment with the convenience and accessibility of a '}
            <span className="font-bold underline decoration-blue-500 decoration-wavy">
              {'smartphone'}
            </span>
            {'. Our result is a product that is able to cut down on the cost of medical equipment while retaining the quality of blood cell images for our algorithms.'}
        </>
      }
      image="/assets/images/3dprint.png"
      imageAlt="Smartphone attachment"
      width="w-100"
    />
    <FeatureRowBox
      title={
        <>
          <span className="font-bold underline decoration-red-500 decoration-double">
            {'State-of-the-art'}
          </span>
          {' deep learning models. '}
        </>
      }
      description={
        <>
          {'We reviewed hundreds of academic research papers in the field of machine learning (ML) to create BloodBud. Our proprietary algorithm was trained and tested on two '}
            <span className="font-bold underline decoration-purple-500 decoration-wavy">
              {'high-quality'}
            </span>
          {' cell images datasets from the Chittagong Medical College Hospital, Bangladesh and the University of the Balearic Islands, Spain, which collectively provided over 30,000 cell images for analysis.'}
        </>
      }
      image="/assets/images/deeplearning.png"
      imageAlt="Deep learning page"
      reverse
    />

  
    <div className="mb-12 mt-12">
        {"Title" && (
        <h2 className="text-4xl text-gray-900 font-bold">What makes BloodBud&nbsp;
          <div className="inline font-bold underline decoration-red-500 decoration-double">unique</div>
          ?</h2>
        )}
        {/* {"Description" && (
          <div className="mt-4 text-xl text-gray-800 md:px-20">help</div>
        )} */}
    </div>
    
    <FeatureRowBoxHalf
      title1={
        <>
          {'Cost'}
        </>
      }
      description1={
        <>
          {'Current blood screening methods include microscopy analysis and Rapid Diagnostic Tests, which cost '}
            <span className="font-bold underline decoration-green-500 decoration-wavy">
              {'over $6 and $2'}
            </span>
          {', respectively. The raw-material cost for our reusable smartphone attachment comes in at just '}
            <span className="font-bold underline decoration-blue-500 decoration-wavy">
              {'$0.49'}
            </span>
            {', a fraction of the cost of other solutions.'}
        </>
      }
      title2={
        <>
          {'Accessibility'}
        </>
      }
      description2={
        <>
          {''}
            <span className="font-bold underline decoration-red-500 decoration-wavy">
              {''}
            </span>
          {''}
            <span className="font-bold underline decoration-red-500 decoration-wavy">
              {''}
            </span>
            {''}
        </>
      }
    />
    <FeatureRowBoxHalf
      title1={
        <>
          {'Speed'}
        </>
      }
      description1={
        <>
          {''}
            <span className="font-bold underline decoration-red-500 decoration-wavy">
              {''}
            </span>
          {''}
            <span className="font-bold underline decoration-red-500 decoration-wavy">
              {''}
            </span>
            {''}
        </>
      }
      title2={
        <>
          {'Accuracy'}
        </>
      }
      description2={
        <>
          {''}
            <span className="font-bold underline decoration-red-500 decoration-wavy">
              {''}
            </span>
          {''}
            <span className="font-bold underline decoration-red-500 decoration-wavy">
              {''}
            </span>
            {''}
        </>
      }
    />
  </Section>
);

export { VerticalFeatureRowBoxes };
