import { useSelector, useDispatch } from "react-redux";
import { mainWordActions } from "../root/mainWordSlice";
import { useNavigate } from "react-router-dom";
import { gameOverActions } from "../root/gameOverSlice";
import { categories } from "../wordsSource";
import Category from "./category";
import Button from "../UI/Button";
import { ctgListStyle } from "./category";
export default function Categories() {
  let dispatch = useDispatch();

  let navigate = useNavigate();
  let { ctg } = useSelector((state) => state.mainWordSlice);
  let word =
    categories[
      Math.floor(Math.random() * categories.length)
    ].toLocaleUpperCase();

  return (
    <section className="w-full rounded h-screen sm:h-fit sm:mt-16 ">
      <ul className={ctgListStyle}>
        {ctg.map((ctg) => {
          return (
            <Category
              key={ctg.ctg}
              onClick={() => {
                dispatch(gameOverActions.reset());
                dispatch(mainWordActions.chooseCtg(ctg.ctg));
                window.sessionStorage.setItem("ctg", ctg.ctg);
              }}
              to="/game"
              value={ctg.ctg}
            />
          );
        })}
        <li>
          <Button
            value="Random"
            onClick={() => {
              sessionStorage.clear();
              dispatch(mainWordActions.PlayAgain(word));
              dispatch(gameOverActions.reset());
              navigate("/game");
            }}
            stl="text-white bg-slate-900  hover:bg-slate-800 py-1 px-2 rounded"
          />
        </li>
      </ul>
    </section>
  );
}
