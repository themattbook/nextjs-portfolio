import React from "react";
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
            description="Javascript is my passion in life. Full-Stack Development with Javascript is a satisfying and rewarding experience. It is by far my favorite language."
          />
          <TechCard
            background="pinkish"
            title="CSS"
            icon="fa-brands fa-css3"
            iconColor="pinkish-icon"
            description="CSS3, Sass, Tailwindcss, Bulma, Bootstrap, and more. All of these technologies have brought me hours of design bliss."
          />
          <TechCard
            background="bluey"
            title="react"
            icon="fa-brands fa-react"
            iconColor="bluey-icon"
            description="React is by far the best Full-Stack framework available. Nextjs and Alpine are responsible for many of the apps I've developed to this day."
          />
          <TechCard
            background="greeny"
            title="vue"
            icon="fa-brands fa-vuejs"
            iconColor="greeny-icon"
            description="I enjoy Vuejs for its simplicity and ease-of-use. I have several examples of SPA apps on my Codepen. My first experience with a Javascript framework was thanks to Vue2"
          />
        </div>
      </div>
    </>
  );
}
