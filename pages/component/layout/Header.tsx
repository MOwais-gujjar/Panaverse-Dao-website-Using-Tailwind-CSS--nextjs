import Image from "next/image";
import logo from "../../../public/logo.png";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Button from "../Assets/button";
import Wrapper from "../Assets/Wrapper";
export default function Navbar() {
  const [val, setVal] = useState(false);
  const change = () => {
    setVal(val);
  };
  let links = [
    { name: "Home", lin: "/" },
    { name: "Explore", lin: "/" },
    { name: "Courses", lin: "/" },
    { name: "Contact us", lin: "/" },
  ];
  return (
    <>
      <Wrapper>
        <div>
          <header
            className="py-2 md:h-[100px] px-5 md:flex md:justify-around md:items-center 
          font-fn md:bg-primary text-white  sticky top-0"
          >
            {/* Logo */}
            <div className=" bg-primary">
              <Image
                src={logo}
                alt={"Panaverse Dao Logo"}
                width={"139"}
                height={"70"}
              ></Image>
            </div>
            <div
              onClick={() => change}
              className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
            >
              {val ? <AiOutlineMenu /> : <AiOutlineClose />}
            </div>

            {/* Menu */}
            <ul
              className={`bg-white/50 absolute pl-10 mt-[30px] m-3 z-[-1] left-0 w-full py-10  
              md:static md:p-0 md:pl-[450px] md:z-auto  md:w-auto md:bg-primary md:flex md:gap-10 
              md:pb-0 transition-all duration-500 ease-in ${
                val ? "top-20 " : "top-[-490px]"
              }`}
            >
              {links.map((L) => (
                <li
                  key={L.lin}
                  className="hover:text-secondry-100 cursor-pointer py-2  "
                >
                  <Link href={L.lin} className={"menu"}></Link>
                  {L.name}
                </li>
              ))}
            </ul>
            {/* Button */}
            <div className="md:mr-3 hidden md:flex md:mt-3">
              <Button text={"Apply Now"} />
            </div>
          </header>
        </div>
      </Wrapper>
    </>
  );
}
