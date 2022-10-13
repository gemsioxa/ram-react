import { useEffect, useState } from "react";
import axios from "axios";

export default function LocationRender() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [locations, setLocations] = useState([])


    useEffect(() => {
        console.log('useEffect render')
        setLoading(true)
        setError(false)


        let cancel
        axios({
            url: `https://rickandmortyapi.com/api/location`,
            cancelToken: new axios.CancelToken(c => cancel = c)
        })
            .then(() => {
        for (let i = 1; i < 8; i++) {
            ( async function () {
                Promise.all([fetch(`https://rickandmortyapi.com/api/location?page=${i}`)])
                .then(response => response[0].json())
                .then( commits => setLocations(prevLocations => {
                    return [...new Set([...prevLocations, ...commits.results])]
                }))
                .then(() => {
                    setLoading(false)
                })})()
        }
            })
            .catch(e => {
                if (axios.isCancel(e)) return null
            })

        return () => cancel
        }, [])
    return { loading, error, locations }
}