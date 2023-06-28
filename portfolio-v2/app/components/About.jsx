"use client";

import React from "react";


const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16 bg-gradient-to-t from-gray-dark to-black">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 grid-gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-violet-600">About</p>
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
            newest technologies is necessary, so building projects and
            engaging with other engineers is always in the works!
          </p>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
