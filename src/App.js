import React from "react";
import "./style.css";
import Menu from './Components/Menu'
import Header from './Components/Header'
import Mycourse from './Components/Mycourse'
import Navigation from './Components/Navigation'
import CoursesList from './Components/CoursesList'
const data = [
  {imgpath:'Frame.svg',name:'Learn Figma',author:'Christopher Morgan',timeline:'6h 30min',rating:'4.9',type:'The Newest'},
{imgpath:'photography.png',name:'Analog photography',author:'Gordon Norman',timeline:'3h 15min',rating:'4.7',type:'Top Rated'},
{imgpath:'photography.png',name:'Master Instagram',author:'Christopher Morgan',timeline:'7h 15min',rating:'4.7',type:'Top Rated'},
{imgpath:'photography.png',name:'Analog photography',author:'Gordon Norman',timeline:'3h 0min',rating:'4.7',type:'Top Rated'},
{imgpath:'photography.png',name:'Master Instagram',author:'Christopher Morgan',timeline:'5h 15min',rating:'4.7',type:'Most Popular'}
    ];

export default function App() {
  return (
    <div className="container-fluid row">
      <div className="col-1">
          <Menu/>
      </div>
      <div className="col-6">
          <div className="row">
            <Header/>
          </div>
          <div className="row">
            <Mycourse/>
          </div>
          <div className="row">
              <CoursesList data={data} type="Top Rated"/>
          </div>
      </div>
      <div className="col-4">
          <Navigation/>
      </div>

    </div>
  );
}