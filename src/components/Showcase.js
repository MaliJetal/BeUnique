import React from "react";
import hero from "../images/hero.jpg";

const Showcase = () => {
  return (
    <div className="Showcase">
      <section className="bg-green-300 pt-32 h-screen">
        <div>
          <h1>Photo Editing and Graphic Design Made for Everyone.</h1>
          <p>
            BeFunky's all-in-one online Creative Platform has everything you
            need to easily edit photos, create graphic designs, and make photo
            collages.
          </p>
        </div>
        <div>
          <img src="hero" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Showcase;
