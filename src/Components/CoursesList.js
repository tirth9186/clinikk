import React from 'react';
import Course from 'Course';
export default function CoursesList({type,data}){
  return(
    <div>
      {
        data
        .filter(course=>course.type==={type})
        .map(course=>{
          <Course imgpath={course.imgpath} course={course.name} author={course.author} timeline={course.timeline} rating={course.rating} />
        })
      }
    </div>
  );
}