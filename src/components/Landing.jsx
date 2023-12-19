import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <main className="h-screen my-[-32px]  bg-white rounded-full flex justify-center flex-col items-center  border-orange-600 w-3/4 mx-auto">
      <h1 className="text-4xl font-extrabold text-center text-orange-600">
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
