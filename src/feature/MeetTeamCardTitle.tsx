import { ReactNode } from 'react';

import className from 'classnames';

type MeetTeamCardTitleProps = {
  title: ReactNode;
  reverse?: boolean;
  children: ReactNode
};

const MeetTeamCardTitle = (props: MeetTeamCardTitleProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-2/5 text-center sm:px-6 ">
        <h3 className="text-5xl text-gray-900 font-semibold">{props.title}</h3>
      </div>
      <div className="w-full sm:w-1/2 text-center sm:px-6 space-y-15">
        {props.children}
      </div>
    </div>
  );
};

export { MeetTeamCardTitle };
