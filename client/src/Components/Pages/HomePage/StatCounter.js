import React from 'react';
import CountUp from 'react-countup';

export default function StatCounter() {
  return (
    <div className='countwrapper px-40 pt-12'>
      <div className='grid grid-cols-4 px-20 mt-[-15%] text-center'>
        <div>
          <h2 className='text-4xl font-bold text-[#fff]'>
            <CountUp start={0} end={12} duration={2.5}  />
            K+
          </h2>
          <p className='py-2 text-[#fff] font-medium'>Jobs Filled</p>
        </div>
        <div>
          <h2 className='text-4xl font-bold text-[#fff]'>
            <CountUp start={0} end={3500} duration={2.5} />
          </h2>
          <p className='py-2 text-[#fff] font-medium'>Active Listings</p>
        </div>
        <div>
          <h2 className='text-4xl font-bold text-[#fff]'>
            <CountUp start={0} end={800} duration={2.5} />
          </h2>
          <p className='py-2 text-[#fff] font-medium'>Companies Hiring</p>
        </div>
        <div>
          <h2 className='text-4xl font-bold text-[#fff]'>
            <CountUp start={0} end={5} duration={2.5} />M
          </h2>
          <p className='py-2 text-[#fff] font-medium'>Registered Users</p>
        </div>
        
       
      </div>
    </div>
  );
}
