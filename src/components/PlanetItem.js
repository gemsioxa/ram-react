import React, {useEffect, useState} from "react";
import CalculationSize from "./CalculationSize";

export default function PlanetItem(props) {

    const [itemStyle, setItemStyle] = useState(0)

    useEffect(() => {
        setItemStyle(props.size * props.location.residents.length)
        // console.log('style', itemStyle, 'size:', props.size)


    }, [window.innerWidth])

    return (
        <div className='item' key={props.location.id} style={{width: itemStyle}}>
            <span className='location-extra-text'>{props.location.id} <br/>{props.location.name} <br/> {props.location.residents.length} residents </span>
        </div>
    )
}