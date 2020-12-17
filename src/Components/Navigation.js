import React from 'react';
import SearchField from "react-search-field";
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';
import Notification from '../../public/images/notification.jpg'
export default function Navigation(){
  return(
    <div className="d-flex">
        <SearchField />
          <img src = {Notification}/>
        <div>
          <NotificationBadge count='2' effect={Effect.SCALE}/>
        </div>        
    </div>
  );
}

