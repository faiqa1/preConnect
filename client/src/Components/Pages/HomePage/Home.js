import React from "react";
import SecionOne from "./SecionOne";
import StatCounter from "./StatCounter";
import JobCategory from "./JobCategory";
import NewsLetter from "./NewsLetter.";
import Enquire from "./Enquire";
import CompaniesLogo from "./CompaniesLogo";
import FeaturedJobs from "./FeaturedJobs";
export default function Home() {
  return (
    <div>
      <SecionOne />
      <StatCounter />
      <JobCategory />
      <FeaturedJobs />
      <CompaniesLogo/>
      <Enquire/>
      <NewsLetter/>
    </div>
  );
}
