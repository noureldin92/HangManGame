import { useSelector } from "react-redux";
export default function Attemps() {
  let { attemps, alert } = useSelector((state) => state.gameOverSlice);
  return (
    <>
      <div className=" bg-white  w-fit mx-auto  rounded-md flex justify-between items-center p-1">
        <p className="text-orange-600 "> Attepms : </p>
        <h3
          className={`text-xs sm:text-lg font-bold ps-1 ${
            alert ? "text-red-600 animate-bounce" : " text-orange-600"
          }`}>
          {attemps}
        </h3>
      </div>
    </>
  );
}
