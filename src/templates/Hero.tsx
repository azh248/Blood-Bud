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
      <NavbarTwoColumns logo={
        <Logo
          image="assets/images/logo4.png"
          imageAlt="logo"
          description="BloodBud"
        />
      }>
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
            <span className="text-5xl text-gray-900">
              Your&nbsp;Malaria&nbsp;Screening&nbsp;Companion
            </span>
          </>
        }
        description="Low-cost, smartphone-based malaria diagnosis."
        button1={
          <Link href="innovationvideogoeshere">
            <a>
              <Button xl>See How It Works</Button>
            </a>
          </Link>
        }
        button2={
          <Link href="innovationvideogoeshere">
            <a>
              <Button xl>Our Pitch Deck</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
