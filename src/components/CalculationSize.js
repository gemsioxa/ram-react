import {useEffect} from "react";

export default function CalculationSize() {

    useEffect(() => {
        window.addEventListener('resize',function(){
            console.log('listener work')
        });
    }, [])

    return window.innerWidth
}