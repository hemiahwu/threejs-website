import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
  {technologies.map((technology) => (
    <div className='w-28 h-28' key={technology.name}>
      <BallCanvas icon={technology.icon} />
      <div className="mt-3">
        <a href={technology.href} className="mb-5 ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">访问课程</a>
      </div>
    </div>
  ))}
</div>

  );
};

export default SectionWrapper(Tech, "");
