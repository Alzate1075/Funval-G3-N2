import React from "react";

export function TeamCard(props) {
  return (
    <div className={`${props.extraClass}`}>
      <div className="text-black md:text-white md:flex md:items-start md:justify-start relative">
        <img
          src={props.image}
          alt={props.name}
          className="md:w-[200px] w-20 rounded"
        />
        {/* SOLO el rol al lado derecho, sin afectar el nombre */}
        <span className="absolute md:left-[220px] left-24 md:top-4 top-2 text-[10px] md:text-[13px]">
          {props.role}
        </span>
      </div>

      {/* Nombre centrado debajo sin cambios */}
      <div className="md:text-white text-center mt-1">
        <h3 className="font-semibold text-[12px] md:text-[15px]">
          {props.name}
        </h3>
      </div>
    </div>
  );
}
