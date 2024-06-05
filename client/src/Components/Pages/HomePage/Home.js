import React from "react";
import Header from "./Header";
import SecionOne from "./SecionOne";
import StatCounter from "./StatCounter";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import Footer from "./Footer";
import JobCategory from "./JobCategory";
export default function Home() {
  return (
    <div>
      <SecionOne />
      <StatCounter />
      <JobCategory />
      {/* <SectionTwo/> */}
      <SectionFour />
      {/* <SectionThree/> */}
    </div>
  );
}
