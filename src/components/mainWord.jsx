import { useSelector } from "react-redux";
import Label from "../UI/Label";
import Loading from "./Loading";
export default function MainWord() {
  let { array, char, length } = useSelector((state) => state.mainWordSlice);

  let mainLength = array.filter((e) => e !== " ").length;
  if (mainLength === length) {
    return <Loading>Please Wait</Loading>;
  }
  return (
    <main
      className={` max-w-none  ${
        mainLength <= 6 ? "" : "min-w-[80%] md:min-w-0 "
      }  w-fit  mx-auto mt-12`}>
      <div className="h-2 mb-4">
        {sessionStorage.getItem("ctg") ? (
          <p className="text-center text-white capitalize">
            {sessionStorage.getItem("ctg")}
          </p>
        ) : (
          ""
        )}
      </div>
      <ul className="p-1 min-w-full  sm:p-2 md:p-4 md:gap-x-2 gap-x-1.5 bg-slate-100 flex  justify-between rounded-lg">
        {array
          .filter((e) => e !== " ")
          .map((chart) => {
            let charStyle = "";
            char.map((ch) => {
              ch.char === chart
                ? (charStyle = "text-white")
                : "text-orange-600";
            });
            return (
              <li key={Math.random()} className="w-fit">
                <Label
                  style={charStyle || "text-orange-600"}
                  chart={chart}
                  Label
                />
              </li>
            );
          })}
      </ul>
    </main>
  );
}
