import React from 'react'

function Loading({ style }) {
    return (
        <div style={{
            borderRadius: 10,
            ...style
        }} className={"loading"}></div>
    )
}

export default Loading