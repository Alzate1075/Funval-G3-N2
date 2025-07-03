import React from "react";
import { TeamCard } from "./components/TeamCard";
import miArray from "./components/ArrayTeams";

function App() {
  return (
    <div className="md:bg-[#111827] p-2 md:mx-70">
      <div>
        <img src="/images/sol.png" alt="sol" className="w-8 justify-end" />
      </div>
      <div>
        <img
          src="/images/luna.png"
          alt="luna"
          className="w-8 justify-start md:hidden"
        />
      </div>
      <div className="md:text-white text-black text-center md:flex md:justify-between md:mx-12">
        <h1 className="text-3xl font-bold">The creative crew</h1>
        <p className="text-[15px] mt-2 max-w-md md:text-md text-wrap text-left m-5">
          <b>Who we are</b>
          <br />
          We are team of creatively diverse, driven, <br /> innovative
          individuals working in various <br /> locations from the world.
        </p>
      </div>

      <div className="md:bg-[#111827] grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 p-4">
        {miArray.map((persona, index) => (
          <TeamCard
            key={index}
            name={persona.name}
            role={persona.role}
            image={persona.image}
            extraClass={index % 3 === 1 ? "mt-16" : ""}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

function App() {
  return (
    <div>
      <h1 style={{ color: "red" }}>¿Me ves?</h1>
    </div>
  );
}

export default App;
