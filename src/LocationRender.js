import { useEffect, useState } from "react";
import axios from "axios";

export default function LocationRender() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [locations, setLocations] = useState([])

    useEffect(() => {
        setLoading(true)
        setError(false)


        let cancel
        axios({
            url: `https://rickandmortyapi.com/api/location`,
            cancelToken: new axios.CancelToken(c => cancel = c)
        })
            .then(trying => {
        for (let i = 1; i < 8; i++) {
            Promise.all([fetch(`https://rickandmortyapi.com/api/location?page=${i}`)])
                .then(async response => await response[0].json())
                .then(async commits => await setLocations(prevLocations => {
                    return [...new Set([...prevLocations, ...commits.results])]
                }))
                .then(after => {
                    setLoading(false)
                })
        }
            })
            .catch(e => {
                if (axios.isCancel(e)) return
            })
        return () => cancel
        }, [])
    return { loading, error, locations }
}