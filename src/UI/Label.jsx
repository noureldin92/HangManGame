/* eslint-disable react/prop-types */

export default function Label({ chart, style }) {
  return (
    <label
      className={` px-1.5 py-1 text-xl inline-block select-none md:inline text-center min-w-[25px] // sm:py-2 sm:px-2.5 sm:text-2xl //  md:py-2 md:px-5 md:w-2 md:text-3xl   ${style} rounded bg-orange-600   `}>
      {chart}
    </label>
  );
}
