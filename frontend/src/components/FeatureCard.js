import React from 'react';

export default function FeatureCard({icon,head,desc}) {
  return <>
      <div className='w-full md:w-1/2 lg:w-1/4 text-center my-2 drop-shadow-sm'>
        
        <div className='bg-white m-2 rounded-xl px-1'>
        <i className={`mt-3 mb-2 ${icon} text-2xl md:text-3xl text-themeColor-700`}></i>
          <p className='text-base md:text-lg font-bold border-t-1 border-black my-1'>{head} </p>
          <p className='text-sm md:text-base'>{desc}</p>
        </div>
        </div>
  </>;
}
