import React from 'react'
import { Link } from "react-router-dom";
import san from '../../../Images/-san-francisco.png'

export default function FeaturedCities() {
  return (
    <div className='featuredCitiesWrapper my-20 ml-10'>
       <h2 className="text-black font-extrabold text-5xl">
       Featured Cities
      </h2>
      <p className="text-gray-500 py-5">
      Start your next carrer in a beautiful city
      </p>
      <div className='citiesCardWrapper'>
      <div className="jobCardWrapper w-[22rem]">
          <Link>
            <div class="max-w-sm p-6 b border shadow-xl bg-white h-[15rem] rounded-3xl">
              <div className="">
                <img src={san} className=" rounded-3xl w-[351px] mb-5 " />
                <div className="location-list text-center pb-2 pt-5">
                  <ul className="list-none flex flex-wrap ml-[1rem] ">
                  <li>
                      <Link
                        to="/loc"
                        className="text-black font-bold hover:text-blue-500"
                      >
                        San Francisco,CA
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/loc"
                        className="text-black font-bold hover:text-blue-500"
                      >
                        1 Job
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
