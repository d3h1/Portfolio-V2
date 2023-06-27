import React from "react";

import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="page-container">
        <div className="flex flex-col items-center">
          <p className="uppercase text-sm tracking-widest text-gray-light">
            CONSULT | DEVELOP | EXCEL
          </p>
          <h1 className="py-4 text-gray-light ">
            Hello there! I'm <span className="text-violet-600">Deni</span>
          </h1>
          <h4 className="py-2 text-gray-light w-[70%] m-auto">
            I build fullstack applications, machine learning models, and video
            games
          </h4>
          <div className="flex flex-row my-6">
            <div className="rounded-button mx-4">
              <FaLinkedin size={24} />
            </div>
            <div className="rounded-button mx-4">
              <FaGithub size={24} />
            </div>
            <div className="rounded-button mx-4">
              <AiOutlineMail size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
