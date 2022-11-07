import {useState} from "react";

export default function CalculationSize() {
    const [size, setSize] = useState(window.innerWidth)
    const RESIDENTS_AMOUNT = 804

    const debounce = (fn, ms) => {
        let timeout
        return function () {
            const fnCall = () => {fn.apply(this, arguments)}
            clearTimeout(timeout)
            timeout = setTimeout(fnCall, ms)
        }
    }

    function windowSize() {
        setSize(window.innerWidth / RESIDENTS_AMOUNT)
    }

    windowSize = debounce(windowSize, 1000)
    window.addEventListener('resize', windowSize)

    return {size}
}