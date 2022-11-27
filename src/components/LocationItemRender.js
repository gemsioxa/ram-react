import React, {useEffect, useState} from 'react';
import axios from "axios";

const LocationItemRender = () => {
    // const [residents, setResidents] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)
    const [location, setLocation] = useState([])
    const currentUrl = window.location.pathname
    const currentId = +currentUrl.slice(10) // location id

    // useEffect(() => {
    //     fetch(`https://rickandmortyapi.com/api/location/${currentId}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setLocation(prevState => [data])
    //             // data.residents.map(person => {
    //             //     setResidents(prevState => [...prevState, person])
    //             // })
    //         })
    // }, [])

    useEffect(() => {

        if (loaded) return

        let cancel

        axios({
                url: `https://rickandmortyapi.com/api/location`,
                cancelToken: new axios.CancelToken(c => cancel = c)
            })
            .then(() => {
                    ( async function () {
                        await Promise.all([fetch(`https://rickandmortyapi.com/api/location/${currentId}`)])
                            .then(res => res[0].json())
                            .then(async data => await setLocation(prevLocations => [...new Set([...prevLocations, data])]))
                    })()
            })
            .then(() => {
                setTimeout(() => setLoaded(true), 1000)
            })
            .catch(e => {
                setError(!error)
                if (axios.isCancel(e)) return null
            })

        return () => cancel
    }, [])

    return {location, error, loaded}
};

export default LocationItemRender;