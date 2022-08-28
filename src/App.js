import './App.css';
import './color-constants.css'
import React, {useEffect, useState, useRef} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import axios from "axios";
import locationSVG from './logo.svg'
import LocationRender from './LocationRender'



export default function App() {
  const objCount = 126;


  const {
    loading,
    error,
    locations
  } = LocationRender()



 if (locations.length > 126) {
   for (let i = 126; i <= locations.length; i++) {
     delete locations[i]
   }
 }
  return (
    <>
    <h2>Locations</h2>

      <div>
        {locations.map((location) => {
          return (
            <div className='col-2 location-extra' key={location.id}>
                <img src={locationSVG} height={location.residents.length * 0.5 + 5} alt=""/>
                <span className='location-extra-text'>{location.name} <br/> {location.residents.length} residents </span>
            </div>
          )
        })}
      </div>
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error!'}</div>
    </>
  )
}
