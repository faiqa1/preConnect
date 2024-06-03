import React from 'react'
import Header from './Header'
import SecionOne from './SecionOne'
import StatCounter from './StatCounter'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import Footer from './Footer'
import SectionFive from './SectionFive'
export default function Home() {
  return (
    <div>
      <Header/>
      <SecionOne/>
      <StatCounter/>
      {/* <SectionTwo/> */}
      {/* <SectionFour/> */}
      <SectionThree/>
      <SectionFive/>
      <Footer/>
    </div>
  )
}
