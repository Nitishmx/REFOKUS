import React from "react";

function Marqueen({image}) {
  return (
    <div className="max-w-72 border-b-2 border-l-2 border-r-2 border-zinc-600 p-4 border-t-2 flex justify-between items-center w-[16.66%] mt-10">
      <img src={image.url}></img>
    </div>
  );
}

export default Marqueen;
