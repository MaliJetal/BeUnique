import React, { useState } from "react";
import data from "../data/data";

const Grid = () => {
  const [items] = useState(data);
  return (
    <div className="Grid">
      <section className="px-12 pb-16 grid grid-cols-1 gap-10">
        {items.map((item) => {
          const { id, image, title, desc, link } = item;
          return (
            <div
              key={id}
              className="grid-card lg:flex lg:items-center lg:justify-between py-10 lg:h-3/4"
            >
              <div className="lg:w-1/2 lg:mx-10">
                <h1 className="font-bold text-4xl pb-4">{title}</h1>
                <p className="font-light text-gray-600 pb-4">{desc}</p>
                <button className="button button-xl rounded-md bg-blue-700 text-white p-4 px-8 cursor-pointer transition-all hover:opacity-75">
                  {link}
                </button>
              </div>
              <div className="lg:pr-8">
                <img src={image} alt={title} />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default Grid;
