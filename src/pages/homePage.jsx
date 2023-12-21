import Home from "../components/home";
export default function HomePage() {
  return <Home />;
  // let { length, array } = useSelector((state) => state.mainWordSlice);
  // let { attemps } = useSelector((state) => state.gameOverSlice);
  // let navigate = useNavigate();
  // let mainLength = array.filter((e) => e !== " ").length;
  // useEffect(() => {
  //   if (length === mainLength) {
  //     setTimeout(() => {
  //       navigate("/gameWon");
  //     }, 10000);
  //   }
  //   if (length !== mainLength && attemps === 0) {
  //     navigate("/gameOver");
  //   }
  // }, [length, navigate, array.length, mainLength, attemps]);
  // return (
  //   <main className="flex flex-col space-y-16 translate-y-10 ">
  //     <MainWord />
  //     {length !== mainLength && <Attemps />}
  //     <Charachters />
  //   </main>
  // );
}
