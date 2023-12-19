import { useEffect } from "react";
import Charachters from "../components/Characters";
import MainWord from "../components/mainWord";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Attemps from "../components/Attemps";

export default function Home() {
  let { length, array } = useSelector((state) => state.mainWordSlice);
  let { gameOver } = useSelector((state) => state.gameOverSlice);

  let navigate = useNavigate();
  let mainLength = array.filter((e) => e !== " ").length;

  useEffect(() => {
    if (length === mainLength) {
      setTimeout(() => {
        navigate("/gameWon");
      }, 1500);
    }

    gameOver && navigate("/gameOver");
  }, [gameOver, length, navigate, array.length, mainLength]);
  return (
    <main className="flex flex-col space-y-6">
      <MainWord />
      {length !== mainLength && <Attemps />}
      <Charachters />
    </main>
  );
}
