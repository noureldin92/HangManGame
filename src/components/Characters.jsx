import { useDispatch, useSelector } from "react-redux";
import { charts } from "../chartsExport";
import { categories } from "../wordsSource";
import Button from "../UI/Button";
import { mainWordActions } from "../root/mainWordSlice";
import { gameOverActions } from "../root/gameOverSlice";
import { Link } from "react-router-dom";

export default function Charachters() {
  let dispatch = useDispatch();
  let { char, array, length } = useSelector((state) => state.mainWordSlice);
  let mainLength = array.filter((e) => e !== " ").length;
  if (mainLength === length) {
    return;
  }
  let word =
    categories[
      Math.floor(Math.random() * categories.length)
    ].toLocaleUpperCase();

  return (
    <>
      <section className="bg-slate-100 rounded-lg  w-screen md:w-2/4  mx-auto p-1 md:p-4">
        <ul className="flex flex-wrap justify-center gap-1 md:gap-2">
          {charts.map((chart) => {
            let founded = char.find((one) => one.id === chart.id);

            return (
              <li key={Math.random()}>
                <Button
                  dis={founded}
                  value={chart.char}
                  onClick={() => {
                    dispatch(
                      mainWordActions.chartCheck({
                        char: chart.char,
                        id: chart.id,
                      })
                    );
                    dispatch(gameOverActions.wrongTurn());
                  }}
                />
              </li>
            );
          })}
        </ul>
      </section>
      <aside className="mt-10 flex flex-col w-2/12 space-y-2 justify-center mx-auto items-center">
        <Link
          to="/categories"
          className="text-white bg-slate-900 hover:bg-slate-800 py-1 px-2 rounded">
          Categories
        </Link>
        <button
          onClick={() => {
            sessionStorage.clear();
            dispatch(mainWordActions.PlayAgain(word));
          }}
          className="text-white bg-slate-900 hover:bg-slate-800 py-1 px-2 rounded">
          Random
        </button>
      </aside>
    </>
  );
}
