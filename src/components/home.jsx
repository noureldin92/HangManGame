import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainWord from "./mainWord";
import Charachters from "./Characters";
import Attemps from "./Attemps";
import Loading from "./Loading";

export default function Home() {
  let { length, array } = useSelector((state) => state.mainWordSlice);
  let { attemps } = useSelector((state) => state.gameOverSlice);
  let navigate = useNavigate();
  let mainLength = array.filter((e) => e !== " ").length;
  let gameWon = length === mainLength;
  let homeContent = (
    <>
      <MainWord />
      <Attemps />
      <Charachters />
    </>
  );

  useEffect(() => {
    if (gameWon) {
      setTimeout(() => {
        navigate("/gameWon");
      }, 1500);
    }
    if (!gameWon && attemps === 0) {
      navigate("/gameOver");
    }
  }, [navigate, attemps, gameWon]);

  return (
    <main className="flex flex-col space-y-16 translate-y-10 ">
      {!gameWon ? homeContent : <Loading />}
    </main>
  );
}
