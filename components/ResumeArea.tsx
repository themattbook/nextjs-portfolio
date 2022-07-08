import React from "react";
import Link from "next/link";
import TechCard from "./TechCard";

export default function ResumeArea() {
  return (
    <>
      <div className="flex flex-1 items-center justify-center sm:mx-auto">
        <div className="sm:grid sm:grid-cols-1 xl:grid-cols-4 gap-5 w-[70%]">
          <TechCard
            background="amber"
            title="js"
            icon="fa-brands fa-js"
            iconColor="amber-icon"
            description="The first real language I ever loved was Javascript. Seeing that I could use it not only on the frontend, but on the backend as well ignited a whole new line of creativity that has brought me to where I am today."
          />
          <TechCard
            background="pinkish"
            title="CSS"
            icon="fa-brands fa-css3"
            iconColor="pinkish-icon"
            description="From vanilla CSS3 to robust frameworks like Tailwindcss and Bulma, I could spend hours designing new element ideas."
          />
          <TechCard
            background="bluey"
            title="react"
            icon="fa-brands fa-react"
            iconColor="bluey-icon"
            description="My favorite framework. There's something particularly satisfying about using creating reusable components. React-based frameworks like Nextjs are my goto for creating most web applications."
          />
          <TechCard
            background="greeny"
            title="vuejs"
            icon="fa-brands fa-vuejs"
            iconColor="greeny-icon"
            description="Vue was the first Javascript framework I learned after learning ES5. I found it easy to conceptualize how data can interact with the DOM thanks to the simplicity of Vue 2."
          />
        </div>
      </div>
    </>
  );
}
