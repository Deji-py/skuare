import React, { useEffect, useState } from 'react'
import "./scrollview.css"

function ScrollView(props) {
    const [dir, setDir] = useState('vertical')

    useEffect(() => {
        setDir(props.direction)
    }, [props.direction])

    return (
        <div className='scroll' style={{
            overflowX: dir === 'horizontal' ? "scroll" : "none",
            overflowY: dir === 'vertical' ? "scroll" : "none",
            ...props.style,
        }} >
            {props.children}
        </div>
    )
}

export default ScrollView
