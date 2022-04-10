import React, {useState} from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
export default function Signin({show,setShow,sign,handleTabChange0,handleTabChange1}) {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    
    return  (
    <div className=''>
        <Modal show={show} onHide={handleClose} 
        centered
        >
            <div className='border-1 border-themeColor-800 m-1 rounded-sm p-2'>
            <div className='flex m-1 mb-3'>
                <div className={`w-6/12 mx-auto text-center py-2 ${sign == 0 ? "font-bold text-themeColor-500" : ""}`} onClick={handleTabChange0}> Sign Up </div>
                <span className='text-3xl'> | </span>
                <div className={`w-6/12 mx-auto text-center py-2 ${sign == 0 ? "" : "font-bold text-themeColor-500"}`} onClick={handleTabChange1}> Sign In </div>
            </div>
            {sign == 0 ? 
            <Form className='m-1 '>
            <Form.Group className="mb-3 flex" controlId="formBasicEmail">
                <Form.Label className='text-sm my-auto w-5/12 ml-1'>Name:</Form.Label>
                <Form.Control className='placeholder:text-sm' type="text" placeholder="Enter Your Name" />
            </Form.Group>

            <Form.Group className="mb-3 flex" controlId="formBasicPhone">
                <Form.Label className='text-sm my-auto w-5/12 ml-1'>Mobile No:</Form.Label>
                <Form.Control className='placeholder:text-sm' type="text" placeholder="Enter Mobile Number" />
            </Form.Group>

            <Form.Group className="mb-3 flex" controlId="formBasicPassword">
                <Form.Label className='text-sm my-auto w-5/12 ml-1'>Password:</Form.Label>
                <Form.Control className='placeholder:text-sm' type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3 flex" controlId="formBasicCheckPassword">
                <Form.Label className='text-sm my-auto w-5/12 ml-1'>Confirm Password:</Form.Label>
                <Form.Control className='placeholder:text-sm' type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Form.Group className="mb-3 flex" controlId="formBasicCheckbox">
                <Form.Check className="text-sm mx-auto" type="checkbox" label="I agree to the Terms and Conditions" />
            </Form.Group>

            <Button className='bg-themeColor-500 w-5/12 hover:bg-themeColor-500 mx-auto block' type="submit">
                Sign Up
            </Button>
            </Form> 

            : 
            
            <Form className='m-1 '>
            <Form.Group className="mb-3 flex" controlId="formBasicPhone">
                <Form.Label className='text-sm my-auto w-5/12 ml-1'>Mobile No:</Form.Label>
                <Form.Control className='placeholder:text-sm' type="text" placeholder="Enter Mobile Number" />
            </Form.Group>

            <Form.Group className="mb-2 flex" controlId="formBasicPassword">
                <Form.Label className='text-sm my-auto w-5/12 ml-1'>Password:</Form.Label>
                <Form.Control className='placeholder:text-sm' type="password" placeholder="Password" />
            </Form.Group>
            <a className='text-sm text-blue-700 block text-right px-3 mt-0 mb-2 hover:underline'> Forgot Password?</a>
            <Button className='bg-themeColor-500 w-5/12 hover:bg-themeColor-500 mx-auto block' type="submit">
                Sign In
            </Button>
            </Form> 
            }
            </div>

        </Modal>
    </div>
  ) 
  
}
// render (<Signin />);


// sign up
// phone no
// name 
// Create password

// -> verify phone  (otp)