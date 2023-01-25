import { Badge, Divider, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { HiArrowLeft, HiHand, HiPhone, HiSearch } from 'react-icons/hi'
import Navbar from '../components/Navbar'
import lady from "../Assets/png/lady.jpg"
import abstract from "../Assets/png/abstarct.jpg"
import { FaPaperPlane } from 'react-icons/fa'
import theme from '../Context/themeContext'
import { BsFillCircleFill } from 'react-icons/bs'




const data = ["Idris ", "Tobi ", "Olatunbosun", "Ikeduba", "Fidelis", "Ekwe"]

const MessageCard = ({ setChatOpen, name, setCurrentMessageName }) => {
    const handleOpen = () => {
        setCurrentMessageName(name)
        setChatOpen(true)
    }


    return (
        <div onClick={handleOpen} className='flex flex-row justify-between  shadowp-lg  items-center p-3 py-5 backdrop-blur-xl  bg-[rgba(255,255,255,0.2)]  mx-2 '>
            <div className='flex flex-row justify-start items-center  gap-3 '>
                <div className='w-[50px] h-[50px] overflow-hidden rounded-[20px] bg-gray-100 '>
                    <img src={lady} alt='propfilepic' style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    }} />
                </div>
                <div>
                    <p className='font-bold text-[14px]'>{name}</p>
                    <p className='text-gray-600 text-[10px]'>lorem ipsum dolor...</p>
                </div>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center'>
                <Badge className=' bg-green-500 text-[10px] p-1 h-3 w-fit rounded-full flex flex-col justify-center items-center text-white'>2</Badge>
                <p className='text-[10px]'>12:24pm</p>
            </div>

        </div >
    )
}


const SentMessage = ({ message, seen }) => {
    return (
        <div className=' self-end relative text-white max-w-[200px]  mr-3 p-3 bg-gray-900 rounded-tl-xl rounded-tr-xl rounded-bl-xl text-[0.8em] my-3' style={{
            wordWrap: "break-word"
        }}>
            {message}
            <div className='flex flex-row justify-center gap-1 items-center absolute top-[-10px] text-gray-300 right-5' style={{
                color: seen ? "black" : "lightgray",
            }} >
                <BsFillCircleFill size={5} />
                <BsFillCircleFill size={8} />
                <BsFillCircleFill size={5} />
            </div>
        </div>
    )
}

const RecievedMessage = ({ message }) => {
    return (
        <div className=' self-start text-white relative w-fit ml-3 p-3 bg-gray-600  rounded-tr-xl rounded-br-xl rounded-bl-xl text-[0.8em] my-3'>
            {message}

        </div >
    )
}


const MessageScreen = ({ name, setOpenChat }) => {
    const [message, setMessage] = useState([])
    const [value, setValue] = useState('')

    const sendMessage = () => {
        setMessage([...message, value])
        setValue('')
    }


    return (
        <>

            <Navbar>
                <div className='z-20 flex flex-row justify-between items-center w-full'>
                    <div className='flex flex-row justify-start items-center'>
                        <IconButton onClick={() => setOpenChat(false)}>
                            <HiArrowLeft size={25} />
                        </IconButton>
                        <div className='flex flex-row justify-start items-center  gap-3 '>
                            <div className='w-[40px] h-[40px] overflow-hidden rounded-[15px] bg-gray-100 '>
                                <img src={lady} alt='propfilepic' style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }} />
                            </div>
                            <div>
                                <p className='font-bold text-[14px]'>{name}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <IconButton style={{
                            background: "whitesmoke",
                            marginRight: 10
                        }}>
                            <HiPhone size={25} />
                        </IconButton>
                    </div>
                </div>
            </Navbar >
            <div className='flex flex-col pb-[10rem]'>
                <RecievedMessage message={"Hey bro"} />
                <RecievedMessage message={'i am doing Fine'} />
                {message.map((msg, key) => (
                    <SentMessage key={key} message={msg} seen={false} />
                ))}
            </div>
            <div className='fixed bottom-[65px] bg-white p-5 w-full'>
                <div className='flex flex-row justify-start gap-3 items-center'>
                    <div className='flex-1 '>

                        <input className='bg-gray-200 pl-5 w-full h-10 rounded-full' type={"text"} placeholder={"type message..."} value={value} onChange={e => setValue(e.target.value)} />
                    </div>

                    <div>
                        <IconButton onClick={sendMessage} style={{
                            background: theme.dark.primary,
                            color: "white",
                            width: 50,
                            height: 50,
                            boxShadow: "0px 5px 10px rgba(200,20,0,0.2)"
                        }}>
                            <FaPaperPlane />
                        </IconButton>
                    </div>
                </div>
            </div>

        </>
    )
}


function Messages() {
    const [openChat, setOpenChat] = useState(false)
    const [currentMessage, setCurrentMessageName] = useState("")
    return (

        <>

            {openChat ? (

                <MessageScreen setOpenChat={setOpenChat} name={currentMessage} />
            ) : (
                <div className='relative h-screen overflow-y-scroll'>
                    {/* <img src={abstract} className="blur-xl" alt="bg" style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "fixed",
                        top: 0,
                    }} /> */}
                    <Navbar>
                        <div className='z-20 px-2 flex flex-row justify-between items-center w-full'>
                            <div>
                                <h1 className='text-[1.2rem] font-bold'>Messages</h1>
                            </div>
                            <div>
                                <IconButton style={{
                                    background: "black",
                                    color: "white"
                                }}>
                                    <HiHand size={25} />
                                </IconButton>
                            </div>
                        </div>
                    </Navbar>
                    {data.map((item, key) => (
                        <>
                            <MessageCard key={key} setCurrentMessageName={setCurrentMessageName} setChatOpen={setOpenChat} name={item} />
                            <Divider />
                        </>
                    ))}

                </div>

            )}
        </ >
    )
}

export default Messages