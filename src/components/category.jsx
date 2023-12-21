/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Category({ onClick, to, value }) {
  return (
    <li
      key={value}
      className="bg-orange-600 hover:bg-orange-500 w-full rounded ">
      <Link
        className="text-white w-full rounded tracking-widest sm:tracking-wider"
        onClick={onClick}
        to={to}>
        <p className="py-2">{value}</p>
      </Link>
    </li>
  );
}

export let ctgListStyle =
  "w-full sm:w-3/4 sm:h-fit h-full md:w-1/4 text-center capitalize font-bold mx-auto space-y-3 bg-slate-100 p-6 rounded";
