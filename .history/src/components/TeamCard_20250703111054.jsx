import React from "react";
export function TeamCard(props) {
  return (
    <div className={`${props.extraClass}`}>
      <div className="text-black md:text-white md:flex md:items-center md:justify-center gap-2 relative">
        <img src={props.image} alt={props.name} className="md:w-[200px] w-20" />
        <span className="absolute right-0 top-1/2 -translate-y-10 rotate-90 origin-left text-[10px] md:text-[13px]">
          {props.role}
        </span>
      </div>
      <div className="md:text-white text-center mt-1 flex justify-star pl-4">
        <h3 className="font-semibold text-[12px] md:text-[15px]">
          {props.name}
        </h3>
      </div>
    </div>
  );
}
