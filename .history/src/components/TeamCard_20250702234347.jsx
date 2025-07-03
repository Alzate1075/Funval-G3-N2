import React from "react";
export function TeamCard(props) {
  return (
    <div className={`md:mt-12 ${props.extraClass}`}>
      <div className="text-black md:text-white flex items-center justify-start gap-2 relative">
        <img src={props.image} alt={props.name} className="md:w-[200px] w-20" />

        <div className="flex flex-col items-start ml-2">
          <h3 className="font-semibold">{props.name}</h3>
          <span className="rotate-90 md:rotate-90 origin-left text-sm md:text-white text-black">
            {props.role}
          </span>
        </div>
      </div>
    </div>
  );
}

/* export function TeamCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.role}</p>
      <img src={props.image} alt={props.name} width="100" />
    </div>
  );
} */
