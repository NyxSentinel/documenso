import NyxSentinelLogo from '@documenso/assets/nyxsentinel-logo.png';
import type { ImgHTMLAttributes } from 'react';

export type LogoProps = ImgHTMLAttributes<HTMLImageElement>;

export const BrandingLogo = ({ className, style, ...props }: LogoProps) => {
  return (
    <img
      src={NyxSentinelLogo}
      alt="NyxSentinel"
      className={className}
      style={{ display: 'inline-block', ...style }}
      {...props}
    />
  );
};
