import React from "react";

interface ButtonAnimationProps {
  props: string;
}

export default function ButtonAnimation({ props }: ButtonAnimationProps) {
  return (
    <button className="border-[#971B1D] border-2 relative group px-3 py-1">
      <h3 className="group-hover:text-black text-white z-50">{props}</h3>
      <div className="absolute top-0 left-0 group-hover:w-0 transition-all duration-300  primary-color w-1/2 h-full -z-10"></div>
      <div className="absolute top-0 right-0 group-hover:w-0 transition-all duration-300   primary-color w-1/2 h-full -z-10"></div>
    </button>
  );
}
