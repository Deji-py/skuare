
import React, { useContext, useEffect } from 'react'
import { NavLink, Navigate, Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

import livelogo from '../Assets/svg/squalivelogo.svg'
import { MdCamera, MdHome, MdMessage, MdNotifications, MdPerson } from "react-icons/md"
import { BsChatDotsFill, BsChatFill, BsGrid } from "react-icons/bs"
import theme from '../Context/themeContext'
import { Badge, IconButton } from '@mui/material'
import auth from '../firebse_config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Authenticator } from '../Context/firebaseContext'


function Dashboard() {

    const currentUser = useContext(Authenticator)
    const navigate = useNavigate()


    useEffect(() => {
        if (currentUser.user === null) {
            navigate("/Login")
        }
    }, [])

    return (
        <div className='flex-column ' style={{
            position: "relative"
        }}>

            <div style={{
                flex: 1
            }}>
                <Outlet />
            </div>

            <div className=' fixed bottom-0 rounded-tl-[40px] backdrop-blur-2xl bg-[#ffffffd3] rounded-tr-[40px] z-40 ' style={{
                height: 70,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                boxShadow: "0px -5px 10px rgba(200,200,200,0.1)"
            }}>
                <div className='flex-evenly' style={{
                    width: "100%"
                }}>
                    <IconButton style={{
                        position: "relative"
                    }}>
                        <NavLink to={'/dashboard/home'} style={({ isActive }) => ({
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: 30,
                            height: 30,
                            color: isActive ? theme.dark.primary : 'rgba(0,0,0,0.3)'
                        })} >
                            <NavLink className={"rounded-full"} to={'/dashboard/home'} style={({ isActive }) => ({ width: 5, height: 5, background: theme.dark.primary, opacity: isActive ? 1 : 0, transform: isActive ? "translateY(-2px)" : "translateY(5px)", transition: "ease 0.1s", position: "absolute", bottom: 0 })} />
                            <MdHome size={30} />
                        </NavLink>
                    </IconButton>

                    <IconButton>
                        <NavLink to={'/dashboard/messages'} style={({ isActive }) => ({
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: 30,
                            height: 30,
                            color: isActive ? theme.dark.primary : 'rgba(0,0,0,0.3)'
                        })}>
                            <NavLink to={'/dashboard/messages'} style={({ isActive }) => ({
                                width: 5,
                                height: 5,
                                borderRadius: "100px",
                                background: theme.dark.primary,
                                opacity: isActive ? 1 : 0,
                                transform: isActive ? "translateY(-2px)" : "translateY(5px)", transition: "ease 0.1s", position: "absolute", bottom: 0
                            })} />
                            <BsChatFill size={25} />
                        </NavLink>
                    </IconButton>
                    <IconButton>
                        <NavLink to={'/dashboard/post'} style={({ isActive }) => ({
                            background: isActive ? theme.dark.primary : "black",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: 40,
                            height: 40,
                            borderRadius: "10px",
                        })}>
                            <img src={livelogo} alt={'logo'} style={{
                                width: "80%",
                                height: "80%",
                                objectFit: "contain"
                            }} />
                        </NavLink>
                    </IconButton>

                    <IconButton>
                        <div className='flex flex-col rounded-full justify-center items-center' style={{
                            background: "red",
                            fontSize: 8,
                            position: "absolute",
                            top: 12,
                            left: 8,
                            color: "white",
                        }} >
                            <p style={{
                                padding: "0px 4px"
                            }}>
                                8
                            </p>

                        </div>
                        <NavLink to={'/dashboard/notifications'} style={({ isActive }) => ({
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: 30,
                            height: 30,
                            color: isActive ? theme.dark.primary : 'rgba(0,0,0,0.3)'
                        })}>
                            <NavLink className={"rounded-full"} to={'/dashboard/notifications'} style={({ isActive }) => ({ width: 5, height: 5, background: theme.dark.primary, opacity: isActive ? 1 : 0, transform: isActive ? "translateY(-2px)" : "translateY(5px)", transition: "ease 0.1s", position: "absolute", bottom: 0 })} />

                            <MdNotifications size={30} />

                        </NavLink>
                    </IconButton>
                    <IconButton>
                        <NavLink to={'/dashboard/profile'} style={({ isActive }) => ({
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: 30,
                            height: 30,
                            color: isActive ? theme.dark.primary : 'rgba(0,0,0,0.3)'
                        })}>
                            <NavLink className={"rounded-full"} to={'/dashboard/profile'} style={({ isActive }) => ({ width: 5, height: 5, background: theme.dark.primary, opacity: isActive ? 1 : 0, transform: isActive ? "translateY(-2px)" : "translateY(5px)", transition: "ease 0.1s", position: "absolute", bottom: 0 })} />
                            <MdPerson size={30} />
                        </NavLink>
                    </IconButton>
                </div >

            </div >
        </div >
    )
}

export default Dashboard