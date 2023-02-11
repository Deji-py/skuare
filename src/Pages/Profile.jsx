import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Authenticator } from '../Context/firebaseContext';
import { auth, db } from '../firebse_config';


function Profile() {

    const currentUser = useContext(Authenticator)
    const [data, setData] = useState()
    const navigate = useNavigate()


    const SignOut = () => {
        signOut(auth).then(() => {
            navigate('/Signup')
            console.log("logged out");
        })
    }






    return (
        <div>
            {currentUser === null ? (<div>loading</div>) : (

                <>
                    <div>
                        {currentUser.displayName}
                        <img className='w-10 h-10 bg-red-500' src={currentUser.photoURL} alt="profilepic" />
                    </div>
                    <p>My bio</p>
                    <button onClick={SignOut} className='bg-gray-200 p-3 text-white rounded-full my-5 mx-3'>
                        Sign out
                    </button>
                </>
            )}

        </div>


    )
}

export default Profile