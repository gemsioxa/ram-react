import LocationRender from './LocationRender'
import CalculationSize from "./CalculationSize";
import React from "react";

export default function Display() {

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

    const style = {
        width: CalculationSize() / resSum
    }

    console.log('const style: ', style.width)



    return (
        <>
            <div className='render-app'>
            {locations.map((location) => {
                return (
                    <div className='item' key={location.id} style={{width: style.width * location.residents.length - 4}}>
                        <span className='location-extra-text'>{location.id} <br/>{location.name} <br/> {location.residents.length} residents </span>
                    </div>
                )
            })}
            </div>
            <div>{loading && 'Loading...'}</div>
            <div>{error && 'Error!'}</div>
        </>
    )
}