import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import Wrapper from "../CTA/Wrapper";
import { AiOutlineMail, AiFillGithub, AiOutlineYoutube } from "react-icons/ai";
import { ImFacebook, ImLinkedin2 } from "react-icons/im";
const Footer = () => {
  const link_2 = [
    { name: "Web 3.0 & Metaverse", link: "/" },
    { name: "Blockchain", link: "/" },
    { name: "Artificial intelligence", link: "/" },
    { name: "Cloud Computing", link: "/" },
    { name: "5G Development", link: "/" },
  ];
  const link_1 = [
    { name: "panaverse Dao", link: "/" },
    { name: "Contact Us", link: "/" },
    { name: "FAQ", link: "/" },
    { name: "Privacy policy", link: "/" },
    { name: "Terms of Condition", link: "/" },
  ];

  return (
    <>
      <Wrapper>
        {/* Container */}
        <div className="flex md:flex-row flex-col items-center justify-center gap-10 md:py-10">
          {/* logo */}
          <div className="px-2 mt-0 md:w-[465px] flex flex-col justify-center items-center md:items-start">
            <Image
              className=" md:ml-20 py-2 "
              src={logo}
              alt={"Panaverse Dao Logo"}
              width={"139"}
              height={"70"}
            ></Image>
            {/* About Panaverse Dao */}
            <p className="text-xs font-fn font-light md:text-left text-center px-10 md:mx-5 ml-5">
              Panaverse DAO is a movement to spread these technolgies globally.
              It is community of Web 3 and Metaverse developers, designers,
              trainers, startup founders and service providers.
            </p>
          </div>
          <div className="flex-1 flex flex-col md:flex-row md:px-5 mt-5 md:mt-10">
            <div className="flex flex-row px-auto md:py-0 pb-4">
              <div className="px-6">
                {/* About Us  */}
                <h1 className="text-sm font-fn font-bold py-2 cursor-pointer">
                  About Us
                </h1>
                {link_1.map((l) => (
                  <ul
                    key={l.link}
                    className="flex flex-col text-xs font-fn font-normal pl-2 py-1"
                  >
                    <li className="cursor-pointer hover:text-secondry-100">
                      {l.name}
                    </li>
                  </ul>
                ))}
              </div>
              <div className="px-6">
                {/* Courses */}
                <h1 className="text-sm font-fn font-bold py-2">Courses</h1>
                {link_2.map((l) => (
                  <ul
                    key={l.link}
                    className="flex flex-col text-xs font-fn font-normal pl-2 py-1"
                  >
                    <li className="cursor-pointer hover:text-secondry-100">
                      {l.name}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="px-8">
              {/* contact  */}
              <h1 className="text-sm font-fn font-bold py-2 ml-8">
                Contact Us
              </h1>
              <div className="flex flex-col gap-2 text-xs font-fn pl-2">
                <div className="flex flex-row gap-3 m-0 p-0">
                  <input
                    type="text"
                    name="text"
                    className="border border-secondry-300/40 bg-inherit rounded-sm h-[24px]"
                  />
                  <div className="w-[60px] h-[28px] hover:scale-105 flex justify-center items-center duration-500 bg-secondry-100 text-white rounded-sm font-semibold">
                    <button>Login</button>
                  </div>
                </div>
                <h1 className="text-xs font-fn font-semibold py-2 ml-3">
                  Social Links:
                </h1>
                {/* Links icon */}
                <div className="flex flex-row gap-2">
                  <div className="w-10 h-10 rounded-full hover:scale-105 duration-500 bg-gradient-to-r from-secondry-300/80 to-secondry-400/80 mb-[58px] flex justify-center items-center">
                    <ImFacebook className="w-5 h-5 border-inherit" />
                  </div>
                  <div className="w-10 h-10 rounded-full hover:scale-105 duration-500 bg-gradient-to-r from-secondry-300/80 to-secondry-400/80 mb-[58px] flex justify-center items-center">
                    <AiFillGithub className="w-5 h-5 border-inherit" />
                  </div>
                  <div className="w-10 h-10 rounded-full hover:scale-105 duration-500 bg-gradient-to-r from-secondry-300/80 to-secondry-400/80 mb-[58px] flex justify-center items-center">
                    <AiOutlineMail className="w-5 h-5 border-inherit" />
                  </div>
                  <div className="w-10 h-10 rounded-full hover:scale-105 duration-500 bg-gradient-to-r from-secondry-300/80 to-secondry-400/80 mb-[58px] flex justify-center items-center">
                    <ImLinkedin2 className="w-5 h-5 border-inherit" />
                  </div>
                  <div className="w-10 h-10 rounded-full hover:scale-105 duration-500 bg-gradient-to-r from-secondry-300/80 to-secondry-400/80 mb-[58px] flex justify-center items-center">
                    <AiOutlineYoutube className="w-5 h-5 border-inherit" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-2 md:py-5 flex flex-col justify-center items-center">
          <div className="w-full h-1 bg-secondry-200/20 "></div>
          <h1 className="py-3 text-xs">
            2023 &copy; panverseDao.co All right reserved by Muhammad Awais
          </h1>
        </div>
      </Wrapper>
    </>
  );
};

export default Footer;
