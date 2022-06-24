import React from "react";
import Image from "../DashboardComponents/Image";

const Countrydata = [
  { name: "India", rise: true, value: "Ayan Khan" },
  { name: "India", rise: false, value: "Ayan Khan" },
  { name: "India", rise: false, value: "Ayan Khan" },
  { name: "India", rise: true, value: "Ayan Khan" },
];

function TopCountries() {
  return (
    <div className="flex p-4 flex-col h-full">
      <div className="flex justify-between items-center">
        <div className="text-black font-bold">Global Ranking</div>
      </div>
      <div className="">Check you global ranking</div>
      {Countrydata.map(({ name, rise, value, id }) => (
        <div className="flex items-center mt-3" key={id}>
          <div className="">{id}</div>

          <Image path={`\India-512.webp`} className="ml-2 w-6 h-6" />
          <div className="ml-2">{name}</div>
          <div className="flex-grow" />
          <div className="">{`${value.toLocaleString()}`}</div>
        </div>
      ))}
      <div className="flex-grow" />
      <div className="flex justify-center">
        <div
          style={{
            background: "var(--cornflower)",
            width: "100%",
            padding: "10px 20px",
            borderRadius: 10,
            cursor: "pointer",
          }}
        >
          Check All
        </div>
      </div>
    </div>
  );
}
export default TopCountries;
