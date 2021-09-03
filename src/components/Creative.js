import React from "react";

const Creative = () => {
  return (
    <div className="Creative">
      <section className="px-8">
        <div className="py-16 grid grid-rows-2 w-3/5 justify-center items-center m-auto">
          <h1 className="text-bold text-center text-4xl pb-4">
            Your All-In-One Creative Solution
          </h1>
          <p className="text-gray-600 text-xl text-center pb-4">
            Watch BeFunky in action to see how it makes your photo editing,
            collage making, and graphic design workflow seamless.
          </p>
        </div>
        <div>
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/310214112"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
            className="block md:w-full"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Creative;
