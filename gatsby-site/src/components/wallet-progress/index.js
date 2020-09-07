import React, { useState, useEffect, useRef } from 'react'
import style from './index.scss'

const WalletProgress = (props) => {
    const [width, setWidth] = useState(0)
    const height = 100;
    const y = props.y || 100;
    const pathNode = useRef(null);

    useEffect(() =>  {
        setWidth(document.body.offsetWidth)
        window.addEventListener('resize', () => setWidth(document.body.offsetWidth))
    }, [])
    
    function getPathLength() {
        if (pathNode && pathNode.current) {
            return Math.ceil(pathNode.current.getTotalLength())    
        }
        return 0
    } 

    return (
        <div className="wallet-progress">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height={`${height}px`} viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet" >
                <path ref={pathNode} style={{strokeDasharray: getPathLength(), strokeDashoffset: ((getPathLength() * (100 - props.percent)) / 100)}} className="path" d={`M -80 ${y} C ${height} -50, ${width-height} -50, ${width + 80} ${y}`} />
            </svg>
        </div>
    )
}


export default WalletProgress;