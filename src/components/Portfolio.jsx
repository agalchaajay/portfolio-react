import React from "react";
import food from "../assets/food.png";
import tictactoe from "../assets/tictactoe.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: "Tic Tac Toe Game",
      src: tictactoe,
      href: "https://github.com/agalchaajay/TicTacToe",
      nhref: "https://tic-tac-toe-game007.netlify.app/",
    },
    {
      id: 1,
      name: "Nmaste React (Akshay Saini)",
      src: food,
      href: "https://github.com/agalchaajay/Namaste-React",
      nhref: "https://tic-tac-toe-game007.netlify.app/",
    },
  ];

  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, nhref }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={nhref} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={href} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
