import React from 'react';
import user from '../../public/images/user.svg'
export default function Header(){
  return(
    <div className="row ml-4 mb-3" style={{'background-color':'#f0f1f2'}}>
      <div className="col-6 pl-5 pt-5"> 
        <h1>Hello Josh! </h1>
        <h6>It's goot to see you again.</h6>
      </div>
      <div className="col p-4">
        <img src={user} alt="User weaving hand."/>
      </div>
    </div>
  );
} 