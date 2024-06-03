import React from "react";
import { Link } from "react-router-dom";

export default function JobCategory() {
  return (
    <div>
      <h2 className="text-black font-bold text-3xl text-center mb-4">
        Search by Category
      </h2>
      <p className="text-gray-500 text-xl text-center">
        Search your career opportunity with our categories
      </p>
      <button className="float-right mr-[10%] text-blue-600 font-bold">
        All Categories
      </button>
    </div>
  );
}
