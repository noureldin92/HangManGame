import { useSelector } from "react-redux";
import Label from "../UI/Label";

export default function MainWord() {
  let { array, char } = useSelector((state) => state.mainWordSlice);
  let mainLength = array.filter((e) => e !== " ").length;

  return (
    <main
      className={` max-w-none  ${
        mainLength <= 6 ? "" : "min-w-[80%] md:min-w-0 "
      }  w-fit  mx-auto mt-12`}>
      <div className="h-2 mb-4">
        {sessionStorage.getItem("ctg") && (
          <p className="text-center text-white capitalize">
            {sessionStorage.getItem("ctg")}
          </p>
        )}
      </div>
      <ul className="flex justify-between bg-slate-100 p-1 rounded gap-x-1">
        {array
          .filter((e) => e !== " ")
          .map((chart, i) => {
            let charStyle = "";
            let cont = "#";
            char.map((ch) => {
              if (ch.char === chart) {
                charStyle = "text-white";
                cont = chart;
              }
            });
            return (
              <li key={i} className="">
                <Label
                  key={i}
                  style={charStyle || "text-orange-600"}
                  chart={cont}
                  Label
                />
              </li>
            );
          })}
      </ul>
    </main>
  );
}
