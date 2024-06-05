import React from "react";
import newsletter from "../../../Images/newsletter.png";
export default function () {
  return (
    <div className="newsWrapper mt-20 mb-20 ml-[30rem]">
      <h2 className="text-black font-extrabold text-4xl">Stay up to date</h2>
      <p className="text-gray-500 py-5">Subscribe to our newsletter to receive our weekly feed.</p>
      <img src={newsletter} className="w-[30%] my-[2rem] shadow-md" />
      <div>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className=" text-gray-500 border rounded-2xl px-5 py-2 w-[20rem] bg-white"
          />
          <button
            className="bg-[#0969c3] hover:bg-[#002746] text-white font-bold rounded-lg py-2 px-4 ml-[2%] hover:pr-[3rem]" 
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
