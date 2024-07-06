import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para,hover="none"}) {
  return (
    <div className={`bg-zinc-400 p-2 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between hover:${hover}`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h1>One heading</h1>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">Whatever heading.</h1>
      </div>
      <div className="down w-full">
        {start === true && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start a project
            </h1>
            <button className="rounded-full py-2 px-5 border-[1px] border-zinc-50 mt-5">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium mt-5">
            This is a ract project created
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
