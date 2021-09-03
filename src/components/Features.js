import React, { useState } from "react";
import data from "../data/features";

const Features = () => {
  const [cards] = useState(data);
  return (
    <div className="Features">
      <div className="pt-16 px-12 text-center w-3/4 mx-auto">
        <h1 className="font-bold text-5xl pb-8">Most Popular Features</h1>
        <p className="text-xl text-gray-600 pb-4">
          BeFunky has an amazing collection of tools and features for photo
          editing, collage making, and graphic design. Here are some favorites:
        </p>
      </div>
      <section className="px-12 pb-10 grid grid-col-1 lg:grid-cols-3 gap-6 md:grid-cols-2">
        {cards.map((card) => {
          const { id, image, title, desc } = card;
          return (
            <div key={id} className="rounded-lg shadow-md">
              <img src={image} alt="" />
              <div className="pb-4">
                <h1 className="font-bold text-xl p-4">{title}</h1>
                <p className="text-light px-4">{desc}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Features;
