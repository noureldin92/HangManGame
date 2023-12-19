import { useSelector } from "react-redux";
export default function Attemps() {
  let { attemps } = useSelector((state) => state.gameOverSlice);
  return (
    <>
      <div className="attepsContainer bg-white w-fit mx-auto  rounded-md">
        <h3 className="text-xs sm:text-lg font-bold text-orange-600 px-2">
          <span className=""> Attepms : </span> {attemps}
        </h3>
      </div>
    </>
  );
}
