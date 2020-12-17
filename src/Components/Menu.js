import React from 'react';

import {AiFillHome} from 'react-icons/ai';
import { ImBook } from "react-icons/im";
import { BsPerson,BsGear,BsFillChatSquareDotsFill,BsBoxArrowRight } from "react-icons/bs";
import logo from '../../public/images/F.svg'

const itemStyle={
  'marginTop':'1vw',
  'marginBottom':'1vw',
  'color':'white'
}

export default function Menu(){
  return(
    <div className="mt-1 rounded-1 d-flex flex-column align-items-center" style={{'backgroundColor':'black'}}>
      <img className="p-5" src={logo} alt="logo"/>
      <AiFillHome size='3vw' style={itemStyle} />
      <ImBook size='3vw' style={itemStyle}/>
      <BsPerson size='3vw' style={itemStyle}/>
      <BsFillChatSquareDotsFill size='3vw' style={itemStyle}/>
      <BsGear size='3vw' style={itemStyle}/>
      <div className="pt-5 mt-auto">
        <BsBoxArrowRight size='3vw' style={itemStyle}/>
      </div>
    </div>
  );
}
