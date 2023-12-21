import { useDispatch, useSelector } from "react-redux";
import { mainWordActions } from "../root/mainWordSlice";
import { gameOverActions } from "../root/gameOverSlice";
import { categories } from "../wordsSource";
import Card from "../UI/card";
export default function GameOver() {
  let { array } = useSelector((state) => state.mainWordSlice);
  let missedchars = useSelector((state) => state.mainWordSlice.char);
  let dispatch = useDispatch();
  let word =
    categories[
      Math.floor(Math.random() * categories.length)
    ].toLocaleUpperCase();
  ///
  
  function gameOver() {
    dispatch(gameOverActions.reset());
    let getItem = sessionStorage.getItem("ctg");
    if (getItem) {
      dispatch(mainWordActions.chooseCtg(getItem));
    } else dispatch(mainWordActions.PlayAgain(word));
  }
  ///
  return (
    <>
      <Card
        emo="Oooooops"
        message="GAME OVER"
        onClick={gameOver}
        path="/game"
        inner="Try Again"
        gameOver={true}
        overArr={array}
        trimmed={new Set(missedchars.map((e) => e.char))}
      />
    </>
  );
}
