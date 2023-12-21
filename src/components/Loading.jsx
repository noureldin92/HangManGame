/* eslint-disable react/prop-types */
export default function Loading() {
  return (
    <div className="w-2/3 md:w-1/4 mx-auto  translate-y-52">
      <ul className="w-full bg-white h-4 flex justify-center items-center rounded-3xl space-x-2">
        {["P", "L", "E", "A", "S", "E", "", "W", "A", "I", "T"].map((e) => {
          return (
            <li key={Math.random()}>
              <h1 className="text-orange-600 animate-pulse ">{e}</h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
