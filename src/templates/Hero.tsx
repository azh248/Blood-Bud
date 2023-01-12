import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/azh248/Blood-Bud">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'BloodBud\n'}
            <span className="text-gray-900">Your Malaria Screening Companion</span>
          </>
        }
        description="Low-cost effective malaria diagnosis, without the fluff (replace word)."
        button={
          <Link href="innovationvideogoeshere">
            <a>
              <Button xl>See How It Works</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
