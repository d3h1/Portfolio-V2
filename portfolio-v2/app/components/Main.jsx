"use client";

import React, { useState, useEffect } from "react";

import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// import Spaceship from "../../public/assets/projects/ufo.png";

const Main = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [Spaceship, setSpaceship] = useState(null);

  // useEffect(() => {
  //   import('../../public/assets/tech/ufo.svg')
  //     .then(({ ReactComponent }) => setSpaceship(() => ReactComponent));
  // }, []);

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      className="w-full h-screen text-center bg-abstract-bg bg-no-repeat bg-cover"
      onMouseMove={handleMouseMove}
    >
      <img
        src={'/assets/projects/ufo.png'}
        alt="Spaceship"
        style={{
          position: "absolute",
          top: `${position.y - 25}px`,
          left: `${position.x - 25}px`,
          width: "50px",
          height: "50px",
          pointerEvents: 'none',
        }}
      />

      <div className="page-container">
        <div className="flex flex-col items-center">
          <h1 className="py-4 text-gray-light">
            Hello There <br /> I'm <span className="text-violet-600">Deni</span>
            !
          </h1>

          <h3 className="py-2 text-xl text-gray-light w-[70%] m-auto">
            I develop everything and anything.
            <br />
            <br />
            From Fullstack Applications using premium Machine Learning Models,
            <br />
            to amazing Scripts that will automate your Life, I am on a mission
            to build incredible applications while innovating at the same time.
          </h3>
          <p className="mt-10 uppercase text-sm tracking-widest text-gray-light">
            CONNECT TO
          </p>
          <h4 className="mt-2 uppercase text-lg tracking-widest text-gray-light">
            CONSULT | DEVELOP | EXCEL
          </h4>
          <div className="flex flex-row my-6">
            <div className="rounded-button bg-gray-dark mx-6">
              <FaLinkedin size={26} />
            </div>
            <div className="rounded-button bg-gray-dark mx-6">
              <FaGithub size={26} />
            </div>
            <div className="rounded-button bg-gray-dark mx-6">
              <AiOutlineMail size={26} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
