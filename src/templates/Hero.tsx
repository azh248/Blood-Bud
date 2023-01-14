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
            <a>Website GitHub</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-6">
      <HeroOneButton
        title='BloodBud'
        subtitle={
            <span className="text-5xl font-bold text-gray-900">
              Your Mobile Screening Companion
            </span>
        }
        description={
          <>
            {'BloodBud is an ultra low-cost, deep learning and computer vision-based smartphone screening system for hematological diseases like malaria and sickle cell anemia. By '}
            <span className="font-bold underline decoration-green-500 decoration-wavy">
              {'merging'}
            </span>
            {' the two disciplines of 3D printing and machine learning, we have developed a '}
            <span className="font-bold underline decoration-purple-500 decoration-wavy">
              {'novel and innovative'}
            </span>
            {' product to combat the lack of accessibility in medical technology for developing nations. '}
          </>
        }
        button1={
          <Link href="https://youtu.be/Df1l2qb1W2c">
            <a>
              <Button xl>Innovation Video</Button>
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
        button3={
          <Link href="https://github.com/matthewchang0/BloodBud">
            <a>
              <Button xl>Open-Source Code</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
