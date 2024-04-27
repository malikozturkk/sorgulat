import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFail = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" fill="#F31260" viewBox="0 0 511.76 511.76" aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M436.896 74.869c-99.84-99.819-262.208-99.819-362.048 0-99.797 99.819-99.797 262.229 0 362.048 49.92 49.899 115.477 74.837 181.035 74.837s131.093-24.939 181.013-74.837c99.819-99.818 99.819-262.229 0-362.048m-75.435 256.448c8.341 8.341 8.341 21.824 0 30.165a21.28 21.28 0 0 1-15.083 6.251 21.28 21.28 0 0 1-15.083-6.251l-75.413-75.435-75.392 75.413a21.35 21.35 0 0 1-15.083 6.251 21.28 21.28 0 0 1-15.083-6.251c-8.341-8.341-8.341-21.845 0-30.165l75.392-75.413-75.413-75.413c-8.341-8.341-8.341-21.845 0-30.165 8.32-8.341 21.824-8.341 30.165 0l75.413 75.413 75.413-75.413c8.341-8.341 21.824-8.341 30.165 0 8.341 8.32 8.341 21.824 0 30.165l-75.413 75.413z" />
  </svg>
);
const Memo = memo(SvgFail);
export default Memo;
