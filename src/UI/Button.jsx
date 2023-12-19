/* eslint-disable react/prop-types */

export default function Button({ value, onClick, dis }) {
  return (
    <button
      disabled={dis}
      onClick={onClick}
      className=" w-8 sm:w-10 text-lg text-center   leading-normal   md:text-2xl sm:text-lg   bg-orange-600 rounded-md disabled:bg-gray-400 disabled:text-black/50 hover:bg-orange-500 text-white ">
      {value}
    </button>
  );
}
