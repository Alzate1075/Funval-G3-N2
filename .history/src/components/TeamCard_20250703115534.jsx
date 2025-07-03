import React from "react";
export function TeamCard(props) {
  let espaciado = "";
  if (props.index % 2 === 1) espaciado += " mt-6";
  if (props.index % 3 === 1) espaciado += " md:mt-10";
  return (
    <div className={`${props.espaciado}`}>
      <div className="text-black md:text-white md:flex md:items-center md:justify-center gap-4 relative mx-6">
        <img src={props.image} alt={props.name} className="md:w-[200px] w-25" />
        <span className="absolute rotate-90 text-[10px] top-8 md:text-[12px] md:ml-55 ml-12 min-w-[80px]">
          {props.role}
        </span>
      </div>
      <div className="md:text-white text-center mt-1 md:flex md:justify-star md:pl-6">
        <h3 className="font-semibold text-[12px] md:text-[15px]">
          {props.name}
        </h3>
      </div>
    </div>
  );
}
