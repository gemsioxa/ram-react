import { useEffect, useState } from "react";
import axios from "axios";

export default function LocationRender() {
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)
    const [locations, setLocations] = useState([])
    const AMOUNT_OF_PAGES = 7

    useEffect(() => {
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
                .then( commits => setLocations(prevLocations => {
                    return [...new Set([...prevLocations, ...commits.results])]
                }))
                .then(() => {
                    setLoaded(true)
                })})()
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