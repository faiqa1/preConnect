import React from "react";
import { LuNetwork } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function UserHeader() {
  return (
    <div>
      <div className="userHeaderWrapper">
        <nav class="bg-[#002746]">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <Link
              href="https://flowbite.com/"
              class="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <LuNetwork color="white" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                PreConnect
              </span>
            </Link>
            <div class="flex items-center space-x-6 rtl:space-x-reverse">
            
              <a
                href="#"
                class="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
              >
                Login
              </a>
            </div>
          </div>
        </nav>
        <nav class="  bg-[#0969c3]">
          <div class="max-w-screen-xl px-4 py-3 mx-auto">
            <div class="flex items-center justify-center">
              <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                  <Link
                    to="#"
                    class="text-gray-900 text-lg font-semibold dark:text-white hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    class="text-gray-900
                    text-lg font-semibold dark:text-white hover:underline"
                  >
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    class="text-gray-900 text-lg font-semibold dark:text-white hover:underline"
                  >
                    Notifications
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    class="text-gray-900 text-lg font-semibold dark:text-white hover:underline"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
