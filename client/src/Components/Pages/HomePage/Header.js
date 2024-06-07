import React from "react";
import { LuNetwork } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav class="bg-white border-gray-200 bg-blue">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <LuNetwork color="white" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              PreConnect
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white bg-blue md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/#"
                  class="block py-2 px-3 text-white rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-white-500 underline decoration-[#002746] hover:decoration-[#fff] font-bold"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  to="/blogs"
                  class="font-bold block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent underline decoration-[#002746] hover:decoration-[#fff]"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/featuredjobs"
                  class="font-bold block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent underline decoration-[#002746] hover:decoration-[#fff]"
                >
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/companies"
                  class=" font-bold block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent underline decoration-[#002746] hover:decoration-[#fff]"
                >
                  Companies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
