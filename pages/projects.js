import React from "react";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div className="flex flex-1 items-center justify-center sm:mx-auto">
        <div className="sm:grid sm:grid-cols-1 xl:grid-cols-3 gap-5 2xl:gap-10 w-[70%]">
          <div
            className={`p-1 text-zinc-900 w-full sm:max-w-xl text-center mb-4 sm:text-left sm:mb-0 bg-zinc-900 text-gray-300 duration-300 select-none animate-fade-in`}
          >
            <a
              href="https://nextjs-todo-list-nine.vercel.app/"
              target="_blank"
              rel="noreferrer"
            ></a>
            <div className="flex text-xs sm:text-sm tracking-tight">
              <div className="flex items-center justify-center text-7xl sm:text-[10ch] lg:text-[20ch] 2xl:text-[25ch] bg-zinc-900 w-full border border-gray-300">
                <img
                  src="/images/toodue.png"
                  className="w-full"
                  alt="todo app"
                />
              </div>
            </div>
            <div className="mt-2 sm:mt-5 max-w-2xl xl:py-4 mb-2 sm:mb-6">
              <div>
                <h3 className="font-extrabold tracking-tight text-3xl sm:text-4xl 2xl:text-[4em] sm:mb-4 uppercase">
                  Todo App
                </h3>
                <p className="text-sm font-medium tracking-tight mt-2 sm:mt-8 opacity-60">
                  Next.js, Tailwindcss, Firebase
                </p>
                <p className="text-sm font-medium tracking-tight mt-2 sm:mt-8">
                  This application uses Nextjs and Firebase to give users a
                  persistent todo list that can be accessed across devices.
                  Designed in Tailwindcss.
                </p>
                <div className="flex flex-1 justify-between sm:justify-start">
                  <p className="text-xs opacity-70 mt-5 sm:mr-5">
                    <a
                      href="https://nextjs-todo-list-nine.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Demo
                    </a>
                  </p>
                  <p className="text-xs opacity-70 mt-5">
                    <a
                      href="https://github.com/themattbook/nextjs-todo-list"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on Github
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`p-1 text-zinc-900 w-full sm:max-w-xl text-center mb-4 sm:text-left sm:mb-0 bg-zinc-900 text-gray-300 duration-300 select-none animate-fade-in`}
          >
            <div className="flex text-xs sm:text-sm tracking-tight">
              <div className="flex items-center justify-center text-7xl sm:text-[10ch] lg:text-[20ch] 2xl:text-[25ch] bg-zinc-900 w-full border border-gray-300">
                <img
                  src="/images/portfolio.png"
                  className="w-full"
                  alt="todo app"
                />
              </div>
            </div>
            <div className="mt-2 sm:mt-5 max-w-2xl xl:py-4 mb-2 sm:mb-6">
              <div>
                <h3 className="font-extrabold tracking-tight text-3xl sm:text-4xl 2xl:text-[4em] sm:mb-4 uppercase">
                  Portfolio
                </h3>
                <p className="text-sm font-medium tracking-tight mt-2 sm:mt-8 opacity-60">
                  Next.js, Tailwindcss
                </p>
                <p className="text-sm font-medium tracking-tight mt-2 sm:mt-8">
                  My personal portfolio, aka this website. A masterpiece of
                  simplicity and modern design thanks to inspiration from Swiss
                  humanists and Tailwindcss. Nextjs, btw.
                </p>
                <div className="flex flex-1 justify-between sm:justify-start">
                  <p className="text-xs opacity-70 mt-5 sm:mr-5">
                    <a
                      href="https://meetmattsweet.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Demo
                    </a>
                  </p>
                  <p className="text-xs opacity-70 mt-5">
                    <a
                      href="https://github.com/themattbook/nextjs-portfolio"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on Github
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`p-1 text-zinc-900 w-full sm:max-w-xl text-center mb-4 sm:text-left sm:mb-0 bg-zinc-900 text-gray-300 duration-300 select-none animate-fade-in`}
          >
            <div className="flex text-xs sm:text-sm tracking-tight">
              <div className="flex items-center justify-center text-7xl sm:text-[10ch] lg:text-[20ch] 2xl:text-[25ch] bg-zinc-900 w-full border border-gray-300">
                <img
                  src="/images/weather.png"
                  className="w-full"
                  alt="todo app"
                />
              </div>
            </div>
            <div className="mt-2 sm:mt-5 max-w-2xl xl:py-4 mb-2 sm:mb-6">
              <div>
                <h3 className="font-extrabold tracking-tight text-3xl sm:text-4xl 2xl:text-[4em] sm:mb-4 uppercase">
                  Weather
                </h3>
                <p className="text-sm font-medium tracking-tight mt-2 sm:mt-8 opacity-60">
                  Vue.js, Tailwindcss
                </p>
                <p className="text-sm font-medium tracking-tight mt-2 sm:mt-8">
                  This single-page Vue app utilizes your location to get your
                  local weather forecast. Automatically switches day/night mode
                  based on time of day.
                </p>
                <div className="flex flex-1 justify-between sm:justify-start">
                  <p className="text-xs opacity-70 mt-5 sm:mr-5">
                    <a
                      href="https://vue-weather-app-rho.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Demo
                    </a>
                  </p>
                  <p className="text-xs opacity-70 mt-5">
                    <a
                      href="https://github.com/themattbook/vue-weather-app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on Github
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
