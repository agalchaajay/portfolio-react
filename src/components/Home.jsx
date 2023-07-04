import React from "react";
import HeroImage from "../assets/photo4.png";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full  ">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am Ajay Agalcha, a senior software engineer with over three years
            of expertise in developing Web Applications. <br />
            I specialize in building solutions for various industries including
            the Health Sector, Automation, Audit Fields, and Fuel Price Stations
            Management among others.
            <br />I hold an Integrated M.Sc degree in Mathematics and Computing
            from BIT Mesra.
          </p>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
