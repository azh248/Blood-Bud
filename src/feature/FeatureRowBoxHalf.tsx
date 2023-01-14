import { ReactNode } from 'react';

import className from 'classnames';

type IVerticalFeatureRowBoxHalfProps = {
  title1: ReactNode;
  description1: ReactNode;
  title2: ReactNode;
  description2: ReactNode
};

const FeatureRowBoxHalf = (props: IVerticalFeatureRowBoxHalfProps) => {
  const verticalFeatureClass = className(
    'mt-5',
    'flex',
    'flex-row',
    'flex-inline',
    'items-center',
  );

  return (
    <div className={verticalFeatureClass}>
      <div className="box-content p-4 border-4 w-full sm:w-1/2 sm:px-6 ">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title1}</h3>
        <div className="mt-1 text-l text-gray-900 leading-6 whitespace-pre-wrap">
          {props.description1}
        </div>
      </div>

      <div className="p-3"></div>

      <div className="box-content p-4 border-4 w-full sm:w-1/2 sm:px-6 ">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title2}</h3>
        <div className="mt-1 text-l text-gray-900 leading-6 whitespace-pre-wrap">
          {props.description2}
        </div>
      </div>
    </div>
  );
};

export { FeatureRowBoxHalf };
