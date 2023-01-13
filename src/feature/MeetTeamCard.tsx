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
    'mt-20',
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
      <div className="w-full sm:w-2/5 p-6">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
      <div className="w-full sm:w-3/5 text-center sm:pl-20 ">
        <h3 className="text-2xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl text-gray-900 leading-9 whitespace-pre-wrap">
          {props.description}
        </div>
      </div>
    </div>
  );
};

export { MeetTeamCard };
