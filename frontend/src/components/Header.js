import React, {useState} from 'react'
import logo from './../images/clippp.png';
import Signin from './Signin';
export default function Header() {

    const [show,setShow] = useState(false);

    const [sign,setSign] = useState(1);
    const handleTabChange0 = () =>{
        setSign(0);
        setShow(true);
    }
    const handleTabChange1 = () =>{
        setSign(1);
        setShow(true);
    }

    return (
        <div className='w-full sm:px-3 lg:px-32 md:px-4 sticky top-0 bg-white pt-3 pb-1 drop-shadow-md z-10'>
            {/* <div className='text-red-500 font-bold'> This is me.</div> */}
            <Signin show={show} setShow={setShow} sign={sign} handleTabChange0={handleTabChange0} handleTabChange1={handleTabChange1} />
            <div className='  flex' >
                <div className='w-44 bg-red-200 '> 
                    <img src={logo} alt='logo' />
                </div>
                {/* <div className='w-9/12 flex justify-end'>
                    <div className='w-24 my-auto text-center border-r-2 border-r-black'> About Us </div>
                    <div className='w-24 my-auto text-center'> Contact Us </div>
                </div> */}
                <div className='w-full flex justify-end'>
                    <div className='w-20 my-auto text-center hover:underline text-sm md:text-base' onClick={handleTabChange0}> Sign Up </div>
                    <span className='my-auto hidden md:block'> | </span>
                    <div className='w-20 my-auto text-center hover:underline hidden md:block ' onClick={handleTabChange1}> Sign In </div>
                </div>

            </div>
        </div>
    )
}
