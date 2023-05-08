import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../../sanity";
import { PageInfo } from "../../typings";
import BackGroundCircles from "./BackGroundCircles";
import heroImage from "/public/asad.jpg";
type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [words] = useTypewriter({
    words: [
      `HI! ${pageInfo ? pageInfo?.name : "Name"} Here`,
      " Developer.",
      " Learner.",
      " Coder.",
      " SelfBeliever.",
    ],
    loop: 0,
    delaySpeed: 1000,
    typeSpeed: 80,
    deleteSpeed: 50,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
console.log(' urlFor(pageInfo?.heroImage)?.url() ',  urlFor(pageInfo?.heroImage)?.url() )
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      <BackGroundCircles />
      <Image
        src={pageInfo ? urlFor(pageInfo?.heroImage)?.url() : ""}
        width="175px"
        height="175px"
        className="rounded-full object-cover"
        alt="Profile Picture Asad Ali Khan"
      ></Image>
      <h2 className="text-sm uppercase text-gray-50 pb-2 tracking-[15px] z-20">
        {pageInfo?.role}
      </h2>
      <h1 className="text-5xl lg:text-6xl font-semibold px-10 z-20">
        <span className="mr-3 ">{words}</span>
        <Cursor cursorColor="#F7AB0a" />
      </h1>
      <div className="z-10">
        <Link href="#About">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#Experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#Skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#Projects">
          <button className="heroButton">Projects</button>
        </Link>
        <Link href="#Contact">
          <button className="heroButton">Contact Me</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
