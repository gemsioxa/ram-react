import {useEffect, useState} from 'react';
import axios from 'axios';
import './LocationBlock.css';

const LocationBlock = () => {
    const [locations, setLocations] = useState([]);

    function fontsize() {
        let block = document.getElementById('location_block');
        let text = document.getElementById('location_font');
        let w = block.offsetWidth;
        text.style.fontSize = w/16 + "px";
        // text.style.top = w/38 + "px";
        // text.style.left = w/9 + "px";

    }

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


                fontsize();
            })}
        </div>
    )
}

export default LocationBlock;