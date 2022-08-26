import React from 'react'
import locationSVG from '../logo.svg'

const Locations = ({locations, loading}) => {
    if (loading) {
        return (
            <h2>Loading...</h2>
        )
    }

    for (let props in locations) {
        console.log(props)
    }
}

export default Locations