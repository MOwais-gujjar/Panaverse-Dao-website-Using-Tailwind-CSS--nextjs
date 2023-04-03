import Image from "next/image";
import Core from "@/pages/Assets/images/courses.png";
import React from "react";
import Wrapper from "../CTA/Wrapper";

const Corecourses = () => {
  return (
    <>
      <Wrapper>
        <div className="text-secondry-200/60 pt-5">
          {/* Heading */}
          <div className="mt-10 flex items-center justify-center md:py-10 py-5 md:mb-10 ">
            <Image
              src={Core}
              alt={"courses Icon"}
              className={"md:mt-3 mt-1 md:w-[50px] md:h-10 w-8 h-6  "}
            ></Image>
            <h1 className="md:ml-4 ml-2 text-md md:text-lg ">Core Courses </h1>
          </div>
          {/* Cards */}
          <div className="flex flex-col md:flex-row md:justify-between items-center  mx-auto w-full md:py-20 py-[50px] ">
            {/* Card Quarter 1 */}
            <div className="md:rounded-3xl rounded-xl border-2 hover:scale-110 duration-500 border-secondry-300/20  mx-auto w-[317px] h-[250px] md:w-[280px] md:h-[350px] flex items-center justify-center hover:bg-gradient-to-r from-secondry-300/10 to-secondry-400/10 mb-[58px]">
              <div className=" flex  items-center relative top-0 justify-center flex-col">
                <div className="font-extrabold text-lg md:text-6xl opacity-5 md:my-[40px] my-5 p-10 absolute md:bottom-20 bottom-10 ">
                  <h1>1</h1>
                </div>
                <h1 className="font-extrabold text-md  md:text-[50px] font-fn pt-2">
                  Quarter
                </h1>
                <p className="pl-[50px] pt-2 p-5 text-xs">
                  CS-101: Object-Oriented Programming using TypeScript
                </p>
              </div>
            </div>
            {/* Card Quarter 2 */}
            <div className="md:rounded-3xl rounded-xl border-2 hover:scale-110 duration-500 border-secondry-300/20 mb-[58px] mx-auto w-[317px] h-[250px] md:w-[280px] md:h-[350px] flex items-center justify-center hover:bg-gradient-to-r from-secondry-300/10 to-secondry-400/10 ">
              <div className=" flex  items-center relative top-0 justify-center flex-col">
                <div className="font-extrabold text-lg md:text-6xl opacity-5 md:my-[40px] my-5 p-10 absolute md:bottom-20 bottom-10 ">
                  <h1>2</h1>
                </div>
                <h1 className="font-extrabold text-md md:text-[50px] font-fn pt-5">
                  Quarter
                </h1>
                <p className="pl-[50px] pt-1 p-2 text-xs">
                  W2-201: Developing Planet-Scale Web 2.0 Server less Cloud Apps
                  and APIs using Next.js 13
                </p>
              </div>
            </div>
            {/* Card Quarter 3 */}
            <div className="md:rounded-3xl rounded-xl border-2 hover:scale-110 duration-500 border-secondry-300/20 mb-[58px] mx-auto w-[317px] h-[250px] md:w-[280px] md:h-[350px] flex items-center justify-center hover:bg-gradient-to-r from-secondry-300/10 to-secondry-400/10 ">
              <div className=" flex  items-center relative top-0 justify-center flex-col">
                <div className="font-extrabold text-lg md:text-6xl opacity-5 md:my-[40px] my-5 p-10 absolute md:bottom-20 bottom-10">
                  <h1>3</h1>
                </div>
                <h1 className="font-extrabold text-md  md:text-[50px] font-fn pt-5">
                  Quarter
                </h1>
                <p className="pl-[50px] pt-1 p-1 text-xs">
                  $-101: Dollar Making Bootcamp - Full-Stack Template and API
                  Product Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Corecourses;
