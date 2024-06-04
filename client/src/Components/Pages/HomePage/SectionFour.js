import React from "react";
import { FaConnectdevelop } from "react-icons/fa6";

export default function SectionFour() {
  return (
    <div className="SectionWrapper w-full h-[500px] bg-pink mt-[5%]">
      <h2 className="text-black text-4xl pt-10 pb-1 font-bold ml-5">
        Featured Job Offers
      </h2>
      <p className="text-black w-[45%] pb-4 text-xl ml-5">
        Search your career opportunity 18,000 jobs
      </p>
      <div className="jobWrapper flex flex-wrap mr-[4rem] ml-[6rem] ">
      

        <div className="jobCard w-[320px] h-[258px] ml-5">
          <div class=" shadow-xl max-w-sm p-6
          rounded-3xl bg-white border border-gray-200  dark:bg-white dark:border-white">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-black">
                Software Engineering
                <FaConnectdevelop className="mt-[-9%] ml-[13rem]" />
              </h5>
            </a>
            <p class="mb-3 font-normal text-black-700 dark:text-black-400">
              Full Stack Web Developer
            </p>
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-black">
                Lahore, Pakistan
              </h5>
              <p>Full time</p>
            </a>
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">
                DevSolutions
              </h5>
            </a>
            <a href="#" >
              <h5 class="mb-2 text-xl font-bold tracking-tight text-black
              bg-blue-600 px-2 py-2 w-[50%] rounded-lg text-center">
                Apply now
              </h5>
            </a>
          </div>
        </div>
        <div className="jobCard w-[320px] h-[258px] ml-8 mr-8">
          <div class=" shadow-xl max-w-sm p-6 bg-white border
           border-gray-200 rounded-3xl  dark:bg-white dark:border-white">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-black">
                Software Engineering
                <FaConnectdevelop className="mt-[-9%] ml-[13rem]" />
              </h5>
            </a>
            <p class="mb-3 font-normal text-black-700 dark:text-black-400">
              Full Stack Web Developer
            </p>
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-black">
                Lahore, Pakistan
              </h5>
              <p>Full time</p>
            </a>
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">
                DevSolutions
              </h5>
            </a>
            <a href="#" >
              <h5 class="mb-2 text-xl font-bold tracking-tight text-black
              bg-blue-600 px-2 py-2 w-[50%] rounded-lg text-center">
                Apply now
              </h5>
            </a>
          </div>
        </div>
        <div className="jobCard w-[320px] h-[258px] ml-8 mr-8">
          <div class=" shadow-xl max-w-sm p-6 bg-white border
           border-gray-200 rounded-3xl  dark:bg-white dark:border-white">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-black">
                Software Engineering
                <FaConnectdevelop className="mt-[-9%] ml-[13rem]" />
              </h5>
            </a>
            <p class="mb-3 font-normal text-black-700 dark:text-black-400">
              Full Stack Web Developer
            </p>
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-black">
                Lahore, Pakistan
              </h5>
              <p>Full time</p>
            </a>
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">
                DevSolutions
              </h5>
            </a>
            <a href="#" >
              <h5 class="mb-2 text-xl font-bold tracking-tight text-black
              bg-blue-600 px-2 py-2 w-[50%] rounded-lg text-center">
                Apply now
              </h5>
            </a>
          </div>
        </div>
 
    
      </div>
    </div>
  );
}
