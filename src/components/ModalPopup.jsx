import React, { useEffect, useState } from 'react'





function ModalPopup(props) {


    

    return (
        <div className=' h-screen w-screen top-0 z-[1000] flex flex-center items-center flex-col absolute' style={{
            visibility: props.active ? 'visible' : 'hidden'
        }}>
        <div className='bg-[#0000008a] w-full h-full' onClick={()=>props.setActive(false)} >
        </div>
        <div className='card absolute z-20 shadow-lg shadow-[#30303088] bg-white rounded-2xl'>
                {props.children}
            </div>
        </div>
    )
}

export default ModalPopup