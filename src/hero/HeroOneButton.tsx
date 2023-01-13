import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button1: ReactNode;
  button2: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="text-6xl text-red-600 font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <div className="text-2xl font-bold mt-4 mb-16">{props.description}</div>

    <div className="inline-flex">
      {props.button1}
      <div className="p-6"></div>
      {props.button2}
    </div>
  </header>
);

export { HeroOneButton };
