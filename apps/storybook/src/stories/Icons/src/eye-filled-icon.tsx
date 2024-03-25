import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEyeFilledIcon = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg width="1em" height="1em" fill="none" aria-hidden="true" viewBox="0 0 24 24" aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M21.25 9.15C18.94 5.52 15.56 3.43 12 3.43c-1.78 0-3.51.52-5.09 1.49-1.58.98-3 2.41-4.16 4.23-1 1.57-1 4.12 0 5.69 2.31 3.64 5.69 5.72 9.25 5.72 1.78 0 3.51-.52 5.09-1.49 1.58-.98 3-2.41 4.16-4.23 1-1.56 1-4.12 0-5.69M12 16.04c-2.24 0-4.04-1.81-4.04-4.04S9.76 7.96 12 7.96s4.04 1.81 4.04 4.04-1.8 4.04-4.04 4.04"
    />
    <path fill="currentColor" d="M11.998 9.14a2.855 2.855 0 0 0 0 5.71c1.57 0 2.86-1.28 2.86-2.85s-1.29-2.86-2.86-2.86" />
  </svg>
);
const Memo = memo(SvgEyeFilledIcon);
export default Memo;
