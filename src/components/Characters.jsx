import { useDispatch, useSelector } from "react-redux";
import { charts } from "../chartsExport";
import { categories } from "../wordsSource";
import Button from "../UI/Button";
import { mainWordActions } from "../root/mainWordSlice";
import { gameOverActions } from "../root/gameOverSlice";
import { Link } from "react-router-dom";

export default function Charachters() {
  let dispatch = useDispatch();
  let { char } = useSelector((state) => state.mainWordSlice);
  let word =
    categories[
      Math.floor(Math.random() * categories.length)
    ].toLocaleUpperCase();
  //
  function charHandler(chart) {
    dispatch(
      mainWordActions.charCheck({
        char: chart.char,
        id: chart.id,
      })
    );
    dispatch(gameOverActions.wrongTurn());
  }
  //
  function random() {
    sessionStorage.clear();
    dispatch(mainWordActions.PlayAgain(word));
    dispatch(gameOverActions.reset());
  }
  //
  return (
    <>
      <section className="bg-slate-100 sm:w-3/4 md:w-2/4 rounded-lg mx-auto p-1 md:p-4 ">
        <ul className="flex w-full  flex-wrap justify-center gap-1 md:gap-2">
          {charts.map((chart) => {
            let founded = char.find((one) => one.id === chart.id);
            return (
              <li key={Math.random()}>
                <Button
                  dis={founded}
                  value={chart.char}
                  onClick={() => {
                    charHandler(chart);
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
        <Button
          value="Random"
          onClick={random}
          stl="text-white bg-slate-900 hover:bg-slate-800 py-1 px-2 rounded"
        />
      </aside>
    </>
  );
}
