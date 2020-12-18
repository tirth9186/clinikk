import React from 'react';


export default function Statsbox({completed,inProgress}){
  return(
    <div className="row mt-sm-2">
      <div className="col-sm-4">
        <div className="row align-items-center justify-content-center backBox">
          <span className="bigNum">{completed}</span>
          <b1> Courses <br/> completed</b1>
        </div>
      </div>
      <div className="col-sm-4 offset-sm-1">
        <div className="row align-items-center justify-content-center backBox">
          <span className="bigNum">{inProgress}</span>
          <b1> Courses <br/> in progress</b1>
        </div>
      </div>
    </div>
  );
}