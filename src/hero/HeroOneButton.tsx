import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="text-6xl text-primary-500 font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <div className="text-2xl font-bold mt-4 mb-16">{props.description}</div>

    {props.button}
  </header>
);

export { HeroOneButton };
