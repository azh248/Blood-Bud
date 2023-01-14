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
          <span className="font-extrabold text-red-500 placeholder">
            {'important'}
          </span>
          {'?'}
        </>
      }
      description=
      {
        <>
          {'Hematological diseases like malaria, sickle cell disease, and HIV collectively affect '}
          <span className="font-bold placeholder">
            {'2 billion'}
          </span>
          {' people globally, and they\'re responsible for '}
          <span className="font-bold placeholder">
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
          <span className="font-extrabold text-red-500 placeholder">
            {'BloodBud'}
          </span>
          {' factor in?'}
        </>
      }
      description={
        <>
          {'We aim to provide accurate, affordable, and accessible diagnostics for hematological diseases. By combining 3D printing with deep learning, we\'ve created a '}
            <span className="font-bold placeholder">
              {'low-cost diagnostic framework'}
            </span>
          {' accessible to remote or developing areas, '}
            <span className="font-bold placeholder">
              {'without a need for medical training and equipment.'}
            </span>
        </>
      }
      image="/assets/images/bloodscreening.png"
      imageAlt="Deep learning page"
      reverse
    />

    <div className="mb-10 mt-10">
        {"Title" && (
        <h2 className="text-4xl text-gray-900 font-bold">How does BloodBud&nbsp;
          <div className="inline font-extrabold text-red-500 placeholder">work</div>
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
          <span className="font-extrabold text-red-500 placeholder">
            {'power up'}
          </span>
          {' smartphones. '}
        </>
      }
      description={
        <>
          {'We use a 3D-printed microscope attachment to greatly lower the cost of the screening test, while still retaining a high level of image resolution, '}
            <span className="font-bold placeholder">
              {' on par with traditional screening tests'}
            </span>
          {' that use laboratory microscopes. We then combine the affordability of this microscope attachment with the '}
            <span className="font-bold placeholder">
              {'convenience and accessibility of a smartphone'}
            </span>
          {'. Our result is a product that is able to '}
          <span className="font-bold placeholder">
            {'cut down'}
          </span>
          {' on the cost of medical equipment while '}
          <span className="font-bold placeholder">
            {'retaining the quality'}
          </span>
          {' of blood cell images for our algorithms.'}
        </>
      }
      image="/assets/images/3dprint.png"
      imageAlt="Smartphone attachment"
      width="w-100"
      height="h-56"
    />
    <FeatureRowBox
      title={
        <>
          <span className="font-extrabold text-red-500 placeholder">
            {'State-of-the-art'}
          </span>
          {' deep learning models. '}
        </>
      }
      description={
        <>
          {'We reviewed hundreds of academic research papers in the field of machine learning (ML) to create BloodBud. Our proprietary algorithm was trained and tested on two '}
            <span className="font-bold placeholder">
              {'high-quality cell image datasets'}
            </span>
          {' from the Chittagong Medical College Hospital, Bangladesh and the University of the Balearic Islands, Spain, which collectively provided '}
          <span className="font-bold placeholder">
            {'over 30,000 cell images'}
          </span>
          {' for analysis.'}
        </>
      }
      image="/assets/images/deeplearning.png"
      imageAlt="Deep learning page"
      reverse
      height="h-44"
    />

  
    <div className="mb-10 mt-10">
        {"Title" && (
        <h2 className="text-4xl text-gray-900 font-bold">What makes BloodBud&nbsp;
          <div className="inline font-extrabold text-red-500 placeholder">unique</div>
          ?</h2>
        )}
        {/* {"Description" && (
          <div className="mt-4 text-xl text-gray-800 md:px-20">help</div>
        )} */}
    </div>
    
    <FeatureRowBoxHalf
      title1={
        <>
          <span className="font-bold text-red-500">
            {'Cost'}
          </span>
        </>
      }
      description1={
        <>
          {'Current blood screening methods include microscopy analysis and Rapid Diagnostic Tests, which cost '}
            <span className="font-bold placeholder">
              {'over $6 and $2'}
            </span>
          {', respectively. By cutting down on unncessary and expensive equipment, we\'ve made hematological screening affordable and accessible. Our smartphone attachment attains the same image resolution as top alternative screening methods, but the raw-material cost for our product comes in at just '}
            <span className="font-bold placeholder">
              {'$0.49'}
            </span>
            {', a fraction of the cost of other solutions. And what\'s more, since we removed lab-based test components, our product is reusable by nature and can provide years of service with proper care.'}
        </>
      }
      title2={
        <>
          <span className="font-bold text-red-500">
            {'Speed'}
          </span>
        </>
      }
      description2={
        <>
          {'BloodBud is able to quickly and easily analyze a blood sample, providing results in a matter of minutes. This is significantly faster than traditional diagnostic methods, which can take '}
            <span className="font-bold placeholder">
              {'hours or even days'}
            </span>
          {' to provide results. This speed is particularly beneficial in emergency situations, where quick and accurate diagnosis '}
            <span className="font-bold placeholder">
              {'can be the difference between life and death.'}
            </span>
            {' Additionally, the speed of BloodBud can also help to reduce the spread of infectious diseases. By providing a rapid diagnosis, the device can help to identify and isolate infected individuals, preventing the disease from spreading.'}
        </>
      }
    />
    <FeatureRowBoxHalf
            title1={
        <>
          <span className="font-bold text-red-500">
            {'Accessibility'}
          </span>
        </>
      }
      description1={
        <>
          {'The accessibility of BloodBud is one of its most significant benefits. The device is inexpensive to produce, which means it can be made '}
            <span className="font-bold placeholder">
              {'widely available to remote and low-income communities.'}
            </span>
          {' This is particularly important in areas where access to medical facilities and equipment is limited. Additionally, the device is easy to use and does not require any special training, making it accessible to people of all skill levels. This means that people in remote areas can diagnose and treat hematological diseases '}
            <span className="font-bold placeholder">
              {'without having to travel to a hospital or clinic.'}
            </span>
            {' This can save time and money, and also improve health outcomes.'}
        </>
      }
      title2={
        <>
          <span className="font-bold text-red-500">
            {'Accuracy'}
          </span>
        </>
      }
      description2={
        <>
          {'Our innovation has been tested and has shown to have a '}
            <span className="font-bold placeholder">
              {'high level of accuracy in its results.'}
            </span>
          {' Its test accuracy is 94.0%, which means that out of 204 samples, 192 of them were correctly diagnosed. Additionally, the device has an Area Under the Curve value of 97.1%, which is a measure of the overall accuracy of a diagnostic test. Additionally, our product scores high on other measurements: it obtains an average of over 95% on the precision, sensitivity, and specificity values. Together, these results indicate that BloodBud is a '}
            <span className="font-bold placeholder">
              {'reliable and accurate diagnostic tool'}
            </span>
            {' for hematological diseases.'}
        </>
      }
    />
  </Section>
);

export { VerticalFeatureRowBoxes };
