import React from "react";
import "./style.css";
import Menu from './Components/Menu'
import Header from './Components/Header'
import Mycourse from './Components/Mycourse'

const data = [{'imgpath':''}];

export default function App() {
  return (
    <div className="container-fluid row">
      <div className="col-xs">
          <Menu/>
      </div>
      <div className="col-10">
          <div className="row">
            <Header/>
          </div>
          <div className="row">
            <Mycourse/>
          </div>
          <div className="row">
            
          </div>
      </div>


    </div>
  );
}
