import React from "react";
import aboutImage from "/public/as3.jpeg";
import { motion } from "framer-motion";
import Image from "next/image";
import { PageInfo, Project } from "../../typings";
import { urlFor } from "../../sanity";
import SkillImage from "./SkillImage";
import Link from "next/link";

type Props = {
  pageInfo?: PageInfo;
  name?: string;
  title?: string;
  project?: Project;
};
const About2 = ({ pageInfo, name, title, project }: Props) => {
  console.log(`About:`, project);
  console.log("pageInfo?.backgroundInformation :>> ", project?.summary);
  return (
    // @ts-nocheck
    <>
      <div className="h-screen ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="h-[80%] flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
        >
          <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            {name}
          </h3>
          {/* <Image></Image> */}
          <div className="mt-60 flex flex-col items-center justify-center md:flex-row  md:justify-around md:items-start">
            <motion.div
              initial={{
                x: -200,
                opacity: 0,
              }}
              transition={{ duration: 1.5 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="-mb-20 md:mb-0  flex-shrink-0 w-56 h-56 md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]   "
            >
              {/* Provided "contain" should be one of fill,fixed,intrinsic,responsive,undefined. */}
              <div>
                @ts-ignore
                <Link
                  target="blank"
                  href={
                    name != "About" && project?.linkToBuild
                      ? project?.linkToBuild
                      : "#"
                  }
                  className="cursor-pointer"
                >
                  eslint-disable-next-line @next/next/no-img-element
                  <Image
                    src={
                      name == "About"
                        ? urlFor(pageInfo?.profilePic)?.toString()
                        : urlFor(project?.image)?.toString()
                    }
                    alt="AboutImage"
                    className="rounded-full object-cover md:rounded-lg cursor-pointer hover:scale-125 transition-transform"
                  ></Image>
                </Link>
              </div>
            </motion.div>
            <div className="space-y-10 px-0 md:p-10 mt-28 md:mt-0 ">
              {name == "About" ? (
                <h4 className="text-4xl font-semibold">
                  Here Is A little{" "}
                  <span className="underline decoration-[#F7AB0A]/50">
                    Background!
                  </span>
                </h4>
              ) : (
                <h4 className="text-4xl font-semibold">
                  <span className="underline decoration-[#F7AB0A]/50">
                    {project?.title}
                  </span>
                </h4>
              )}
              @ts-ignore
              <p>
                {pageInfo?.backgroundInformation !== undefined
                  ? pageInfo?.backgroundInformation
                  : project?.summary}
              </p>
            </div>
          </div>
        </motion.div>
        {project?.technologies && (
          <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mx-auto w-1/3 text-center mb-16">
            TECH STACK
          </h3>
        )}
        <div className="w-[80vw] flex flex-wrap sm:grid sm:grid-cols-4 sm:gap-1 lg:gap-20">
          {project?.technologies?.map((elem, index) => {
            return <SkillImage key={index} data={elem} directionLeft={true} />;
          })}
        </div>
      </div>
    </>
  );
};

export default About2;
