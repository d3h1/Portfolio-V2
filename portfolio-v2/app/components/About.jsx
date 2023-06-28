"use client";

import React from "react";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants/static";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc/SectionWrapper";

const About = () => {
  const ServiceCard = ({ title, index, icon }) => {
    return (
      <Tilt className="xs:w-[100px] m-2">
        {/* Style our cards, make the cards, and then output the cards */}
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="bg-gradient-to-t from-violet-600/40 to-transparent p-[1px] rounded-[20px] shadow-md shadow-black"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="rounded-[20px] px-1 h-[150px] w-[150px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-12 h-12 object-contain" />
            <h3 className="text-white w-[100px] uppercase tracking-widest text-sm font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    );
  };

  return (
    <div className="w-full sm:h-screen md:h-screen p-2 flex flex-col py-16 bg-gradient-to-t from-gray-dark to-black">
      <div className="max-w-[1450px] m-auto md:grid md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 m-2 items-center">
          <p className="uppercase text-xl tracking-widest text-violet-600">
            About
          </p>
          <h1 className="py-4">Overview</h1>
          <p className="text-base tracking-widest">
            I am a software engineer that has production level experience with
            C++, C#, Python, React, and Javascript along with knowledge in
            topics such as NodeJS, MySQL, REST, TCP/IP Clients and more.
          </p>
          <p className="text-base tracking-widest py-5">
            I collaborate closely with other programmers and am able to learn
            quickly when faced with challenges. Developing efficient and
            scalable applications is something I do on a daily basis
            consistently providing results. With that in mind, learning the
            newest technologies is necessary, so building projects and engaging
            with other engineers is always in the works!
          </p>
        </div>
        <div className="hidden lg:flex col-span-1 m-2 flex-wrap">
          
        </div>
        <div className="col-span-1 m-2 flex flex-wrap justify-center items-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
