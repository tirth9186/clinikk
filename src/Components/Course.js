import React from 'react';
import { AiFillFire } from "react-icons/ai";
import { BsClockFill } from "react-icons/bs";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ReactPlayer from 'react-player'

const Modal = ({url}) => (
  <Popup trigger={<button className="btn btn-outline-dark mr-3">View Course</button>} modal>
    <span><ReactPlayer url={url} controls='true'/>  </span>
  </Popup>  
);

export default function Course({imgpath,course,author,timeline,rating}){
  return (
    <div className="row my-1 pt-4 pl-4 backBox">
      <div className="mr-4">
        <img src={require("../../public/images/Frame.svg")}></img>
      </div>
      <div className="mr-4">
        <b>{course}</b>
        <p>by {author}</p>
      </div>
      <div className="mr-4">
        <p><BsClockFill/> {timeline}</p>
      </div>
      <div className="mr-4">
        <p><AiFillFire /> {rating}</p>
      </div>
      <div className="mr-1">
        <Modal url='https://youtu.be/3q3FV65ZrUs'/>
      </div>
    </div>
  );
}

