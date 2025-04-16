import React from "react";
import HeroImage from "../../assets/pngwing 1.png";
const Hero = () => {
  return (
    <div className="hero bg-base-200 p-28">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={HeroImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="w-[50%] p-10">
          <h1 className="text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn mt-6 btn-primary">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
