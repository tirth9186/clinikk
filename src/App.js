import React from "react";
import "./style.css";
import Menu from './Components/Menu'
import Header from './Components/Header'
import Mycourse from './Components/Mycourse'
import Navigation from './Components/Navigation'
import Statsbox from './Components/Statsbox'
import Statistics from './Components/Statistics'
import CoursesList from './Components/CoursesList'
import Premium from './Components/Premium'
const data = [
  {imgpath:'Frame.svg',name:'Learn Figma',author:'Christopher Morgan',timeline:'6h 30min',rating:'4.9',type:'The Newest'},
{imgpath:'photography.png',name:'Analog photography',author:'Gordon Norman',timeline:'3h 15min',rating:'4.7',type:'Top Rated'},
{imgpath:'photography.png',name:'Master Instagram',author:'Christopher Morgan',timeline:'7h 15min',rating:'4.7',type:'Top Rated'},
{imgpath:'photography.png',name:'Analog photography',author:'Gordon Norman',timeline:'3h 0min',rating:'4.7',type:'Top Rated'},
{imgpath:'photography.png',name:'Master Instagram',author:'Christopher Morgan',timeline:'5h 15min',rating:'4.7',type:'Most Popular'}
    ];

export default function App() {
  return (
    <div className="container-fluid row pt-3">
      <div className="col-sm-1">
          <Menu/>
      </div>
      <div className="col-sm-6">
          <div className="row pr-5">
            <Header/>
          </div>
          <div className="row">
            <Mycourse/>
          </div>
          <div className="row">
              <CoursesList data={data} type="All"/>
          </div>
      </div>
      <div className="col-sm-5">
          <Navigation/>
          <Statsbox completed={11} inProgress={4} />
          <Statistics/>
          <Premium/>
      </div>

    </div>
  );
}