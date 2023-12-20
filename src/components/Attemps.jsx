import { useSelector } from "react-redux";
export default function Attemps() {
  let { attemps, alert } = useSelector((state) => state.gameOverSlice);
  return (
    <>
      <div className="mx-auto flex justify-between items-center w-fit space-x-1">
        <p className="text-white text-sm uppercase font-mono w-18 font-bold">
          {" "}
          attemps{" "}
        </p>
        <h3
          className={`  font-mono font-extrabold animate-bounce  w-2  ${
            alert
              ? "text-red-600 animate-bounce sm:text-xl"
              : "text-white  sm:text-lg"
          }${
            attemps <= 1
              ? "animate-bounce sm:text-xl text-red-600"
              : "text-white  sm:text-lg"
          }`}>
          {attemps}
        </h3>
      </div>
    </>
  );
}
