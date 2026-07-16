import NyxSentinelEmblem from '@documenso/assets/nyxsentinel-emblem.png';
import type { ImgHTMLAttributes } from 'react';

export type LogoProps = ImgHTMLAttributes<HTMLImageElement>;

export const BrandingLogoIcon = ({ className, style, ...props }: LogoProps) => {
  return (
    <img
      src={NyxSentinelEmblem}
      alt="NyxSentinel"
      className={className}
      style={{ display: 'inline-block', ...style }}
      {...props}
    />
  );
};
