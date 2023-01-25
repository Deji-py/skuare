import { Button, Input } from '@mui/material'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import StyledInput from '../../components/StyledInput'
import logo from "../../Assets/svg/skuacolored.svg"
import Googlelogo from "../../Assets/svg/Googlelogo.svg"
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import auth from '../../firebse_config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Authenticator } from '../../Context/firebaseContext'
import { useContext } from 'react'




function Login() {


    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth)
    const provider = new GoogleAuthProvider()


    const handleGoogleSignin = () => {
        signInWithPopup(auth, provider).then(result => {
            navigate("/dashboard/home")
            const credential = GoogleAuthProvider.credentialFromResult(result)
        }).catch(err => {
            console.log(err);
            const crediential = GoogleAuthProvider.credentialFromError(err)
        })
    }

    if (user !== null) {
        navigate("/dashboard/home")
    }


    return (
        <div className='flex flex-col justify-start mt-5 items-center bg-white h-screen'>

            <img src={logo} style={{
                width: "20em"
            }} />

            <div className='w-full max-w-[22em] px-5 ' >
                <button onClick={handleGoogleSignin} className='flex bg-gray-200 hover:bg-gray-300 w-full p-3 rounded-xl text-[12px]  flex-row justify-center items-center gap-3' >
                    <img src={Googlelogo} style={{
                        width: "2em"
                    }} /> Login With Google</button>
                <StyledInput title={"Username"} placeholder="e.g Don Joe" type={"text"} />
                <StyledInput title={"Password"} placeholder="Password" type={"password"} />
                <div className='flex flex-row justify-between items-center'>
                    <p className='my-2 text-[12px] text-gray-600 '>Forgotten password?</p>
                    <p className='my-2 text-[12px]'>Dont have an account <Link to="/Signup" className='text-orange-500 font-bold'>Signup</Link></p>

                </div>
                <Link to={"/dashboard/home"}  >
                    <button className='bg-black mt-12 h-14 w-full text-[14px] shadow-xl text-white p-3 px-5 rounded-xl my-2'>Login</button>
                </Link>
            </div>
        </div>
    )
}

export default Login