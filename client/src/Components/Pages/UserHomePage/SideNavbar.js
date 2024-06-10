import React from "react";
import { Link } from "react-router-dom";
import pic from "../../../Images/profilepic.png";

export default function SideNavbar() {
  return (
    <div className="bg-blue w-[20rem] h-[25rem] rounded-lg float-left  mx-8 mt-[-3rem]">
      <Link to="#">
        <div className="flex justify-center flex-col items-center w-[19rem] h-[24rem]  mx-auto my-2">
          <div
            className="profileCircle w-[8rem] h-[8rem] rounded-full 
        bg-[#0969c3]
        relative overflow-hidden"
          >
            <img src={pic} className="absolute w-full h-full object-cover " />
          </div>
          <div className="textWrapper">
            <h3 className="text-white font-extrabold text-xl text-center">Becky Hill</h3>
            <p className="text-white  text-md py-2 px-5 w-[95%]">
              Node|| React|| MongoDB|| Express ||MERN Stack ||Web
              Development||Docker ||CI/CD Pipelines
            </p>

            <Link>
            <p className="text-white font-extrabold text-xl text-center">View Profile</p>
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}
