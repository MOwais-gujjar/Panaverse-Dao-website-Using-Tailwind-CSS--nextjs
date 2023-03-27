import React, { useState } from "react";
import Wrapper from "../Assets/Wrapper";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Button from "../Assets/button";
const Navbar = () => {
  let [toggle, setToggle] = useState(true);
  let links = [
    { name: "Home", lin: "/" },
    { name: "Explore", lin: "/" },
    { name: "Courses", lin: "/" },
    { name: "Contact", lin: "/" },
  ];
  return (
    <>
      <Wrapper>
        {/* Container Class  */}
        <div className="md:flex md:justify-between  flex justify-between items-center md:px-5 sticky top-0 ">
          {/* Logo */}
          <div className="">
            <Image
              className="md:flex "
              src={logo}
              alt={"Panaverse Dao Logo"}
              width={"139"}
              height={"70"}
            ></Image>
          </div>
          {/* Humberger Menu */}
          <div
            className=" flex justify-center items-center md:hidden mr-5 hover:scale-105"
            onClick={() => {
              setToggle(!toggle);
              console.log("Toggle", toggle);
            }}
          >
            {toggle ? (
              <AiOutlineClose className="text-white bg-black" />
            ) : (
              <AiOutlineMenu className="text-black bg-white shadow-emerald-200" />
            )}
          </div>
          {/* Menu Options */}
          <ul
            className={`absolute pl-10 text-black py-10 w-full px-5 bg-white md:text-white  z-[-1] mt-4 scale-105 shadow-lg
            md:bg-inherit md:static md:flex md:p-0 md:ml-[500px] md:z-auto  md:w-auto md:pb-0 ${
              toggle ? "top-20 " : "top-[-490px]"
            }`}
          >
            {links.map((L) => (
              <li
                key={L.lin}
                className="px-5 py-1 hover:text-secondry-100 hover:font-extrabold hover:transition-all hover:duration-500"
              >
                <Link href={L.lin}> {L.name}</Link>
              </li>
            ))}
          </ul>
          {/* apply Button */}
          <div className="md:mr-5 hidden md:flex md:mt-3">
            <Button text={"Apply Now"} />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Navbar;
