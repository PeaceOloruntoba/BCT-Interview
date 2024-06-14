import React from "react";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-300 text-black h-screen flex items-center justify-center text-[40px] font-bold">
      <div className="flex flex-col items-center justify-center">
        <span>Peace Oloruntoba</span>
        <span>Software Engineer</span>
        <span className="text-[24px]">I like food!</span>
        <div className="flex items-center justify-center gap-4 text-[14px]">
          <a href="">twitter</a>
          <a href="">github</a>
          <a href="">instagram</a>
        </div>
      </div>
    </div>
  );
}
