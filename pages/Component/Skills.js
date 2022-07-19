import React from "react";

const SkillsCard = (props) => {
  return (
    <>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
            {props.name}
          </h2>
          <p className="leading-relaxed text-base">{props.desc}</p>
        </div>
      </div>
    </>
  );
};

const Skills = () => {
  return (
    <>
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            The most creative intuitive workmate.
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <SkillsCard
            name="Gaurav"
            desc="Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm"
          />
          <SkillsCard
            name="Gaurav"
            desc="Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm"
          />{" "}
          <SkillsCard
            name="Gaurav"
            desc="Fingerstache flexitarian street art 8-bit waist co, subway tile
              poke farm"
          />{" "}
          <SkillsCard
            name="Gaurav"
            desc="Fingerstache flexitarian street art 8-bit waist co, subway tile
            poke farm"
          />{" "}
          <SkillsCard
            name="Gaurav"
            desc="Fingerstache flexitarian street art 8-bit waist co, subway tile
          poke farm"
          />{" "}
          <SkillsCard
            name="Gaurav"
            desc="Fingerstache flexitarian street art 8-bit waist co, subway tile
              poke farm"
          />
        </div>
        <button className="flex mx-auto mt-16 primaryBtn   py-2 px-8   rounded text-lg">
          Let's Work
        </button>
      </div>
    </>
  );
};

export default Skills;
