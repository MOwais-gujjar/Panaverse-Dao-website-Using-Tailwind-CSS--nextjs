import Image from "next/image";
import Button from "../Assets/button";
import Wrapper from "../Assets/Wrapper";
import YoutubeIcon from "@/pages/component/Assets/images/Youtube.png";
import heroImage from "@/pages/component/Assets/images/Heroimage.png";

const Hero = () => {
  return (
    <>
      <Wrapper>
        <div className="pl-5 flex flex-col md:flex-row lg:flex-row xl:flex-row items-center">
          {/* left side */}
          <div className="flex-1">
            <h1 className=" text-secondry-100/70 font-body font-extrabold text-[50px]">
              Certified Web 3.0 <b className="text-white"> And </b>
            </h1>
            <h2 className="text-secondry-300/70 font-body font-extrabold text-[50px] tracking-wide">
              Metaverse Developer
            </h2>
            <p className=" text-secondry-200/60 p-8 pb-0 mr-3 font-fn ">
              The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
              Panaverse DAO is a movement to spread these technologies globally.
              It is community of Web 3 and Metaverse developers, designers,
              trainers, startup founders and service providers.
            </p>
            <span className="block text-secondry-200/60 p-8 mr-5 font-fn ">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </span>
            <div className="flex items-center justify-around text-secondry-200">
              <div>
                <Button text={"Learn More"} />
              </div>
              <div className="flex mr-12">
                <Image
                  src={YoutubeIcon}
                  alt={"You Tube Icon"}
                  width={"72"}
                  height={"52"}
                />
                <h1 className="mt-5 ml-3 font-body text-3xl">You Tube </h1>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div>
            <Image
              src={heroImage}
              alt={"Hero Image"}
              width={"757"}
              height={"750"}
            />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Hero;
