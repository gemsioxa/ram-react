import {useState} from "react";
import LocationItemRender from "./LocationItemRender";

export default function CalculationResidentSize() {
    const {
        location
    } = LocationItemRender()

    const [size, setSize] = useState(window.innerWidth)

    const debounce = (fn, ms) => {
        let timeout
        return function () {
            const fnCall = () => {fn.apply(this, arguments)}
            clearTimeout(timeout)
            timeout = setTimeout(fnCall, ms)
        }
    }

    function windowSize() {
        setSize(window.innerWidth / location[0]?.residents?.length)
    }

    windowSize = debounce(windowSize, 1000)
    window.addEventListener('resize', windowSize)

    return {size}
}