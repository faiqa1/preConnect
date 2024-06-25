import React from "react";
import { NavLink } from "react-router-dom";
import { LuNetwork } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingBag } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoDocument } from "react-icons/io5";

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
        <nav class="  bg-lightblue">
          <div class="max-w-screen-xl px-4 py-1 mx-auto">
            <div class="flex items-center justify-center">
              <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                  <NavLink to="/userhomepage" className=" active dark:bg-gray-800 ">
                    <div className="navitemwrapper active">
                      <div
                        className="w-[3rem] h-[2rem]
                     flex mx-auto
                     justify-center iconwrapper  items-center"
                      >
                        <FaHome className="w-[3rem] h-[1.5rem]" fill="black" />
                      </div>
                      <div
                        class="text-black text-lg font-semibold"
                      >
                        Home
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/job">
                    <div className="navitemwrapper">
                      <div
                        className="
                    w-[2rem] h-[2rem]
                    flex mx-auto
                    justify-center iconwrapper  items-center"
                      >
                        <FaShoppingBag
                          className="w-[2rem] h-[1.5rem]"
                          fill="black"
                        />
                      </div>
                      <div class="text-black text-lg font-semibold">
                          Jobs
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects">
                    <div className="navitemwrapper">
                      <div
                        className="w-[2rem] h-[2rem]
                     flex mx-auto
                     justify-center iconwrapper  items-center"
                      >
                        <IoDocument
                          className="w-[2rem] h-[1.5rem]"
                          fill="black"
                        />
                      </div>
                      <div  class="text-black text-lg font-semibold">
                          Projects
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/notification">
                    <div className="navitemwrapper">
                      <div
                        className="w-[2rem] h-[2rem]
                     flex mx-auto
                     justify-center iconwrapper  items-center"
                      >
                        <IoMdNotifications
                          className="w-[2rem] h-[2rem]"
                          fill="black"
                        />
                      </div>
                      <div class="text-black text-lg font-semibold">
                          Notifications
                      </div>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
