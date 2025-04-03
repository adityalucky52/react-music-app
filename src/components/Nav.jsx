import React from "react";
import { TiHome } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { RiPlayListLine } from "react-icons/ri";
import { IoMdHeart } from "react-icons/io";
import { Link } from "react-router-dom";

function Nav() {
   return (
      <div className="w-full h-[100px] bg-black fixed bottom-0 md:top-0 text-white flex justify-around md:justify-center items-center gap-[50px] p-[10px]">
         <TiHome className="w-[28px] h-[28px]" />

         <IoSearch className="w-[28px] h-[28px]" />

         <RiPlayListLine className="w-[228x] h-[28px]" />

         <IoMdHeart className="w-[28px] h-[28px]" />
      </div>
   );
}
export default Nav;
