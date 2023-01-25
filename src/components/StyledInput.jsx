
import React from 'react'
import { MdRemoveRedEye } from 'react-icons/md'

function StyledInput({ title, type, placeholder }) {
    return (
        <div className='mt-2'>
            <label className='flex flex-col  '>
                <p className='mb-1 mt-3 text-[12px]'>
                    {title}
                </p>
                <div className='relative'>

                    <input className='bg-[whitesmoke] text-[12px] w-full border-[1px] border-gray-400 h-14 rounded-xl pl-5' type={type} placeholder={placeholder} />
                    {type.toLowerCase() === 'password' ? (
                        <div className='absolute top-0 text-gray-600 h-full w-12 right-0 rounded-xl flex flex-col justify-center items-center'>
                            <MdRemoveRedEye />
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </label>
        </div>
    )
}

export default StyledInput
