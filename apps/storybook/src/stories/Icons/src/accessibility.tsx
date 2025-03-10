import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAccessibility = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 48 48" aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={24.334} cy={24} r={24} fill="#A849FF" fillOpacity={0.3} />
    <path
      fill="#A470D5"
      fillRule="evenodd"
      d="M27.86 11.585a3.596 3.596 0 0 0-3.608-3.595c-1.998 0-3.61 1.67-3.61 3.595a3.596 3.596 0 0 0 3.61 3.595 3.596 3.596 0 0 0 3.609-3.595m-5.968 11.062c-.045 1.263-.102 2.832-.302 3.63-.605 2.77-3.855 10.054-4.257 10.95a1.872 1.872 0 0 0 3.249 1.861l.06-.1 3.642-7.768s3.269 6.701 3.64 7.44c.37.737.947 1.33 1.793 1.33a1.87 1.87 0 0 0 1.872-1.872c0-.323-.225-.892-.225-.892-.406-.9-3.666-8.18-4.27-10.949-.197-.782-.247-2.305-.288-3.553a67 67 0 0 0-.04-1.06c-.065-.45.257-.835.644-.963l7.927-2.376c.966-.256 1.546-1.348 1.289-2.31-.258-.963-1.354-1.541-2.32-1.285 0 0-7.444 2.376-10.022 2.376s-9.828-2.311-9.828-2.311c-.967-.257-2.062.192-2.384 1.155s.257 2.054 1.288 2.375l7.927 2.376c.387.128.645.513.645.962-.015.286-.027.623-.04.984"
      clipRule="evenodd"
    />
  </svg>
);
const Memo = memo(SvgAccessibility);
export default Memo;
