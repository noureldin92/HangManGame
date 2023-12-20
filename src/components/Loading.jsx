import { useSelector } from "react-redux";

/* eslint-disable react/prop-types */
export default function Loading() {
  let { alert } = useSelector((state) => state.gameOverSlice);
  console.log(alert);

  return (
    <div className="w-2/3 md:w-1/4 mx-auto mt-60  ">
      <ul className="w-full bg-white h-4 flex justify-center items-center rounded-3xl space-x-2">
        {["P", "L", "E", "A", "S", "E", "", "W", "A", "i", "t"].map((e) => {
          return (
            <li key={Math.random()}>
              <h1 className="text-orange-600 animate-pulse ">{e}</h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
