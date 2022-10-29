import React, {useEffect, useState} from "react";
import LocationRender from "./LocationRender";
import PlanetItem from "./PlanetItem";
import CalculationSize from "./CalculationSize";



export default function Display() {

    const {
        locations
    } = LocationRender()

    const {
        size
    } = CalculationSize()

    // const resCount = locations.map(location => {return location.residents.length})
    //
    // let resSum = 0;
    // for (const obj of Object.keys(resCount)) {
    //     resSum += +resCount[obj];
    // }
    // console.log(resCount, 'resCount') // planets
    // console.log(resSum, 'resSum') // residents amount

    const planetList = locations.map(location => {
            return <PlanetItem location={location} size={size}/>
    })

    return (
        <>
            <div className='render-app'>
                {planetList}
            </div>
        </>
    )
}