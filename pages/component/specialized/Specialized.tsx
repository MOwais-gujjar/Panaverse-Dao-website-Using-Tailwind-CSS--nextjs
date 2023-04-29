import Wrapper from "../CTA/Wrapper";
import Button from "../CTA/button";
import Image from "next/image";
import SpecialImage from "@/pages/Assets/images/SpecialImage.png";
import Special from "@/pages/Assets/images/Special.png";

const Specializedcourse = () => {
  return (
    <>
      <Wrapper>
        <div className="mt-10 flex items-center justify-center md:py-10 py-5 md:mb-10 ">
          <Image
            src={Special}
            alt={"Special"}
            className={
              "md:mt-3 mt-1 md:w-[36px] md:h-[44px] w-[28px] h-[32px]  "
            }
          />
          <h1 className="md:ml-4 ml-2 text-md md:text-[50px] font-body font-bold  text-secondry-200/60">
            Specilized Track
          </h1>
        </div>
        {/* Container */}
        <div className="md:flex md:flex-row flex-col">
          {/* Right Side */}
          <div className="flex-1 md:p-10 p-10">
            <Image
              src={SpecialImage}
              alt={"Special Image of Metaverse"}
              className={"md:w-[453px] md:h-[339px] w-[329px] h-[227px]"}
            ></Image>
          </div>
          {/* Left Side  */}
          <div className="flex-1">
            <div className="">
              <div className="md:pr-10 md:p-5 p-2 flex flex-col justify-center items-center">
                {/* Heading */}
                <h1 className="font-bold font-body md:text-md text-sm ml-3 md:ml-2 text-secondry-300">
                  Web 3.0 (Blockchain) and Metaverse Specialization
                </h1>
                <p className="font-fn font-light md:text-sm py-10 tracking-wide md:px-5 text-secondry-200/70 text-xs ml-5 mr-3">
                  This Web 3.0 and Metaverse specialization focuses on
                  developing full-stack Web 3.0 and Metaverse experiences for
                  the next generation of the internet by specializing in
                  building worlds that merge the best of cutting-edge
                  decentralized distributed blockchains with 3D metaverse client
                  experiences.
                </p>
              </div>
              <div className="ml-[100px] ">
                <Button text={"Learn More"} />
              </div>
            </div>
          </div>
        </div>
        {/* Card Container */}
        <div className="text-secondry-200/60 pt-5">
          {/* Cards */}
          <div className="flex flex-col md:flex-row md:justify-between items-center  mx-auto w-full md:py-20 py-[50px] ">
            {/* Card Quarter 4 */}
            <div className="md:rounded-3xl rounded-xl border-2 hover:scale-110 duration-500 border-secondry-300/30  mx-auto w-[317px] h-[250px] md:w-[380px] md:h-[400px] flex items-center justify-center hover:bg-gradient-to-r from-secondry-300/10 to-secondry-400/10 mb-[58px]">
              <div className=" flex  items-center relative top-0 justify-center flex-col">
                <div className="font-extrabold text-lg md:text-6xl opacity-10 md:my-[40px] my-5 p-10 absolute md:bottom-20 bottom-10 ">
                  <h1>4</h1>
                </div>
                <h1 className="font-bold md:font-extrabold text-md  md:text-[50px] font-fn mt-5">
                  Quarter
                </h1>
                <p className="md:pl-10 pt-2 md:p-5 p-1 text-xs md:ml-4 ml-2 md:mr-4">
                  W2-201: Developing Planet-Scale Web 2.0 Server less Cloud Apps
                  and APIs using Next.js 13 and Cloud Development Kit (CDK) for
                  Terraform
                </p>
              </div>
            </div>

            {/* Quarter 5 */}
            {/* Card Quarter 4 */}
            <div className="md:rounded-3xl rounded-xl border-2 hover:scale-110 duration-500 border-secondry-300/30  mx-auto w-[317px] h-[250px] md:w-[380px] md:h-[400px] flex items-center justify-center hover:bg-gradient-to-r from-secondry-300/10 to-secondry-400/10 mb-[58px]">
              <div className=" flex  items-center relative top-0 justify-center flex-col">
                <div className="font-extrabold text-lg md:text-6xl opacity-10 md:my-[40px] my-5 p-10 absolute md:bottom-20 bottom-10 ">
                  <h1>5</h1>
                </div>
                <h1 className="font-bold md:font-extrabold text-md  md:text-[50px] font-fn mt-5">
                  Quarter
                </h1>
                <p className=" pt-2 md:p-5 md:pl-10 p-1 text-xs md:ml-4 ml-2 md:mr-4">
                  W2-201: Developing Planet-Scale Web 2.0 Server less Cloud Apps
                  and APIs using Next.js 13 and Cloud Development Kit (CDK) for
                  Terraform
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Specializedcourse;
