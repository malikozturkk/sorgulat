import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEmail = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    aria-hidden="true"
    className="email_svg__text-xl email_svg__text-default-400 email_svg__pointer-events-none email_svg__flex-shrink-0"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M17 3.5H7c-3 0-5 1.5-5 5v7c0 3.5 2 5 5 5h10c3 0 5-1.5 5-5v-7c0-3.5-2-5-5-5m.47 6.09-3.13 2.5c-.66.53-1.5.79-2.34.79s-1.69-.26-2.34-.79l-3.13-2.5a.77.77 0 0 1-.12-1.06c.26-.32.73-.38 1.05-.12l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.32.21.8-.11 1.06"
    />
  </svg>
);
const Memo = memo(SvgEmail);
export default Memo;
