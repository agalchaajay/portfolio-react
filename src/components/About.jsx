import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col   justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl  font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl  mt-20 ">
          I am Ajay Agalcha, a senior software engineer with over three years of
          expertise in developing Web Applications. I specialize in building
          solutions for various industries including the Health Sector,
          Automation, Audit Fields, and Fuel Price Stations Management among
          others.
          <br />I hold an Integrated M.Sc degree in Mathematics and Computing
          from BIT Mesra.
        </p>

        <br />

        <p className="text-xl  ">
          As a front-end developer, my goal is to create websites that not only
          look great, but also provide a seamless user experience. I am
          constantly seeking new challenges and opportunities to grow, and I
          believe that my attention to detail, passion for technology, and drive
          to succeed will make me a valuable asset to any team. When I'm not
          coding, I enjoy staying up-to-date with the latest industry trends,
          experimenting with new technologies, and exploring my creative side
          through design and photography. <br />
          If you're in search of a motivated and skilled front-end developer, I
          would be delighted to discuss how I can contribute to your
          organization's success.
        </p>
      </div>
    </div>
  );
};

export default About;
