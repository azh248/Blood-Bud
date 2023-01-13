import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { MeetTeam } from './MeetTeam'
import { MiddleVerticalFeatures } from './MiddleVerticalFeatures';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <MiddleVerticalFeatures />
    <VerticalFeatures />
    <MeetTeam />
    <Banner />
    <Footer />
  </div>
);

export { Base };
