import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';


function Senior_designer(prop) {
  return (
    <div className="container ">
    <div className="row mt-5">
        
        <div className="col-12 col-md-6 text-start mt-5 ps-5"><p> {prop.title} </p> 
        <div><h3> <b>  {prop.name} </b> </h3></div>
        <p className='aa'> </p>

       <p className='text-start'> {prop.prha}

                    </p>

<hr />

<div className='d-flex justify-content-between mt-5'>
<div>
    <button> {prop.buton} </button>
</div>
<div className='fs-2 '>
    <FaFacebookF className='bord'/> < FaTwitter className='bord' /> < AiFillInstagram className='bord'/>
</div>

</div>

        </div>

        <div className="col-12 col-md-6 "> 
        <img src={prop.img} className='w-100' alt="" /> 
        {/* <img src="b.png" alt="" className='w-100'/> */}
        
        </div>
    </div>
   </div>

  )
}

export default Senior_designer