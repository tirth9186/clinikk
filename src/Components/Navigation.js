import React from 'react';
import SearchField from "react-search-field";
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';
import { BsBell } from "react-icons/bs";
export default function Navigation(){
  return(
    <div className="d-flex mt-1">
        <SearchField classNames="mr-3" />
        <BsBell size="30px" ></BsBell>
        <span>
        <NotificationBadge count='1' effect={Effect.SCALE}/>  
        </span>
        <span>
        
        </span>
    </div>
  );
}

