import React from "react";
import { FaConnectdevelop } from "react-icons/fa6";
import game from "../../../Images/gameware.png";
import { Link } from "react-router-dom";
import { FaGlobeAmericas } from "react-icons/fa";
import logo1 from "../../../Images/companylogo1.png";
import logo2 from "../../../Images/company-logo2.png";
import logo3 from "../../../Images/company-logo3.png";
import logo4 from "../../../Images/company-logo4.png";
import logo5 from "../../../Images/company-logo5.png";
import { FaStethoscope } from "react-icons/fa";
import { BiSolidPieChartAlt2 } from "react-icons/bi";
import { FaRegComments } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa6";


export default function SectionFour() {
  return (
    <div className="SectionWrapper w-full h-[79rem] bg-pink mt-[5%]">
      <h2 className="text-black text-4xl pt-10 pb-4 ml-5 font-extrabold">
        Featured Job Offers
      </h2>
      <p className="text-black w-[45%] font-normal  ml-5 pb-8">
        Search your career opportunity 18,000 jobs
      </p>
      <div className="jobWrapper flex flex-wrap mr-[4rem] ml-[6rem] ">
        <div className="jobCardWrapper w-[22rem]  ">
          <Link>
            <div class="max-w-sm p-6 b border shadow-xl bg-white h-[17rem] rounded-3xl">
              <div className="">
                <FaChartLine className="ml-[2.5rem] w-[1.5rem] h-[2rem]" />
                <h2
                  className="text-gray-400  text-normal  mt-[-1.7rem]
                 ml-[7rem] pb-2"
                >
                  Finance
                </h2>
                <h3 className="text-black font-bold texl-xl text-center pb-4">
                  Financal Analyst
                </h3>

                <div className="location-list text-center pb-2 pt-5">
                  <ul className="list-none flex flex-wrap ml-[1rem] ">
                    <li>
                      <Link to="/loc" className="text-black font-bold">
                        San Diego, CA
                      </Link>
                    </li>
                    <li className="ml-[4rem] font-normal text-gray">
                      Full time
                    </li>
                  </ul>
                </div>
                <p className="pt-[9%] ml-[5%] font-thin text-gray-700">
                  June 8, 2024
                </p>
                <h3 className="ml-[5%] text-black font-medium">Gameware</h3>

                <img
                  src={game}
                  className="float-right rounded-3xl w-[20%] mt-[-15%]"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="jobCardWrapper w-[22rem] ml-4 mr-4">
          <div class="max-w-sm p-6 b border shadow-xl bg-white h-[17rem] rounded-3xl">
            <div className="">
              <BiSolidPieChartAlt2 className="ml-[2.5rem] w-[1.5rem] h-[2rem]" />
              <h2
                className="text-gray-400  text-normal  mt-[-1.7rem]
                 ml-[7rem] pb-2"
              >
                Business Development
              </h2>
              <h3 className="text-black font-bold texl-xl text-center pb-4">
                Technical Writer
              </h3>

              <div className="location-list text-center pb-2 pt-5">
                <ul className="list-none flex flex-wrap ml-[1rem] ">
                  <li>
                    <Link to="/loc" className="text-black font-bold">
                      Los Angeles,CA
                    </Link>
                  </li>
                  <li className="ml-[4rem] font-normal text-gray">Part time</li>
                </ul>
              </div>
              <p className="pt-[9%] ml-[5%] font-thin text-gray-700">
                June 5, 2024
              </p>
              <h3 className="ml-[5%] text-black font-medium">Craftgenics</h3>

              <img
                src={logo4}
                className="float-right rounded-3xl w-[20%] mt-[-15%]"
              />
            </div>
          </div>
        </div>
        <div className="jobCardWrapper w-[22rem]  ">
          <div
            class="max-w-sm p-6 b border   
             shadow-xl bg-white h-[17rem] rounded-3xl"
          >
            <div className="">
              <FaRegComments className="ml-[2.5rem] w-[1.5rem] h-[2rem]" />
              <h2 className="text-gray-400 text-normal mt-[-1.7rem] ml-[7rem] pb-2">
                Customer Services
              </h2>
              <h3 className="text-black font-bold texl-xl text-center pb-4">
                Technical Support Engineer
              </h3>

              <div className="location-list text-center pb-2 pt-5">
                <ul className="list-none flex flex-wrap ml-[1rem] ">
                  <li>
                    <Link to="/loc" className="text-black font-bold">
                      San Diego, CA
                    </Link>
                  </li>
                  <li className="ml-[4rem] font-normal text-gray">Full time</li>
                </ul>
              </div>
              <p className="pt-[9%] ml-[5%] font-thin text-gray-700">
                May 7, 2024
              </p>
              <h3 className="ml-[5%] text-black font-medium">
                illuminate studio
              </h3>

              <img
                src={logo5}
                className="float-right rounded-3xl w-[20%] mt-[-15%]"
              />
            </div>
          </div>
        </div>

        <div className="jobCardWrapper w-[22rem] mt-[5%]  ">
          <div class="max-w-sm p-6 b border shadow-xl bg-white h-[17rem] rounded-3xl">
            <div className="">
              <FaRegAddressCard className="ml-[2.5rem] w-[1.5rem] h-[2rem]" />
              <h2 className="text-gray-400 text-normal mt-[-1.7rem] ml-[7rem]">
                Human Resources
              </h2>
              <h3 className="text-black font-bold texl-xl text-center pb-4">
                Human Resource Coordinator
              </h3>

              <div className="location-list text-center pb-2 pt-5">
                <ul className="list-none flex flex-wrap ml-[1rem] ">
                  <li>
                    <Link to="/loc" className="text-black font-bold">
                      San Diego, CA
                    </Link>
                  </li>
                  <li className="ml-[4rem] font-normal text-gray">
                    Internship
                  </li>
                </ul>
              </div>
              <p className="pt-[9%] ml-[5%] font-thin text-gray-700">
                June 1, 2024
              </p>
              <h3 className="ml-[5%] text-black font-medium">DataRes</h3>

              <img
                src={logo3}
                className="float-right rounded-3xl w-[20%] mt-[-15%]"
              />
            </div>
          </div>
        </div>
        <div className="jobCardWrapper w-[22rem] mt-[5%] ml-4 mr-4">
          <div class="max-w-sm p-6 b border shadow-xl bg-white h-[17rem] rounded-3xl">
            <div className="">
              <FaTerminal className="ml-[2.5rem] w-[1.5rem] h-[2rem]" />
              <h2
                className="text-gray-400  text-normal  mt-[-1.7rem]
                 ml-[7rem]"
              >
                Software Engineering
              </h2>
              <h3 className="text-black font-bold texl-xl text-center pb-4">
                Full Stack Developer
              </h3>

              <div className="location-list text-center pb-2 pt-5">
                <ul className="list-none flex flex-wrap ml-[1rem] ">
                  <li>
                    <Link to="/loc" className="text-black font-bold">
                      San Diego, CA
                    </Link>
                  </li>
                  <li className="ml-[4rem] font-normal text-gray">Full time</li>
                </ul>
              </div>
              <p className="pt-[9%] ml-[5%] font-thin text-gray-700">
                June 8, 2024
              </p>
              <h3 className="ml-[5%] text-black font-medium">Syspresoft</h3>

              <img
                src={logo2}
                className="float-right rounded-3xl w-[20%] mt-[-15%]"
              />
            </div>
          </div>
        </div>
        <div className="jobCardWrapper w-[22rem] mt-[5%]  ">
          <div class="max-w-sm p-6 b border shadow-xl bg-white h-[17rem] rounded-3xl">
            <div className="">
              <FaRegCalendar className="ml-[2.5rem] w-[1.5rem] h-[2rem]" />
              <h2 className="text-gray-400  text-normal  mt-[-1.7rem] ml-[7rem]">
                Project Managment
              </h2>
              <h3 className="text-black font-bold texl-xl text-center pb-4">
                Software Engineering Team Lead
              </h3>

              <div className="location-list text-center pb-2 pt-5">
                <ul className="list-none flex flex-wrap ml-[1rem] ">
                  <li>
                    <Link to="/loc" className="text-black font-bold">
                      San Diego, CA
                    </Link>
                  </li>
                  <li className="ml-[4rem] font-normal text-gray">Full time</li>
                </ul>
              </div>
              <p className="pt-[9%] ml-[5%] font-thin text-gray-700">
                June 8, 2024
              </p>
              <h3 className="ml-[5%] text-black font-medium">Craftgenics</h3>

              <img
                src={logo4}
                className="float-right rounded-3xl w-[20%] mt-[-15%]"
              />
            </div>
          </div>
        </div>

        <div className="jobCardWrapper w-[22rem] mt-[5%] ">
          <div class="max-w-sm p-6 b border shadow-xl bg-white h-[17rem] rounded-3xl">
            <div className="">
              <FaChartLine className="ml-[2.5rem] w-[1.5rem] h-[2rem]" />
              <h2
                className="text-gray-400  text-normal  mt-[-1.7rem]
                 ml-[7rem]"
              >
                Finance
              </h2>
              <h3 className="text-black font-bold texl-xl text-center pb-4">
                Financal Analyst
              </h3>
              <div className="location-list text-center pb-2 pt-5">
                <ul className="list-none flex flex-wrap ml-[1rem] ">
                  <li>
                    <Link to="/loc" className="text-black font-bold">
                      San Diego, CA
                    </Link>
                  </li>
                  <li className="ml-[4rem] font-normal text-gray">Full time</li>
                </ul>
              </div>
              <p className="pt-[9%] ml-[5%] font-thin text-gray-700">
                June 8, 2024
              </p>
              <h3 className="ml-[5%] text-black font-medium">
                Artistre Studio
              </h3>
              <img
                src={logo1}
                className="float-right rounded-3xl w-[20%] mt-[-15%]"
              />
            </div>
          </div>
        </div>
        
      </div>
      <div className="btnjoboffer mt-[5%] ml-[7%]">
            <button>
            <Link to='/' className='text-white font-extrabold 
            bg-[#0969c3] px-8 py-3 rounded-3xl
            hover:bg-[#002746] hover:pr-[3rem]'>
              All Job Offers 
            </Link>
            </button>
          </div>
    </div>
  );
}
