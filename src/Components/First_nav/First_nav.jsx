import React from 'react'
import {ImLocation2} from 'react-icons/im'
import {BsTelephoneForward} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'
import {AiFillLinkedin} from 'react-icons/ai'
import {IoLogoYoutube} from 'react-icons/io'
// import './test.css/test.css'

function First_nav() {
  return (
 <div class="container">
   <div class="row my-2">
     <div class="col-9 d-flex justify-content-between col-d-none col-md-block ">
        <div>

     <a class="text-decoration-none " href="#" role="button"><b className='text-danger'><ImLocation2/> Address</b><span className='text-danger ps-1'>DHA 4 Phase 7 townShip lahore </span> </a>
        </div>
        <div>

     <a class="text-decoration-none text-danger" href="#" role="button">    <BsTelephoneForward/>    <b>Call us </b>: +923054582289 </a>
        </div>
        <div>

     <a class="text-decoration-none text-danger" href="#" role="button">  <SiGmail/> <b>Write us </b>  planetbuilder@gmail.com </a>
        </div>
       
     </div>
     <div class="col-3 d-flex justify-content-end text-danger">
      <div className='px-2'>

        <FaFacebookF/>
      </div>
      <div className='px-2'>

        <AiOutlineTwitter/>
      </div>
      <div className='px-2'>

        <GrInstagram />
      </div>
      <div className='px-2'>

        <AiFillLinkedin />
      </div>
      <div className=' px-2'>

        <IoLogoYoutube/>
      </div>
     </div>
     </div>
     </div> 

  
  )
}

export default First_nav