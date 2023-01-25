import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { HiMenuAlt3, HiMoon, HiSun, HiUserGroup } from 'react-icons/hi'
import logo from '../Assets/svg/skuacolored.svg'
import Navbar from '../components/Navbar'
import ScrollView from '../components/ScrollView'
import lady from "../Assets/png/lady.jpg"
import lady2 from "../Assets/png/lady2.jpg"
import lady3 from "../Assets/png/lady3.jpg"

import './home.css'
import PostCard from '../components/PostCard'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebse_config'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'



const StoryCard = ({ image }) => {
    return (
        <div className='flex flex-col  justify-center items-center'>
            <div className='w-[60px] shadow-xl shadow-[#5f585c25] h-[60px] overflow-hidden bg-gray-400 mx-2 rounded-[20px]'>
                <img src={image} />
            </div>
            <h3 className='mt-2 text-[14px]'>D_avid</h3>
        </div>
    )
}











function Home() {



    const [open, setOpen] = useState(false)

    const toggleSidebar = () => {
        setOpen(!open)
    }
    return (
        <>
            <div >
                <Navbar >
                    <div className='flex-between ' style={{
                        width: "100%",
                        alignItems: "center",
                    }}>
                        <div className='flex-center' style={{
                            width: 100,
                            height: 40,
                        }}>
                            <img src={logo} alt={'logo'} style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }} />
                        </div>
                        <div className='flex flex-row justify-center items-center'>
                            <IconButton className=' flex justify-center items-center' style={{
                            }} >
                                <HiSun size={25} />
                            </IconButton>
                            <IconButton className=' flex justify-center items-center' style={{
                            }} onClick={toggleSidebar} >
                                < HiUserGroup size={25} />
                            </IconButton>

                        </div>

                    </div>
                </Navbar>
                <div className='flex flex-col-reverse pb-20 overflow-hidden'>
                    <div className='h-full '>
                        <ScrollView style={{
                            height: "fit-content",
                            width: "100vw"
                        }}>
                            <div className='flex pt-2  flex-row justify-between w-fit'>
                                <StoryCard image={lady} />
                                <StoryCard image={lady2} />
                                <StoryCard image={lady3} />
                                <StoryCard image={lady} />
                                <StoryCard image={lady3} />
                                <StoryCard image={lady} />
                                <StoryCard image={lady2} />
                                <StoryCard image={lady3} />
                                <StoryCard image={lady} />
                                <StoryCard image={lady3} />
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                            </div>

                        </ScrollView>
                        <div className='flex flex-col  justify-center items-center gap-5 py-5'>
                            <PostCard />
                            <PostCard />
                            <PostCard />
                            <PostCard />
                        </div>
                    </div>
                    <div className=' w-full h-[4em] bg-gray-200 overflow-hidden' style={{
                        height: open ? "5em" : "0em",
                        transition: "ease 0.1s"
                    }}>
                        <ScrollView style={{
                            height: "fit-content",
                            width: "100vw"
                        }}>
                            <div className='flex pt-2  flex-row justify-between w-fit'>
                                <StoryCard image={lady} />
                                <StoryCard image={lady} />
                                <StoryCard image={lady} />
                                <StoryCard image={lady} />
                                <StoryCard image={lady} />
                                <StoryCard image={lady} />
                                <StoryCard image={lady} />
                                <StoryCard image={lady} />
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                                <p>Story</p>
                            </div>
                        </ScrollView>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home