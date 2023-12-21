/* eslint-disable react/prop-types */

export default function Button({ value, onClick, dis, stl }) {
  return (
    <button
      disabled={dis}
      onClick={onClick}
      className={`${
        stl ? stl : " bg-orange-600 text-lg w-8 sm:p-1 sm:w-10 "
      }   leading-normal rounded-md disabled:bg-gray-400 disabled:text-black/50 text-center  hover:bg-orange-500 text-white  `}>
      {value}
    </button>
  );
}
