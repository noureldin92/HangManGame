import { useSelector, useDispatch } from "react-redux";
import { mainWordActions } from "../root/mainWordSlice";
import { Link } from "react-router-dom";
// import { categories } from "../wordsSource";

export default function Categories() {
  let dispatch = useDispatch();
  let { ctg } = useSelector((state) => state.mainWordSlice);

  return (
    <section className="w-80 mx-auto rounded">
      <ul className="w-3/4 space-y-3 bg-slate-100 p-6 rounded">
        {ctg.map((ctg) => {
          return (
            <li
              key={ctg.ctg}
              className="bg-orange-600 hover:bg-orange-500 w-full rounded">
              <Link
                className="text-white w-full rounded  "
                onClick={() => {
                  dispatch(mainWordActions.chooseCtg(ctg.ctg));
                  window.sessionStorage.setItem("ctg", ctg.ctg);
                }}
                to="/game">
                <p className="py-2">{ctg.ctg}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
