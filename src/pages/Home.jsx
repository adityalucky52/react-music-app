import React from "react";
import { songsData } from "../songs";
import musicimg from "../assets/musicanim.webp";

function Home() {
   return (
      <div className="w-full h-screen bg-black flex ">
         <div
            className="w-full md:w-[50%] h-full  flex justify-start items-center
         pt-[120px] flex-col gap-[30px]"
         >
            <h1 className="text-white font-semibold text-[20px]">
               Now playing
            </h1>
            <div className="w-80% md:w-[300px] h-300px object-fill rounded-md overflow-hidden relative">
               <img src={songsData[0].image} alt="" />
               <div className="w-full h-full bg-black absolute top-0 opacity-[0.5] flex justify-center items-center">
                  <img src={musicimg} alt="" className="w-[50%]" />
               </div>
            </div>
            <div>
               <div className="text-white text-[30px] font-bold">
                  {songsData[0].name}
               </div>
               <div className=" text-gray-400 text-[18px] text-center ">
                  {songsData[0].singer}
               </div>
            </div>
            <div className="w-full flex justify-center items-center">
               <input
                  type="range"
                  className="appearance-none w-[50%] h-[7px] rounded-md bg-gray-600"
               />
            </div>
         </div>
         <div className="w-[50%] h-full bg-slate-800 hidden md:flex"></div>
      </div>
   );
}

export default Home;
