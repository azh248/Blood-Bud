import { ReactNode } from 'react';

import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowBoxProps = {
  title: ReactNode;
  description: ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  height?: string;
  width?: string;
};

const FeatureRowBox = (props: IVerticalFeatureRowBoxProps) => {
  const width = (typeof props.width !== null) ? props.width : 'w-400';
  const verticalFeatureClass = className(
    'mt-5',
    'flex',
    'flex-row',
    'items-center',
    'box-content',
    props.height,
    width,
    'p-4',
    'border-4', 
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 sm:px-6 basis-4/5">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="mt-1 text-l text-gray-900 leading-6">{props.description}</div>
      </div>

      <div className="w-full sm:w-1/2 p-6 basis-1/5">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { FeatureRowBox };
