import React from 'react'
import './More_services.css'

import { GiKitchenScale } from 'react-icons/gi';

function More_services() {
  return (
    
    <div className="container-fluid">
        <div className="row justify-content-evenly my-5">
          <p className='e'>HAMZA</p>
                <h6>More from H-A Design Studio</h6>
                <h1 className='mb-5'><b>More services</b></h1>

<div className="col-md-2 col-12 boad "><h5><b>Bath Designs</b></h5>
<p>find Out more</p></div>
<div className="col-md-2 col-12 boad "> <GiKitchenScale  className='fs-1 mb-3'/> <h5><b>
Kitchen Designs</b></h5>
Find Out More
</div>
<div className="col-md-2 col-12 boad">
  <h5><b>Bed Rooms Design</b></h5>Find Out More 
</div>
<div className="col-md-2 col-12 boad"><h5><b>Furniture Designs
</b></h5>
Find Out More
</div>
<div className="col-md-2 col-12 boa"> <h5><b>
More About H-A <br /> Design Studio</b></h5> About Us</div>

            </div>
        </div>

  )
}

export default More_services