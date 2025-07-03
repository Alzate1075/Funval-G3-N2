import React from "react";
export function TeamCard(props) {
  return (
    <div className={`${props.extraClass}`}>
      <div className="text-black md:text-white md:flex md:items-center md:justify-center gap-4 relative mx-6">
        <img src={props.image} alt={props.name} className="md:w-[200px] w-25" />
        <span className="absolute rotate-90 text-[10px] top-3 md:top-4 md:text-[14px] md:ml-60">
          {props.role}
        </span>
      </div>
      <div className="md:text-white text-center mt-1 md:flex md:justify-star pl-4">
        <h3 className="font-semibold text-[12px] md:text-[15px]">
          {props.name}
        </h3>
      </div>
    </div>
  );
}
