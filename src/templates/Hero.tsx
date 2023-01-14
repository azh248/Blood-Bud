import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-white-100">
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
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-5">
      <HeroOneButton
        title={
          <>
            {'BloodBud\n'}
            <span className="text-5xl text-gray-900">
              Your Mobile Screening Companion
            </span>
          </>
        }
        description="Ultra low-cost, smartphone-based hematological screening."
        button1={
          <Link href="https://youtu.be/Df1l2qb1W2c">
            <a>
              <Button xl>See How It Works</Button>
            </a>
          </Link>
        }
        button2={
          <Link href="https://docs.google.com/presentation/d/1e25_5TiNOMrhWhCK1iv_x3_PgBUgZLl3Vb_IGovgcIk/edit?usp=sharing">
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
