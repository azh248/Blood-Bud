import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig'

type ILogoProps = {
  image: string;
  imageAlt: string;
  description: string;
  xl?: boolean
};

const Logo = (props: ILogoProps) => {
  const router = useRouter();
    const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-3xl';

  return (
      <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
        <div className="w-full sm:w-1/6">
          <img
            className="object-contain h-25 w-30"
            src={`${router.basePath}${props.image}`} alt={props.imageAlt}
          />
      </div>
      <div className="">
        { AppConfig.site_name }
      </div>
      </span>
  );
};

export { Logo };
