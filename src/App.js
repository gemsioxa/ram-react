import './App.css';
import './color-constants.css'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import LocationRender from './LocationRender'


export default function App() {

  const {
    loading,
    error,
    locations
  } = LocationRender();

    const resCount = locations.map(location => {return location.residents.length})

    let resSum = 0;
    for (const obj of Object.keys(resCount)) {
        resSum += +resCount[obj];
    }

    console.log(resSum)


    return (
    <div>
        <div className="App">
        {locations.map((location) => {
          return (
                <div className='item' key={location.id} >
                    <span className='location-extra-text'>{location.name} <br/> {location.residents.length} residents </span>
                </div>
          )
        })}
      </div>
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error!'}</div>
    </div>
  )
}
