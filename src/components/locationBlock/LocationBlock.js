import {useEffect, useState} from 'react';
import axios from 'axios';
import './LocationBlock.css';
import LocationUnit from "../LocationUnit/LocationUnit";

const LocationBlock = () => {
    const [locations, setLocations] = useState([]);

    useEffect( () => {


        const fetchData = async () => {
            try {
                const {data} = await axios.get(`https://rickandmortyapi.com/api/location`)
                setLocations(data.results)
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [])



    return (
        <div className="results">
            {locations.map(location => {
                let counter = 0;

                location.residents.map(resident => counter++);


                return(
                    <div id='location_block' className='location-container'>
                        <canvas className='location-canvas' width={counter * 4.5 + 1} height={counter * 4.5 + 1}></canvas>
                        <div id='location_font' className='location-amount'>{counter}</div>
                    </div>)


            })}
        </div>
    )
}

export default LocationBlock;








