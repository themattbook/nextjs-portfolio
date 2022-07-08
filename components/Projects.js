import React from "react";

export default function Projects() {
  return (
    <>
      <div className="mx-auto overflow-hidden rounded-lg mb-3 sm:mb-0 shadow-md bg-black dark:bg-gray-800">
        <div className="p-6">
          <div>
            <span className="text-xs font-medium text-sky-500 uppercase">
              Company Name
            </span>
            <span className="block mt-2 text-2xl font-semibold text-gray-300 tracking-tight transition duration-300 transform hover:text-sky-600 hover:pl-3">
              Job Title
            </span>
            <span className="block mt-2 text-2xl font-semibold text-gray-300 tracking-tight transition duration-300 transform hover:text-sky-600 hover:pl-3"></span>
            <p className="mt-2 text-sm text-gray-400 dark:text-gray-200">
              Job Description
            </p>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <span className="font-medium text-xs text-gray-500 dark:text-gray-300">
                Date
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
