import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSuccess = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#17C964" viewBox="0 0 36 36" aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m10.45 10.63L15.31 25.76 7.55 18a1.4 1.4 0 0 1 2-2l5.78 5.78 11.14-11.13a1.4 1.4 0 1 1 2 2Z"
      className="success_svg__clr-i-solid success_svg__clr-i-solid-path-1"
    />
    <path fill="none" d="M0 0h36v36H0z" />
  </svg>
);
const Memo = memo(SvgSuccess);
export default Memo;
