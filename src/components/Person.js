import React, {useEffect, useState} from 'react';

const Person = (props) => {
    const [itemStyle, setItemStyle] = useState(0)

    useEffect(() => {
        setItemStyle(props.size)
    }, [window.innerWidth])

    const [resident, setResident] = useState([])

    useEffect(() => {
        fetch(props.link)
            .then(res => res.json())
            .then(data => {
                setResident(prevState => [data])
            })
    }, [])

    return (
        <div className='item' style={{width: itemStyle}}>

            <span className='location-extra-text'>
                <img src={resident[0]?.image} alt="" className="location-extra-img"/>
                <br/>
                {resident[0]?.name}<br/>{resident[0]?.status}<br/>{resident[0]?.species}</span>
        </div>
    );
};

export default Person;