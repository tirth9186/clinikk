import React,{useState} from 'react';
import Course from './Course';

export default function CoursesList({type,data}){

  

  return(
    <div>
      <div>
        <h2>Courses</h2>
        <div className="row">
          <h3>All Courses</h3>
          <h3 className="disable mx-2">The Newest</h3>
          <h3 className="disable">Top Rated</h3>
          <h3 className="disable mx-2">Most Popular</h3>
        </div>
      </div>
      <div style={{'maxHeight':'350px','overflow-y': 'auto','overflow-x': 'hidden'}}>
        {
          
          (data
          .filter(course=>(type==='All' || course.type==type))
          .map((course,id)=>(
            <Course key={id} imgpath={course.imgpath} course={course.name} author={course.author} timeline={course.timeline} rating={course.rating} />
          )))
        }
      </div>
    </div>
  );
}