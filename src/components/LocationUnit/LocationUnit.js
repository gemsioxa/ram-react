import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './LocationUnit.css'

import locationSVG from '../../logo.svg'
import axios from "axios";

const LocationUnit = ({ results }) => {
    const [locations, setLocations] = useState([]);
    // let counter = 5;

    let display;
    // console.log(results)
    let pageNum = 1;

    useEffect( () => {


        const fetchData = async (pageNum) => {
            try {
                const {data} = await axios.get(`https://rickandmortyapi.com/api/location?page=${pageNum}`)
                setLocations(data.results)
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [])

    if (results) {
        display = results.map((unit) => {
            return  (
                <div className='col-2 location-extra' key={unit.id}>
                    <img src={locationSVG} alt=""/>
                    <span className='location-extra-text'>{unit.name} <br/> {unit.residents.length} <br/> {unit.id}</span>
                </div>
            )
        });
    } else {
        display = 'No found...'
    }

    return(

        <div>{ display }
        </div>


        // <div id='location_block' className='location-container'>
        //     <canvas className='location-canvas' width={counter * 4.5 + 1} height={counter * 4.5 + 1}></canvas>
        //     <div id='location_font' className='location-amount'>{counter}</div>
        // </div>
    )
};

export default LocationUnit;