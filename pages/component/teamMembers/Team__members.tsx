import Image from "next/image";
import React from "react";
import adil from "@/pages/Assets/images/adil.png";
import daniyal from "@/pages/Assets/images/daniyal.png";
import zeeshan from "@/pages/Assets/images/zeeshan.png";
import hira from "@/pages/Assets/images/hira.png";
const Team__members = () => {
  return (
    <>
      {/* Container*/}

      <div className="pt-20">
        {/* heading */}
        <div className="text-center text-bold md:text-lg text-md pt-20 py-10">
          <h1 className="">Team Members</h1>
        </div>

        <div className="py-20 px-auto flex md:flex-row flex-col justify-center items-center gap-10">
          {/* Sir Adil */}
          <div className="hover:scale-105 duration-500 w-[258px] h-[255px] md:h-[285px] border border-solid shadow hover:shadow-white border-secondry-200/10 bg-secondry-200/0 rounded-2xl blur-none overflow-hidden">
            <div className="flex flex-col justify-center items-center py-5 px-10s ">
              {/* Image */}
              <Image
                src={adil}
                alt="adil"
                className="md:w-[100px] md:h-[100px] w-20 h-20 object-cover cursor-pointer "
              />
              <h1 className="py-2 text-md text-secondry-200/80">
                Mr. Adil Altaf
              </h1>
              <p className="font-fn font-light text-secondry-200/60 text-center px-auto text-xs pb-5 md:py-2">
                Internet-Scale Multi-Cloud Global App Architect | Full Stack
                Cloud Developer | Continuous Innovation Leader
              </p>
            </div>
          </div>

          {/* Zeshan */}
          <div className="hover:scale-105 duration-500 w-[258px] h-[255px] md:h-[285px] border border-solid shadow hover:shadow-white border-secondry-200/10 bg-secondry-200/0 rounded-2xl blur-none overflow-hidden">
            <div className="flex flex-col justify-center items-center py-5 px-10s ">
              {/* Image */}
              <Image
                src={zeeshan}
                alt="zeeshan"
                className="md:w-[100px] md:h-[100px] w-20 h-20 object-cover cursor-pointer "
              />
              <h1 className="py-2 text-md font-bold font-fn text-secondry-200/80">
                Mr. Adil Altaf
              </h1>
              <p className="font-fn font-light text-secondry-200/60 text-center px-10 text-xs pb-5 md:py-2">
                Head of Software Development at Panacloud Pvt Ltd
              </p>
            </div>
          </div>
          {/* Hira Khan */}
          <div className="hover:scale-105 duration-500 w-[258px] h-[255px] md:h-[285px] border border-solid shadow hover:shadow-white border-secondry-200/10 bg-secondry-200/0 rounded-2xl blur-none overflow-hidden">
            <div className="flex flex-col justify-center items-center py-5 px-10s ">
              {/* Image */}
              <Image
                src={hira}
                alt="hira"
                className="md:w-[100px] md:h-[100px] w-20 h-20 object-cover cursor-pointer "
              />
              <h1 className="py-2 text-md font-bold font-fn text-secondry-200/80">
                Hira Khan
              </h1>
              <p className="font-fn font-light text-secondry-200/60 text-center px-10 text-xs pb-5 md:py-2">
                Head of Software Development at Panacloud Pvt Ltd
              </p>
            </div>
          </div>
          {/* Daniyal */}
          <div className="hover:scale-105 duration-500 w-[258px] h-[255px] md:h-[285px] border border-solid shadow hover:shadow-white border-secondry-200/10 bg-secondry-200/0 rounded-2xl blur-none overflow-hidden">
            <div className="flex flex-col justify-center items-center py-5 px-10s ">
              {/* Image */}
              <Image
                src={daniyal}
                alt="daniyal"
                className="md:w-[100px] md:h-[100px] w-20 h-20 object-cover cursor-pointer "
              />
              <h1 className="py-2 text-md font-fn font-bold text-secondry-200/80">
                Daniyal Nagori
              </h1>
              <p className="font-fn font-light text-secondry-200/60 text-center px-10 text-xs pb-5 md:py-2">
                Software Development Lead at Panacloud Pvt Ltd
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team__members;
