import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {LOCATION} from "../utils/consts";

export default function PlanetItem(props) {
    const [itemStyle, setItemStyle] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
        setItemStyle(props.size * props.location.residents.length)
    }, [window.innerWidth])

    return (
        <div className='item' key={props.location.id} style={{width: itemStyle}}
             onClick={() => navigate(LOCATION + '/' + props.location.id)}>
            <span className='location-extra-text'>{props.location.id} <br/>{props.location.name} <br/> {props.location.residents.length} residents </span>
        </div>
    )
}