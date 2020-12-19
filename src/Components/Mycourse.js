import React from 'react';
import clogo from '../../public/images/clogo.svg'
import {BiChevronLeftCircle,BiChevronRightCircle} from "react-icons/bi";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ReactPlayer from 'react-player';

const Modal = ({url}) => (
  <Popup trigger={<button className="btn mr-3" style={{'backgroundColor':'black','color':'white'}}>Continue</button>} modal>
    <span><ReactPlayer url={url} controls='true'/>  </span>
  </Popup>  
);

export default function Mycourse(){
  return (
    <div className="row pt-4 pl-4 backBox">
      <div className="mr-4">
        <img src={clogo} />
      </div>
      <div className="mr-4">
        <b>Spanish BZ</b>
        <p>by Alejandro Velazquez</p>
      </div>
      <div className="mr-4">
        <p>83%</p>
      </div>
      <div className="mr-5">
        <Modal url="https://youtu.be/NSfCDdTtBn0"/>
        <BiChevronLeftCircle color="black" size="40px"/>
        <BiChevronRightCircle color="black" size="40px"/>
      </div>
    </div>
  );
}

