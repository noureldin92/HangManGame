import { Link } from "react-router-dom";
import Button from "../UI/Button";

export default function Error() {
  return (
    <main className="mx-auto w-fit text-center translate-y-20 space-y-5">
      <h1 className="text-white font-bold text-lg sm:text-xl md:text-3xl tracking-wider">
        PAGE NOT FOUND
      </h1>
      <p className="text-white text-xs sm:text-sm md:text-lg">
        please go back or enter valid URL
      </p>
      <Link to="/game" className="w-36">
        <Button value="Go Back" stl="w-20"></Button>
      </Link>
    </main>
  );
}
