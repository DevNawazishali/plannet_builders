import React from 'react'
import './Principal_Architect.css'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

function Principal_Architect(props) {
  return (
    <>
   <div className="container ">
    <div className="row mt-5">
        <div className="col-12 col-md-6 "> 
        <img src={props.img_url} className='w-100' alt="" /> 
        
        </div>
        <div className="col-12 col-md-6 text-start mt-5 ps-5"><p> {props.title}  </p> 
        <div><h3> <b>  {props.name} </b> </h3></div>
        <p className='aa'> </p>

       <p className='text-start'>
       {props.head}
                    </p>

<hr />

<div className='d-flex justify-content-between mt-5'>
<div>
    <button>{props.buton}</button>
</div>
<div className='fs-2 '>
    <FaFacebookF className='bord'/> < FaTwitter className='bord' /> < AiFillInstagram className='bord'/>
</div>

</div>

        </div>
    </div>
   </div>


</> 
  )
}

export default Principal_Architect
