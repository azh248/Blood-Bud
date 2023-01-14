import { ReactNode } from 'react';

import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: ReactNode;
  description: ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const MeetTeamCard = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-5',
    'mb-10',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full w-24 h-24">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
      <div className="w-full sm:w-2/3 pl-10">
        <h3 className="text-2xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="mt-2 text-base text-gray-900 leading-6">
          {props.description}
        </div>
      </div>
    </div>
  );
};

export { MeetTeamCard };
