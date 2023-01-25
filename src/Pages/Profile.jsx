import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Authenticator } from '../Context/firebaseContext';
import auth from '../firebse_config';


function Profile() {

    const currentUser = useContext(Authenticator)

    const navigate = useNavigate()


    const SignOut = () => {
        signOut(auth).then(() => {
            navigate('/Login')
            console.log("logged out");
        })
    }



    return (
        <div>
            {currentUser.loading ? (<></>) : (
                <div>
                    {currentUser.user.displayName}
                    <img className='w-10 h-10 bg-red-500' src={currentUser.user.photoURL} alt="profilepic" />
                </div>
            )}
            <button onClick={SignOut} className='bg-gray-200 p-3 text-white rounded-full my-5 mx-3'>
                Sign out
            </button>
        </div>
    )
}

export default Profile