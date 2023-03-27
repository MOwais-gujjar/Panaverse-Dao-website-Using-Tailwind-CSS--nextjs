import Image from "next/image";
import Button from "../Assets/button";
import Wrapper from "../Assets/Wrapper";
import YoutubeIcon from "@/pages/component/Assets/images/Youtube.png";
import heroImage from "@/pages/component/Assets/images/Heroimage.png";

const Hero = () => {
  return (
    <>
      <Wrapper>
        <div className="pl-5 flex flex-col-reverse md:flex-row items-center">
          {/* left side */}
          <div className="flex-1">
            <div
              className="font-extrabold font-body  
            md:font-bold text-md md:text-lg"
            >
              <h1 className=" text-secondry-100/70 flex justify-center ">
                Certified Web 3.0{" "}
                <b className="text-white/70 md:px-1 px-2"> And </b>
              </h1>
              <h2 className="text-secondry-300/70 flex justify-center  tracking-wide">
                Metaverse Developer
              </h2>
            </div>
            <div className=" text-secondry-200/70  tracking-wide m-1 md:mr-3 font-fn p-6 text-xs md:text-sm font-light">
              <p>
                The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
                Panaverse DAO is a movement to spread these technologies
                globally. It is community of Web 3 and Metaverse developers,
                designers, trainers, startup founders and service providers.
              </p>
              <span className="md:block md:pt-6">
                Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
                Cloud, Edge, Ambient Computing/IoT, Network Automation, and
                Bioinformatics Technologies
              </span>
            </div>
            <div className="flex items-center text-secondry-200">
              <div className="bg-secondry-100 rounded-[8px] ml-10">
                <Button text={"Learn More"} />
              </div>
              <div className="ml-20 hidden md:flex">
                <Image
                  src={YoutubeIcon}
                  alt={"You Tube Icon"}
                  width={"55"}
                  height={"35"}
                />
                <h1 className="mt-2 ml-3 font-extrabody text-3xl">You Tube </h1>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="w-[353px] h-[353px} md:w-[650px] md:h-[650px]">
            <Image src={heroImage} alt={"Hero Image"} />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Hero;
