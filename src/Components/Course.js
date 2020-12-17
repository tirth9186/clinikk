import React from 'react';
import { AiFillFire } from "react-icons/ai";
import { BsClockFill } from "react-icons/bs";
export default function Course({imgpath,course,author,timeline,rating}){
  return (
    <div className="d-flex ml-4 pt-4 pl-4" style={{'background-color':'#f0f1f2'}} >
      <div className="mr-4">
        <img src={require('../../public/images/'+{imgpath})} />
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
      <div className="mr-5">
        <button className="btn btn-outline-dark mr-3">View Course</button>
      </div>
    </div>
  );
}

