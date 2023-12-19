import { useDispatch } from "react-redux";
import { mainWordActions } from "../root/mainWordSlice";
import { gameOverActions } from "../root/gameOverSlice";
import { categories } from "../wordsSource";
import Card from "../UI/card";
export default function Winner() {
  let word =
    categories[
      Math.floor(Math.random() * categories.length)
    ].toLocaleUpperCase();

  let dispatch = useDispatch();

  return (
    <Card
      message="You Won"
      emo="Congratulations"
      inner="Play Again"
      onClick={() => {
        dispatch(gameOverActions.reset());
        dispatch(mainWordActions.PlayAgain(word));
        let getItem = sessionStorage.getItem("ctg");
        if (sessionStorage.getItem("ctg")) {
          dispatch(mainWordActions.chooseCtg(getItem));
        }
      }}
      path="/game"
    />
  );
}
