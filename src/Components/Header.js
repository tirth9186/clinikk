import React from 'react';
import user from '../../public/images/user.svg'
export default function Header(){
  return(
    <div className="row w-100 justify-content-center mb-3 backBox">
      <div className="col-sm-6 align-self-center"> 
        <h1>Hello Josh! </h1>
        <b1>It's good to see you again.</b1>
      </div>
      <div className="col-sm-6">
        <img src={user} alt="User weaving hand."/>
      </div>
    </div>
  );
} 