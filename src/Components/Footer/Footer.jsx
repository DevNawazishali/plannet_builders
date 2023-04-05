import React from 'react'
import "./Footer.css";
import { BsSendFill } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { AiTwotonePhone } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';


function Footer() {
    return (

        <div className="container-fluid mt-5 ">
            <div className="row">
                {/* <div className='d-flex justify-content-between'> */}

                <div className="col-md-3 col-12 text-start">
                    <p>Our Goal Is To Offer Broad Capabilities, Competitive
                        Pricing, Exceptional Quality, And Outstanding Service
                        To Each And Every Customer. </p>
                    <div className='d-flex justify-content-evenly mt-5'>

                        <FaFacebookF /> <FaTwitter />  <AiFillInstagram />  <BsYoutube /> <AiFillLinkedin />
                    </div>

                </div>
                <div className="col-md-2 col-12">

                    <h5 className='text-start'> <b> H-A Design Studio </b></h5>
                    <ul className=' text-start li_list'>
                        <li>Home </li>
                        <li>Project Portfolio </li>
                        <li> Team </li>
                        <li> About Us </li>
                        <li> Careers </li>
                        <li> Blog </li>
                        <li> Contact Us </li>
                    </ul>



                </div>
                <div className="col-md-2 col-12 li_list text-start">
                    <h5><b>H-A Design Studio</b></h5>
                    <ul>
                        <li>  What We Do</li>

                        <li> Detailed Services</li>
                        <li>
                            Our Portfolio</li>
                        <li>
                            Team</li>
                        <li>
                            Careers</li>
                        <li>
                            Contact</li>
                    </ul>
                </div>
                <div className="col-md-3 col-12 Con_line text-start">
                    <h5><b>Contact us</b></h5>


                    <p>
                        < ImLocation /> 52, B-1, Abu Bakar Block New Garden Town, Lahore, Pakistan </p>
                    <p>
                        < ImLocation /> Main Boulevard, Lake City Holdings, Lahore, Pakistan </p>
                    <p>
                        <AiTwotonePhone /> +92-323-460-0075</p>
                    <p>
                        <AiTwotonePhone /> +92-323-460-0076</p>


                    <span><BsSendFill className='fs-4 mx-3' /> info@hadesignstudio.pk</span>


                </div>
                <div className="col-md-2 col-12 li_list text-start"> <h5><b> Subscribe </b> </h5>

                    <p>
                        Subscribe To Our Newsletter To Receive The Latest News And Updates About H-A Design Studio.
                    </p>

                    <input type="text" placeholder='Email Address' className='w-50' /> <BsSendFill className='fs-4 mx-3' />

                </div>
                {/* </div> */}
            </div>
            <div className="row my-5">
                <div className="col-md-5 col-12 ">
                    <h6> <b> © 2021. All rights reserved. H-A Design Studio</b> </h6>
                </div>

                <div className="col-md-7 col-12">

                    <h6> <b>  Designed & Developed by Tensor6D Technologies | Contact With Company</b> </h6>
                </div>


            </div>
        </div>




    )
}

export default Footer 