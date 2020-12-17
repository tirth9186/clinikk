import React from 'react';
import SearchField from "react-search-field";
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';
import { BsBell,BsChevronDown } from "react-icons/bs";
export default function Navigation(){
  const ct=1;
  return(
    <div className="d-flex mt-1">
        <SearchField classNames="mr-auto w-75 rounded" />
        <BsBell size="30px" ></BsBell>
        <span>
        <NotificationBadge count={ct} effect={Effect.SCALE}/>  
        </span>
        <span className="ml-1">
          <img style={{'borderRadius': '8px'}} src ={require("../../public/images/dp.svg")}/>
          <BsChevronDown/>
        </span>
    </div>
  );
}

