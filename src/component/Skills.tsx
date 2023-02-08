import React from "react";
import { motion } from "framer-motion";
import SkillImage from "./SkillImage";
import { Skill } from "../../typings";

type Props = {
  skills: Skill[];
};

function Skills({ skills }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        hover Over a skill for currency proficiency
      </h3>
      <div className="grid grid-cols-4 gap-1 gap-5">
        {skills.map((elem, index) => {
          return (
            <SkillImage
              key={index}
              data={elem}
              directionLeft={index % 2 === 0 ? true : false}
            />
          );
        })}
      </div>
    </motion.article>
  );
}

export default Skills;
