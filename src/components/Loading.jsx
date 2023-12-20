/* eslint-disable react/prop-types */
export default function Loading() {
  return (
    <div className="w-2/3  mx-auto  ">
      <ul className="w-full bg-white h-4 flex justify-center items-center rounded-3xl space-x-2">
        {["P", "L", "E", "A", "S", "E", "", "W", "A", "i", "t"].map((e) => {
          return (
            <li key={e}>
              <h1 className="text-orange-600 animate-pulse text-center">{e}</h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
