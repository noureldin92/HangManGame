import { useSelector, useDispatch } from "react-redux";
import { mainWordActions } from "../root/mainWordSlice";
import { Link, useNavigate } from "react-router-dom";
import { gameOverActions } from "../root/gameOverSlice";
import { categories } from "../wordsSource";

export default function Categories() {
  let dispatch = useDispatch();
  let { ctg } = useSelector((state) => state.mainWordSlice);
  let navigate = useNavigate();
  let word =
    categories[
      Math.floor(Math.random() * categories.length)
    ].toLocaleUpperCase();

  return (
    <section className="w-full rounded h-screen sm:h-fit sm:mt-16 ">
      <ul className="w-full sm:w-3/4 sm:h-fit  h-full md:w-1/4 text-center capitalize font-bold mx-auto space-y-3 bg-slate-100 p-6 rounded">
        {ctg.map((ctg) => {
          return (
            <li
              key={ctg.ctg}
              className="bg-orange-600 hover:bg-orange-500 w-full rounded ">
              <Link
                className="text-white w-full rounded tracking-widest sm:tracking-wider "
                onClick={() => {
                  dispatch(gameOverActions.reset());
                  dispatch(mainWordActions.chooseCtg(ctg.ctg));
                  window.sessionStorage.setItem("ctg", ctg.ctg);
                }}
                to="/game">
                <p className="py-2">{ctg.ctg}</p>
              </Link>
            </li>
          );
        })}
        <li>
          {" "}
          <button
            onClick={() => {
              sessionStorage.clear();
              dispatch(mainWordActions.PlayAgain(word));
              dispatch(gameOverActions.reset());
              navigate("/game");
            }}
            className="text-white bg-slate-900 hover:bg-slate-800 py-1 px-2 rounded">
            Random
          </button>
        </li>
      </ul>
    </section>
  );
}
