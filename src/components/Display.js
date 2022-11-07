import React from "react";
import LocationRender from "./LocationRender";
import PlanetItem from "./PlanetItem";
import CalculationSize from "./CalculationSize";



export default function Display() {

    const {
        locations,
        error,
        loaded
    } = LocationRender()

    const {
        size
    } = CalculationSize()

    const planetList = locations.map(location => {
            return <PlanetItem location={location} size={size}/>
    })

    return (
        <>
            <div className='render-app'>
                {
                    error ?
                        <div>
                        <h1>Error!</h1>
                        </div> :
                    loaded ?
                    planetList :
                        <div>
                            <h1>Loading...</h1>
                        </div>
                }
            </div>
        </>
    )
}