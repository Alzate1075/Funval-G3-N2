import React from "react";

export function TeamCard(props) {
  return (
    <div className={`${props.extraClass} relative`}>
      <div className="text-black md:text-white md:flex md:items-start md:justify-start gap-2 relative">
        <img
          src={props.image}
          alt={props.name}
          className="md:w-[200px] w-20 rounded"
        />
        {/* Solo el ROL al lado derecho */}
        <span className="absolute md:left-[210px] left-24 md:top-3 top-2 text-[10px] md:text-[13px]">
          {props.role}
        </span>
      </div>

      {/* Nombre debajo de la imagen */}
      <div className="md:text-white text-center mt-1">
        <h3 className="font-semibold text-[12px] md:text-[15px]">
          {props.name}
        </h3>
      </div>
    </div>
  );
}
