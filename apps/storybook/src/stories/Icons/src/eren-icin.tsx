import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgErenIcin = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 60 60" aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M30 0C13.458 0 0 13.458 0 30c0 5.143 1.302 9.988 3.593 14.223l-.006.01.285.504c.118.209.245.412.368.618q.08.136.161.271.339.553.699 1.089l.041.062a30 30 0 0 0 9.303 8.867l.036.022q.563.34 1.14.656l.232.125a28 28 0 0 0 1.37.689 28 28 0 0 0 1.374.607q.087.038.175.074l-.028.032 1.4.485.005.002.636.222.008-.009q.29.094.583.182l.137.044.234.069.016-.003A30 30 0 0 0 30 60c16.542 0 30-13.458 30-30S46.542 0 30 0m12 17a1 1 0 0 0 .99-.86c.4-.165 1.562-.157 2.21-.158l.346.001c.047 0 .088-.021.133-.027a7.5 7.5 0 0 1 .434 5.973 7.5 7.5 0 0 1-4.366 4.51c-.555.214-1.079.481-1.586.775a.98.98 0 0 0-.616-.231c-1.936 0-3-.751-3-1a1 1 0 1 0-2 0c0 1.382 1.415 2.476 3.458 2.851-.052.05-.108.093-.159.144l-12.53 12.531-4.391 4.39v.001l.29.632a9.4 9.4 0 0 1 .833 4.768c-.008.087-.022.172-.032.259a9 9 0 0 1-.075.549q-.029.15-.062.299a9 9 0 0 1-.115.497q-.041.152-.089.302-.072.24-.156.478a9.23 9.23 0 0 1-.7 1.506q-.067.12-.138.237-.155.25-.325.491-.064.094-.13.186-.04.05-.079.099-.058-.023-.115-.045a28 28 0 0 1-1.916-.815q-.105-.046-.208-.094a28 28 0 0 1-1.729-.915c-.173-.099-.348-.196-.519-.299a28 28 0 0 1-2.11-1.399 28 28 0 0 1-1.299-1c-.214-.176-.421-.36-.63-.542a28 28 0 0 1-2.638-2.625q-.247-.278-.487-.562a28 28 0 0 1-1.461-1.918 28 28 0 0 1-1.043-1.6l-.076-.133a11.4 11.4 0 0 1 1.793-2.118L27.572 22.28a4.37 4.37 0 0 0 1.24-2.585c.318-2.803 2.134-5.168 4.74-6.173l2.559-.987c2.84-1.093 5.99-.452 8.071 1.455-1.096.029-2.068.164-2.672.767-.334.331-.51.761-.51 1.243a1 1 0 0 0 1 1M26.019 43.633a8 8 0 0 1 2.064 5.35c0 3.6-2.412 6.736-5.824 7.696.031-.049.058-.1.089-.149a11 11 0 0 0 .476-.846q.086-.166.167-.333.155-.334.29-.675.038-.089.074-.178.16-.43.285-.872c.028-.096.05-.194.075-.291a11 11 0 0 0 .206-.962q.054-.323.089-.649.018-.147.032-.294c.026-.314.043-.629.043-.946 0-1.421-.261-2.81-.777-4.137zM30 58c-1.642 0-3.248-.15-4.813-.422a10.01 10.01 0 0 0 4.896-8.595 10 10 0 0 0-2.649-6.765L39.26 30.391a9.2 9.2 0 0 1 3.208-2.087A9.5 9.5 0 0 0 48 22.596a9.51 9.51 0 0 0-.735-7.931c-2.304-3.999-7.409-5.718-11.874-3.995l-2.559.987c-3.303 1.272-5.605 4.267-6.007 7.813a2.35 2.35 0 0 1-.667 1.396L6.365 40.657a13 13 0 0 0-1.506 1.654A27.8 27.8 0 0 1 2 30C2 14.561 14.561 2 30 2s28 12.561 28 28-12.561 28-28 28" />
  </svg>
);
const Memo = memo(SvgErenIcin);
export default Memo;
