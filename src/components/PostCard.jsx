import { Avatar, Button, Card, CardHeader, CardMedia, IconButton } from '@mui/material'
import React from 'react'
import img from "../Assets/png/work.jpg"
import img2 from "../Assets/png/lady2.jpg"
import { FaCommentDots, FaEye, FaHeart, FaShare } from "react-icons/fa"
import { MdCircle } from 'react-icons/md'
import theme from '../Context/themeContext'

function PostCard() {
    return (

        <div className='flex flex-col justify-center gap-2 p-3 items-start w-[95%] h-[400px] shadow-2xl backdrop-blur-2xl  shadow-[#5f585c3f] rounded-[10px] bg-[#ffffff] ' style={{
            boxShadow: "0px -5px 40px rgba(100, 100, 100, 0.1)"
        }}>
            <header className='h-fit w-full flex flex-row justify-between items-center'>
                <div className="flex flex-row gap-3 justify-start items-center">
                    <div className='w-[40px] h-[40px] overflow-hidden bg-gray-300 rounded-[10px]'>
                        <img src={img2} alt="profilePic" style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center"
                        }} />
                    </div>
                    <div>
                        <h3 className='truncate w-[150px] text-[14px] font-bold'>Adewale Michael </h3>
                        <p className='text-[10px] flex flex-row justify-start items-center'> Lagos, Nigeria</p>
                    </div>
                </div>
                <div>
                    <Button className='shadow-2xl' style={{
                        background: "black",
                        color: "white",
                        padding: "10px 20px",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        borderRadius: 10,
                        textTransform: "capitalize",
                        boxShadow: "0px 5px 15px rgba(150,150,150,0.4)",

                        fontSize: "12px"
                    }}>
                        Connect
                    </Button>
                </div>
            </header>
            <div className='flex-1 overflow-hidden bg-gray-200 rounded-tr-2xl rounded-bl-2xl w-full'>
                <img src={img} alt="image" style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center"
                }} />
            </div>
            <div className='h-[60px] overflow-hidden relative ' >
                <div className='absolute z-10 top-0 w-full h-full' style={{
                    background: "linear-gradient(rgba(255,255,255,0),rgba(255,255,255,1))"
                }}>

                </div>
                <blockquote className='text-[12px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vero fugit numquam distinctio reprehenderit rem vitae, corporis iusto. Illo, placeat? Voluptas consequatur placeat rem error quos. Nobis fugit quidem sit.
                </blockquote>
            </div>
            <footer className=' h-fit w-full flex flex-row justify-between items-center'>
                <div className="flex">
                    <IconButton style={{
                        borderRadius: 20
                    }} >
                        <FaCommentDots size={15} color={"rgb(0,150,200)"} className={"shadow-2xl backdrop-blur-3xl  rounded-full shadow-[rgba(0,150,200,0.4)]"} style={{
                            boxShadow: "0px 5px 15px rgba(0,150,200,0.4)",
                            background: "rgba(0,150,200,0.14)"
                        }} />
                        <p className=' text-[12px] ml-2'>20</p>
                    </IconButton>
                    <IconButton style={{
                        borderRadius: 20
                    }} >
                        <FaHeart size={15} color={"red"} className={"shadow-2xl backdrop-blur-3xl  rounded-full shadow-[rgba(255,0,0,0.4)]"} style={{
                            boxShadow: "0px 5px 15px rgba(255,0,0,0.4)",
                            background: "rgba(255,0,0,0.14)"
                        }} />
                        <p className=' text-[12px] ml-2'>20</p>
                    </IconButton>
                    <IconButton style={{
                        borderRadius: 20
                    }} >
                        <FaEye size={15} className={"shadow-2xl backdrop-blur-3xl bg-[rgba(100,200,0,0.14)] rounded-full shadow-[rgba(100,200,0,0.4)]"} color={"rgb(100,200,0)"} style={{
                            boxShadow: "0px 5px 15px rgba(100,200,0,0.4)",
                            background: "rgba(100,200,0,0.14)"
                        }} />
                        <p className=' text-[12px] ml-2'>20</p>
                    </IconButton>
                </div>
                <IconButton>
                    <FaShare size={20} />
                </IconButton>
            </footer>
        </div>

    )
}

export default PostCard
