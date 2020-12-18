import React from 'react';
import image from '../../public/images/premium.svg'
export default function Premium(){
  return(
    <div className="backBox">
      <div className="row p-3">
        <div className="col">
          <h2>Lern even more!</h2>
          <b1>Unlock premium features only for $9.99 per month.</b1>
          <br/><button className="btn mt-1" style={{'backgroundColor':'black','color':'white'}}>Go Premium</button>  
        </div>
        <div className='col align-self-center offset-1'>
          <img src={image}/>
        </div>
      </div>
    </div>
  );
}