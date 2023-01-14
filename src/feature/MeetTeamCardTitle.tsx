import { ReactNode } from 'react';

type MeetTeamCardTitleProps = {
  title: ReactNode;
  reverse?: boolean;
  children: ReactNode
};

const MeetTeamCardTitle = (props: MeetTeamCardTitleProps) => {
  return (
    <div className="">
      <div className="items-center w-full text-center">
        <h3 className="text-5xl text-gray-900 font-semibold">{props.title}</h3>
      </div>
      <div className="w-full pl-10">
        {props.children}
      </div>
    </div>
  );
};

export { MeetTeamCardTitle };
