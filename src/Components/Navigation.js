import React from 'react';
import SearchField from "react-search-field";
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';
import { BsBell } from "react-icons/bs";
import image from "./image 13.png";
export default function Navigation(){
  const ct=0;
  return(
    <div className="d-flex mt-1">
        <SearchField classNames="mr-3" />
        <BsBell size="30px" ></BsBell>
        <span>
        <NotificationBadge count={ct} effect={Effect.SCALE}/>  
        </span>
        <span>
          <img src ={image}/>
        </span>
    </div>
  );
}

