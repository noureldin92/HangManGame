/* eslint-disable react/prop-types */

export default function Label({ chart, style }) {
  return (
    <label
      className={` min-w-[25px] inline-block text-center leading-[unset] ${style} rounded bg-orange-600 // text-lg sm:text-[1.5rem] sm:min-h-[35px] md:min-h-[40px] sm:w-12 `}>
      {chart}
    </label>
  );
}
