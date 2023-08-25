import React from "react";
import { Link } from "react-scroll";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsClipboardData } from "react-icons/bs";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2x rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50">
          <Link className="cursor-pointer w-[60px] h-[90px] flex items-center justify-center">
            <BiHomeAlt />
          </Link>
          <Link className="cursor-pointer w-[60px] h-[90px] flex items-center justify-center">
            <BiUser />
          </Link>
          <Link className="cursor-pointer w-[60px] h-[90px] flex items-center justify-center">
            <BsClipboardData />
          </Link>
          <Link className="cursor-pointer w-[60px] h-[90px] flex items-center justify-center">
            <BsBriefcase />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;