import React from 'react';

export default function PersonaCard({name,desc,rating,photo,left}) {
  return <>

{/* full star -> <i class="fas fa-star text-yellow-500 text-lg"></i> */}
{/* empty star -> <i class="far fa-star text-yellow-500 text-lg"></i> */}
{/* half star -> <i class="fas fa-star-half-alt text-yellow-500 text-lg"></i> */}


      <div className={`bg-white w-11/12 md:w-9/12 lg:w-5/12 rounded-3xl drop-shadow-md  ${left ? 'text-right mr-auto' : 'text-left ml-auto'} py-1 relative my-4`}>
        <div className='px-3 py-1'>
          <p className='font-bold mt-1 text-themeColor-600 text-sm md:text-base'> {name} </p>
          <p className={`w-10/12 py-1 text-sm md:text-base ${left ? 'ml-auto' : 'mr-auto'}`}> {desc}</p>
          <p className='py-1'> <i class="fas fa-star text-yellow-500 text-base md:text-lg"></i>
          <i class="fas fa-star text-yellow-500 text-base md:text-lg"></i>
          <i class="fas fa-star text-yellow-500 text-base md:text-lg"></i>
          <i class="fas fa-star text-yellow-500 text-base md:text-lg"></i> 
          {rating === 5 ? (<i class="fas fa-star text-yellow-500 text-base md:text-lg"></i>) : 
          rating > 4 ? (<i class="fas fa-star-half-alt text-yellow-500 text-base md:text-lg"></i>) : (<i class="far fa-star text-yellow-500 text-base md:text-lg"></i>)} </p>
          <img src={photo} alt="user's photo" className={`object-contain rounded-full w-20 h-20 md:w-28 md:h-28 absolute -bottom-4 md:-bottom-8 ${left ? '-left-6' : '-right-6'}`}/>
        </div>
      </div>
        

  </>;
}
