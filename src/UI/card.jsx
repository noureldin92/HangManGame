/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export default function Card({
  onClick,
  path,
  inner,
  message,
  emo,
  gameOver,
  overArr,
  trimmed,
}) {
  return (
    <main className="w-full h-screen mx-auto md:w-3/4   flex justify-center space-y-10 items-center flex-col bg-gray-200/40 md:rounded-full  ">
      <h1 className="text-4xl text-red-600">{emo}</h1>
      <h1 className="text-5xl md:text-7xl font-[1000] text-red-600 ">
        {" "}
        {message}
      </h1>
      {gameOver && (
        <>
          <h1 className="text-1xl font-bold text-red-600">
            <span className=" font-normal text-black">
              the correct word is :{" "}
            </span>
            {overArr}
          </h1>
          <h1 className="text-1xl font-bold text-red-600">
            <span className=" font-normal text-black"> Your Progress : </span>
            {trimmed}
          </h1>
        </>
      )}
      <button onClick={onClick}>
        <NavLink
          to={path}
          className="cursor-pointer bg-orange-600 capitalize px-4 py-2 text-center rounded text-white hover:bg-orange-500">
          {inner}
        </NavLink>
      </button>
    </main>
  );
}
