import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaStethoscope } from "react-icons/fa";
import { BiSolidPieChartAlt2 } from "react-icons/bi";
import { FaCubes } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa6";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function JobCategory() {
  return (
    <div className="mlr-auto">
      <h2 className="text-black font-bold text-3xl text-center mb-4">
        Search by Category
      </h2>
      <p className="text-gray-500 text-xl text-center">
        Search your career opportunity with our categories
      </p>
      <button className="float-right mr-[10%] text-blue-600 font-bold">
        All Categories
      </button>
      <div className="carouselWrapper mt-[5%] mb-[5%] ">
        <Carousel
          responsive={responsive}
          autoPlay={false}
          autoPlayInterval={2000}
          showDots={true}
          className="mr-[4rem] ml-[6rem] "
        >
          <div className="jobCardWrapper w-[14rem]  ">
            <div class="max-w-sm p-6 bg-white border h-18  
            bgcarouselhover shadow bgCard h-[18rem] rounded-3xl">
              <div
                className="w-[6rem] h-[7rem] bg-white p-[2rem]
                 rounded-3xl ml-[1.5rem] iconwrapper"
              >
                <FaStethoscope className="ml-[-1.5rem] w-[5rem] h-[2rem]" />
              </div>
              <p class="mb-3 mt-3 text-center text-black-800 text-normal font-bold">Healthcare</p>
              <h4 className="mb-3 mt-3 text-center text-black-800 font-normal">0 Open Positions</h4>
            </div>
          </div>
          <div className="jobCardWrapper w-[14rem]  ">
            <div class="max-w-sm p-6
             bgcarouselhover  bg-white border h-18  shadow bgCard h-[18rem] rounded-3xl">
              <div
                className="w-[6rem] h-[7rem] bg-white p-[2rem]
                 rounded-3xl ml-[1.5rem] iconwrapper"
              >
                <BiSolidPieChartAlt2 className="ml-[-1.5rem] w-[5rem] h-[2rem]"/>
              </div>
              <p class="mb-3 mt-3 text-center text-black-800 text-normal font-bold">Business Development</p>
              <h4 className="mb-3 mt-3 text-center text-black-800 font-normal">2 Open Positions</h4>
            </div>
          </div>
          <div className="jobCardWrapper w-[14rem]  ">
            <div class="max-w-sm p-6 bg-white border h-18 
             bgcarouselhover shadow bgCard h-[18rem] rounded-3xl">
              <div
                className="w-[6rem] h-[7rem] bg-white p-[2rem]
                 rounded-3xl ml-[1.5rem] iconwrapper"
              >

                <FaCubes  className="ml-[-1.5rem] w-[5rem] h-[2rem]" />
              </div>
              <p class="mb-3 mt-3 text-center text-black-800 text-normal font-bold">Construction</p>
              <h4 className="mb-3 mt-3 text-center text-black-800 font-normal">1 Open Positions</h4>
            </div>
          </div>
          <div className="jobCardWrapper w-[14rem]  ">
            <div class="max-w-sm p-6 bg-white border h-18   bgcarouselhover shadow bgCard h-[18rem] rounded-3xl">
              <div
                className="w-[6rem] h-[7rem] bg-white p-[2rem]
                 rounded-3xl ml-[1.5rem] iconwrapper"
              >
                <FaRegComments  className="ml-[-1.5rem] w-[5rem] h-[2rem]" />
              </div>
              <p class="mb-3 mt-3 text-center text-black-800 text-normal font-bold">Custom Services</p>
              <h4 className="mb-3 mt-3 text-center text-black-800 font-normal">1 Open Positions</h4>
            </div>
          </div>
          <div className="jobCardWrapper w-[14rem]  ">
            <div class="max-w-sm p-6 bg-white border h-18
             bgcarouselhover  shadow bgCard h-[18rem] rounded-3xl">
              <div
                className="w-[6rem] h-[7rem] bg-white p-[2rem]
                 rounded-3xl ml-[1.5rem] iconwrapper"
              >
                <FaChartLine className="ml-[-1.5rem] w-[5rem] h-[2rem]" />
              </div>
              <p class="mb-3 mt-3 text-center text-black-800 text-normal font-bold">Finance</p>
              <h4 className="mb-3 mt-3 text-center text-black-800 font-normal">7 Open Positions</h4>
            </div>
          </div>
          <div className="jobCardWrapper w-[14rem]  ">
            <div class="max-w-sm p-6 bg-white border h-18  bgcarouselhover shadow bgCard h-[18rem] rounded-3xl">
              <div
                className="w-[6rem] h-[7rem] bg-white p-[2rem]
                 rounded-3xl ml-[1.5rem] iconwrapper"
              >
                <FaRegAddressCard  className="ml-[-1.5rem] w-[5rem] h-[2rem]" />
              </div>
              <p class="mb-3 mt-3 text-center text-black-800 text-normal font-bold">Human Resources</p>
              <h4 className="mb-3 mt-3 text-center text-black-800 font-normal">2 Open Positions</h4>
            </div>
          </div>
          <div className="jobCardWrapper w-[14rem]  ">
            <div class="max-w-sm p-6 bg-white border h-18  shadow 
             bgcarouselhover bgCard h-[18rem] rounded-3xl">
              <div
                className="w-[6rem] h-[7rem] bg-white p-[2rem]
                 rounded-3xl ml-[1.5rem] iconwrapper"
              >
                <FaRegCalendar  className="ml-[-1.5rem] w-[5rem] h-[2rem]" />
              </div>
              <p class="mb-3 mt-3 text-center text-black-800 text-normal font-bold">Project Management</p>
              <h4 className="mb-3 mt-3 text-center text-black-800 font-normal">3 Open Positions</h4>
            </div>
          </div>
          <div className="jobCardWrapper w-[14rem]  ">
            <div class="max-w-sm p-6 bg-white border h-18   bgcarouselhover shadow bgCard h-[18rem] rounded-3xl">
              <div
                className="w-[6rem] h-[7rem] bg-white p-[2rem]
                 rounded-3xl ml-[1.5rem] iconwrapper"
              >
                <FaTerminal   className="ml-[-1.5rem] w-[5rem] h-[2rem]" />
              </div>
              <p class="mb-3 mt-3 text-center text-black-800 text-normal font-bold">Software Engineering</p>
              <h4 className="mb-3 mt-3 text-center text-black-800 font-normal">20 Open Positions</h4>
            </div>
          </div>
          
        </Carousel>
      </div>
    </div>
  );
}
