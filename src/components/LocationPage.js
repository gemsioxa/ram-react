import React from 'react';
import LocationItemRender from "./LocationItemRender";
import Person from "./Person";
import CalculationResidentSize from "./CalculationResidentSize";
import {useNavigate} from "react-router-dom";
import {MAINPAGE} from "../utils/consts";

const LocationPage = () => {

    const navigate = useNavigate()

    const {
        error,
        loaded,
        location
    } = LocationItemRender()

    const {
        size
    } = CalculationResidentSize()

    const residentList = location[0]?.residents?.map(item => {
        return <Person link={item} size={size} amount={location[0]?.residents.length}/>
    })

    return (
        <div className='item-list'>
            {
                error ?
                    <div>
                        <h1>Error!</h1>
                    </div> :
                    loaded ?
                        location[0]?.residents.length ?
                            <>
                                <button className="absolute-btn"
                                        onClick={() => navigate(MAINPAGE)}>
                                    Back
                                </button>
                                {residentList}
                            </>
                            :
                            <div>
                                <h1>Nothing in here...</h1>
                                <button onClick={() => navigate(MAINPAGE)}>Back</button>
                            </div> :
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
        </div>
    );
};

export default LocationPage;