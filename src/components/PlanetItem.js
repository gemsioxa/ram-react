import React, {useEffect, useState} from "react";

export default function PlanetItem(props) {
    const [itemStyle, setItemStyle] = useState(0)

    useEffect(() => {
        setItemStyle(props.size * props.location.residents.length)
    }, [window.innerWidth])

    return (
        <div className='item' key={props.location.id} style={{width: itemStyle}}>
            <span className='location-extra-text'>{props.location.id} <br/>{props.location.name} <br/> {props.location.residents.length} residents </span>
        </div>
    )
}