import React from 'react';
import Course from './Course';
export default function CoursesList({type,data}){
  return(
    <div>
      {
        data
        .filter(course=>(type==='All' || course.type==type))
        .map((course,id)=>(
          <Course key={id} imgpath={course.imgpath} course={course.name} author={course.author} timeline={course.timeline} rating={course.rating} />
        ))
      }
    </div>
  );
}