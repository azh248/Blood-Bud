import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
// import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { MeetTeam } from './MeetTeam'
import { VerticalFeatureRowBoxes } from './VerticalFeatureRowBoxes';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalFeatureRowBoxes />
    {/* <VerticalFeatures /> */}
    {/* <Banner /> */}
    <MeetTeam />
    <Footer />
  </div>
);

export { Base };
