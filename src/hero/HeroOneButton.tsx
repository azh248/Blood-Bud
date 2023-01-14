import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: string;
  subtitle: ReactNode
  description: ReactNode;
  button1: ReactNode;
  button2: ReactNode;
  button3: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <div className="text-8xl text-red-700 font-bold whitespace-pre-line">
      {props.title}
    </div>
    {props.subtitle}
    <div className="text-xl mt-4 mb-16 ml-10 text-left">{props.description}</div>

    <div className="inline-flex">
      {props.button1}
      <div className="p-4"></div>
      {props.button2}
      <div className="p-4"></div>
      {props.button3}
    </div>
  </header>
);

export { HeroOneButton };
