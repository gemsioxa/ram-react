import './App.css';
import './color-constants.css'


import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import axios from "axios";
import './components/Locations'
import Locations from "./components/Locations";
import locationSVG from "./logo.svg";
import LocationUnit from "./components/LocationUnit/LocationUnit";

// function App() {
//     const [locations, setLocations] = useState({})
//     const [loading, setLoading] = useState(false)
//     const [currentPage, setCurrentPage] = useState(1)
//     const [locationsPerPage] = useState(20)
//
//
//     useEffect(() => {
//         const getLocations = async () => {
//             setLoading(true)
//             const {data} = await axios.get(`https://rickandmortyapi.com/api/location?page=1`)
//             setLocations(data.results)
//             setLoading(false)
//         }
//
//         getLocations();
//     }, [])
//
//     return(
//         <div className='App'>
//             <h2 className='text-primary'>Locations</h2>
//             <LocationUnit results={locations}/>
//         </div>
//     )
// }
//
// export default App


function App() {
    const [locations, setLocations] = useState([])
    const [currentPage, setCurrentPage] = useState(2)
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)

        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            console.log('scroll')
        }
    }


    useEffect( () => {


        const fetchData = async () => {
            try {
                const {data} = await axios.get(`https://rickandmortyapi.com/api/location?page=${currentPage}`)
                    // .then(res => {
                    //     setLocations(res.results)
                    //     setCurrentPage(prevState => prevState + 1)
                    // })
                    // .finally(() => setFetching(false))
                setLocations(data.results)
                setCurrentPage(prevState => prevState + 1)
            } catch (error) {
                console.error(error);
                setFetching(false)
            }
        }

        if (fetching) fetchData();
    }, [fetching])

    return (
        <div className="App">
            {locations.map(location => {

                return(
                    <div className='location-extra'>
                        <img src={locationSVG} alt=""/>
                        <span className='location-extra-text'>{location.name} <br/> {location.residents.length} <br/> {location.id}</span>
                    </div>)


            })}
        </div>
    )
}

export default App;
