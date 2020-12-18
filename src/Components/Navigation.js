import React from 'react';
import SearchField from "react-search-field";
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';
import { BsBell,BsChevronDown } from "react-icons/bs";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Tooltip = () => (
  <Popup
    trigger={open => (
      <button className="button">Trigger - {open ? 'Opened' : 'Closed'}</button>
    )}
    position="right center"
    closeOnDocumentClick
  >
    <span> Popup content </span>
  </Popup>
);

export default function Navigation(){
  const ct=1;
  return(
    <div className="d-flex mt-1">
        <SearchField classNames="mr-auto w-75 rounded" />
        <Popup trigger={<div className="d-flex"><BsBell size="30px" ></BsBell><span>
        <NotificationBadge count={ct} effect={Effect.SCALE}/>  
        </span></div>}
          position="bottom center"
          closeOnDocumentClick
        >
        <ul>
        <li>Notification 1</li>
        <li>Notification 2</li>
        <li>Notification 3</li>
        </ul>
        </Popup>
        
        <span className="ml-1">
          <img style={{'borderRadius': '8px'}} src ={require("../../public/images/dp.svg")}/>
          <BsChevronDown/>
        </span>
    </div>
  );
}

