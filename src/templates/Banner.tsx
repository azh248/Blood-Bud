import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Take a look at our deep learning-based diagnosis model on GitHub."
      subtitle="One image upload—that's all it needs!"
      button={
        <Link href="https://github.com/matthewchang0/BloodBud">
          <a>
            <Button>GitHub</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
