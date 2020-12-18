import React from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts'
import {Dropdown,DropdownButton} from 'react-bootstrap'
export default function Statistics(){
  const options = {
			animationEnabled: true,
      height:200,
			data: [{
				type: "spline",
				dataPoints: [
					{ label: 'mon', y: 2 },
					{ label: 'tue', y: 4 },
					{ label: 'wed', y: 3 },
					{ label: 'thu', y: 2 },
					{ label: 'fri', y: 5 },
          { label: 'sat', y: 3 },
          { label: 'sun', y: 4 }
				]
			}]
		}
  return(
    <div className="mt-2">
      <h2>Your Statistics</h2>
      <div className="row">
        <h3>Learning Hours</h3>
        <h3 className="disable ml-sm-3">My Courses</h3>
        <div className="dropdown ml-auto">
          <button className="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Weekly
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Weekly</a>
            <a class="dropdown-item" href="#">Monthly</a>
            <a class="dropdown-item" href="#">Yearly</a>
          </div>
        </div>
      </div>
      <div style={{'height':'200px'}}>
        <CanvasJSChart options = {options}/>
      </div>
    </div>

  );
}