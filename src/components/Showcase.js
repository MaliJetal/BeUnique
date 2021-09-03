import React from "react";
import hero from "../images/hero.jpg";

const Showcase = () => {
  return (
    <div className="Showcase">
      <section className="bg-green-300 py-16 px-8 md:grid md:grid-cols-2 md:gap-20 h-3/4">
        <div>
          <h1 className="font-bold-1 text-5xl mb-6">
            Photo Editing and Graphic Design Made for Everyone.
          </h1>
          <p className="mb-6">
            BeFunky's all-in-one online Creative Platform has everything you
            need to easily edit photos, create graphic designs, and make photo
            collages.
          </p>
          <button className="button button-xl bg-blue-700 text-white p-4 px-8 rounded-md cursor-pointer transition-all hover:opacity-75">
            Get Started
          </button>
        </div>
        <div className="slider">{/* <img src={hero} alt="" /> */}</div>
      </section>
    </div>
  );
};

export default Showcase;
