import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <main className=" p-3 md:w-3/4 min-h-[100vh] mx-auto   flex justify-center space-y-10 items-center flex-col bg-gray-200/50 md:rounded-full ">
      <h1 className="text-4xl font-extrbold font-[1000] text-center text-orange-600">
        Welcome To HangMan Challenge
      </h1>
      <p className="mt-12">
        <Link to="game" className=" p-2 bg- bg-orange-600 text-white rounded">
          Start Game
        </Link>
      </p>
    </main>
  );
}
