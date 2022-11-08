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

                {
                    error ?
                        <div>
                        <h1>Error!</h1>
                        </div> :
                    loaded ?
                    planetList :
                        <div className="lds-spinner">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                }
        </>
    )
}