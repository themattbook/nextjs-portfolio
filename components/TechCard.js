import React from "react";

export default function TechCard(props) {
  return (
    <>
      <div
        className={`p-1 text-zinc-900 w-full sm:max-w-xl text-center mb-4 sm:text-left sm:mb-0 ${props.background} duration-300 select-none animate-fade-in`}
      >
        <div className="flex text-xs sm:text-sm tracking-tight">
          <div className="flex items-center justify-center p-6 text-7xl sm:text-[10ch] lg:text-[15ch] xl:text[20ch] 2xl:text-[25ch] bg-zinc-900 w-full min-h-[3ch]">
            <i className={`${props.icon} ${props.iconColor} text-center`}></i>
          </div>
        </div>
        <div className="mt-2 sm:mt-5 max-w-2xl px-1 sm:px-3 2xl:px-6 xl:py-4 mb-2 sm:mb-6">
          <div>
            <h3 className="font-extrabold tracking-tight text-4xl sm:text-[3.5em] md:text-[3.5em] lg:text-[3.5em] xl:text-[3em] 2xl:text-[3.8em] sm:mb-4 uppercase">
              {props.title}
            </h3>
            <p className="text-xs 2xl:text-sm font-medium lg:font-semibold tracking-tight mt-2 sm:mt-8">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
