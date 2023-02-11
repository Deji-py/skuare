
import React, { useContext, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import StyledInput from '../../components/StyledInput'
import logo from "../../Assets/svg/skuacolored.svg"
import Googlelogo from "../../Assets/svg/Googlelogo.svg"
import { browserSessionPersistence, GoogleAuthProvider, setPersistence, signInWithPopup } from "firebase/auth"
import { auth, db } from '../../firebse_config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Authenticator } from '../../Context/firebaseContext'
import { collection, addDoc, setDoc, doc } from 'firebase/firestore'


function Signup() {

    const navigate = useNavigate()
    const provider = new GoogleAuthProvider()



    const handleGoogleSignin = () => {
        signInWithPopup(auth, provider).then(result => {
            // const credential = GoogleAuthProvider.credentialFromResult(result)
            navigate("/dashboard/home")
            setDoc(doc(db, "users", result.user.uid), {
                posts: [{
                    caption: "Hello my people",
                    image: result.user.photoURL,
                }],
                bio: "",
                profilePic: result.user.photoURL
            })

        }).catch(err => {
            console.log(err);
            // const crediential = GoogleAuthProvider.credentialFromError(err)
        })
    }





    return (
        <div className='flex flex-col justify-start mt-5 items-center bg-white h-screen'>

            <img src={logo} style={{
                width: "20em"
            }} />

            <div className='w-full max-w-[22em] px-5 ' >
                <button onClick={handleGoogleSignin} className='flex bg-gray-200 w-full p-3 rounded-xl text-[12px]  flex-row justify-center items-center gap-3' >
                    <img src={Googlelogo} style={{
                        width: "2em"
                    }} /> Signup With Google</button>
                <StyledInput title={"Username"} placeholder="e.g Don Joe" type={"text"} />
                <StyledInput title={"Email"} placeholder="example@gmail.com" type={"email"} />
                <StyledInput title={"Password"} placeholder="Password" type={"password"} />
                <p className='my-2 text-[12px]'>Already have an account? <Link to="/Login" className='text-orange-500 font-bold'>Login</Link></p>
                <Link to={"/dashboard/home"} >
                    <button className='bg-black  mt-12 h-14 w-full text-[14px] shadow-xl text-white p-3 px-5 rounded-xl my-2'>SIGN UP</button>
                </Link>
            </div>
        </div>
    )
}

export default Signup