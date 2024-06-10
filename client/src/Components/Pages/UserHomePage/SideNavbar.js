import React from "react";
import pic from '../../../Images/profilepic.png';

export default function SideNavbar() {
  return (
    <div className="bg-blue w-[20rem] h-[25rem] rounded-lg float-left  mx-8 mt-[-3rem]">
      <div className="flex justify-center items-center w-[15rem] h-[8rem]  mx-auto my-5">
        <div className="profileCircle w-[8rem] h-[8rem] rounded-full 
        bg-[#0969c3]
        relative overflow-hidden">
          <img src={pic} className="absolute w-full h-full object-cover " />
        </div>
      </div>
    </div>
  );
}
