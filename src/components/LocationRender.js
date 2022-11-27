import { useEffect, useState } from "react";
import axios from "axios";

export default function LocationRender() {
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)
    const [locations, setLocations] = useState([])
    // const [pageAmount, setPageAmount] = useState(0)
    const AMOUNT_OF_PAGES = 7



    useEffect(() => {

        // const fetchPage = async () => {
        //     await fetch('https://rickandmortyapi.com/api/location')
        //         .then(res => res.json())
        //         .then(data => data.info.pages)
        //         .then(num => setPageAmount(num))
        //     console.log(fetchPage())
        // }




        if (loaded) return

        let cancel

        axios({
            url: `https://rickandmortyapi.com/api/location`,
            cancelToken: new axios.CancelToken(c => cancel = c)
        })
            .then(() => {
                for (let i = 1; i <= AMOUNT_OF_PAGES; i++) {
                    ( async function () {
                        Promise.all([fetch(`https://rickandmortyapi.com/api/location?page=${i}`)])
                        .then(response => response[0].json())
                        .then( async commits => await setLocations(prevLocations => {
                            return [...new Set([...prevLocations, ...commits.results])]
                        }))
                        .then(() => {
                            setTimeout(() => setLoaded(true), 1000)
                        })
                    })()
                }
            })
            .catch(e => {
                setError(!error)
                if (axios.isCancel(e)) return null
            })

        return () => cancel
        }, [])
    return { loaded, error, locations }
}