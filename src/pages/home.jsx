import { useEffect } from "react";
import Charachters from "../components/Characters";
import MainWord from "../components/mainWord";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Attemps from "../components/Attemps";

export default function Home() {
  let { length, array } = useSelector((state) => state.mainWordSlice);
  let { attemps } = useSelector((state) => state.gameOverSlice);

  let navigate = useNavigate();
  let mainLength = array.filter((e) => e !== " ").length;

  useEffect(() => {
    if (length === mainLength) {
      setTimeout(() => {
        navigate("/gameWon");
      }, 1500);
    }
    if (length !== mainLength && attemps === 0) {
      navigate("/gameOver");
    }
  }, [length, navigate, array.length, mainLength, attemps]);
  return (
    <main className="flex flex-col mt-20 space-y-6 ">
      <MainWord />
      {length !== mainLength && <Attemps />}
      <Charachters />
    </main>
  );
}
