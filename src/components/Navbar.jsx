import React from 'react'
import "./navbar.css"

function Navbar(props) {
    return (
        <div className='navbar'>
            {props.children}
        </div>
    )
}

export default Navbar
