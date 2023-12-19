/* eslint-disable react/prop-types */
export default function Loading() {
  return (
    <div className="w-1/3 bg-white rounded-3xl translate-y-40   mx-auto h-4 flex justify-center items-center">
      <ul className="w-2/4 flex justify-between items-center">
        {["P", "L", "E", "A", "S", "E", "", "W", "A", "i", "t"].map((e) => {
          return (
            <li key={e}>
              <h1 className="text-orange-600 animate-pulse ">{e}</h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
