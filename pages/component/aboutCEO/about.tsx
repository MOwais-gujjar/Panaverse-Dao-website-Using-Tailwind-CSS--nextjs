import React from "react";
import Image from "next/image";
import about from "@/pages/Assets/images/aboutceo.png";
import Wrapper from "../CTA/Wrapper";
const About = () => {
  return (
    <>
      <Wrapper>
        {/* container */}
        <div className="flex flex-col-reverse md:flex-row  items-center">
          {/* left */}
          <div className="flex-1">
            <div className="md:ml-10 md:mt-0 m-5 mt-0 md:w-[400px] md:h-[550px] w-[260px] h-[361px] bg-secondry-200 md:rounded-tl-[100px] rounded-tl-[70px] md:rounded-br-[100px] rounded-br-[60px] rounded-3xl">
              <Image
                src={about}
                alt={"About CEO"}
                className="md:w-[400px] md:h-[550px] w-[260px] h-[361px]"
              />
            </div>
          </div>
          {/* Right */}
          <div className="flex-1">
            <div className="font-bold text-center md:text-left ">
              <h1 className=" font-body text-sm md:text-[50px] ml-10">
                <div className="md:w-[140px] h-1 w-[60px] ml-[80px] md:m-0 rounded bg-secondry-100 mb-0"></div>
                About <span className="text-secondry-100/90">Our CEO </span>
                <div className="md:w-[80px] h-1 w-[30px] ml-[190px] md:ml-[275px] rounded bg-secondry-100"></div>
              </h1>

              <p className="font-fn md:text-sm text-xs font-light pt-4 md:p-3 p-10 md:mr-10 ">
                Web 3, DeFi, Cloud and Metaverse Architect Tokenomist and
                Metanomist CEO Volunteer COO Presidential Initiative for AI and
                Computing. CEO of Panacloud, the worlds first Integrated API
                Ownership Economy, Crowdfunding, and Development Platform.
                Volunteer COO of PIAIC, an initiative by the President of
                Pakistan for AI and computing mass education. Mentor and
                software developer with 20+ years of expertise in cloud and
                serverless computing, software design, project management, and
                API and App development. Expert in concept, business modeling &
                strategy development
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default About;
