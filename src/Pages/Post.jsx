import { Alert, CircularProgress } from '@mui/material'
import React, { useContext, useState } from 'react'
import { MdError, MdHourglassEmpty } from 'react-icons/md'
import CustomButton from '../components/CustomButton'
import ModalPopup from '../components/ModalPopup'
import { useNavigate } from 'react-router-dom'
import { db, storage } from '../firebse_config'
import { arrayUnion, doc, setDoc, updateDoc } from 'firebase/firestore'
import { Authenticator } from '../Context/firebaseContext'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'

function Post() {
    const [showPopup, setShowPopUp] = useState(false)
    const [postText, setPostText] = useState("")
    const [postImagePreview, setPostImagePreview] = useState("")
    const [postImage, setPostImage] = useState(null)
    const [imageError, setImageError] = useState(false)
    const [uploadComplete, setUploadComplete] = useState(true)
    const navigate = useNavigate()

    const currentUser = useContext(Authenticator)


    const handleUpload = (e) => {
        if (e.target.files[0].type === "image/png" || e.target.files[0].type === "image/jpg" || e.target.files[0].type === "image/jpeg") {
            setImageError(false)
            setPostImage(e.target.files[0])
            setPostImagePreview(URL.createObjectURL(e.target.files[0]))
        }
        else {
            setPostImage(null)
            setImageError(true)
            setPostImagePreview("")
        }
    }





    const StartUpload = async () => {
        setShowPopUp(false)
        if (currentUser === null) {
            console.log("loading")
        } else {

            if (postImage === null) return;
            const imageRef = ref(storage, `images/${postImage + v4()}`)
            setUploadComplete(false)
            uploadBytes(imageRef, postImage).then(() => {
                getDownloadURL(imageRef).then((url) => {
                    updateDoc(doc(db, "users", currentUser.uid), {
                        posts: arrayUnion(
                            {
                                caption: postText,
                                image: url
                            }
                        ),
                        bio: "",
                        profilePic: currentUser.photoURL
                    })
                    console.log("posted")
                    setUploadComplete(true)
                    navigate("/dashboard/home")

                })
            }).catch((e) => console.log(e))

        }

    }

    return (
        <div>
            <div className='ml-5 mt-20'>
                <h1 className='font-bold pb-10 text-[2em]'>Enter Your Post</h1>

                <div>
                    <textarea className='border-2 w-[90%] h-[10em] pl-2' value={postText} onChange={(e) => setPostText(e.target.value)} placeholder='Say something...' />
                </div>
                <div className='pt-5 pb-2'>
                    <p className='pb-5'>Add Image File  <span className=' text-red-800 '>Supported: png, jpg, jpeg </span></p>

                    <input type="file" style={{
                        border: imageError ? "solid 2px red" : "solid 2px lightgreen"
                    }} onChange={(e) => handleUpload(e)} />


                    {postImagePreview !== "" && (<img className='mt-5' src={postImagePreview} style={{
                        width: 100,
                        height: 100,
                        objectFit: "cover"
                    }} />)}

                    {imageError === true && (<Alert icon={<MdError />} color='error' className='absolute top-0 left-0'>Image Format not supported, please, upload, <span className='text-red-500'>png, jpg, or jpeg file</span></Alert>)}
                </div>
            </div>
            <div className='mt-10 w-fit ml-5' onClick={() => setShowPopUp(true)} >
                <CustomButton title={"Post"} />
            </div>
            {
                postText === "" || postImagePreview === "" ? (<ModalPopup active={showPopup} setActive={setShowPopUp}>
                    <div className='w-[20em]  h-fit py-5 flex flex-col justify-center items-center '>
                        <MdHourglassEmpty size={30} className={"text-red-500"} />
                        <h1 className='mt-2 font-bold text-red-500'>Pls Fill up the Post Form !!</h1>

                    </div>
                </ModalPopup>) : (<ModalPopup active={showPopup} setActive={setShowPopUp}>
                    <div className='w-[20em]  h-fit py-5 flex flex-col justify-center items-center '>
                        <h1>Are You Sure You want to post?</h1>
                        <div className='flex w-full mt-5 flex-row gap-2 justify-evenly items-center'>
                            <div onClick={() => StartUpload()}>

                                <CustomButton title={"Yes"} />
                            </div>



                            <div onClick={() => setShowPopUp(false)}>
                                <CustomButton title={"No"} />
                            </div>
                        </div>
                    </div>
                </ModalPopup>)
            }
            {uploadComplete === false && (
                <ModalPopup active={true}>
                    <div className='w-fit h-fit p-5 flex flex-col justify-center items-center
                    '>
                        <CircularProgress />
                        <p>
                            Uploading
                        </p>
                    </div>
                </ModalPopup>
            )}
        </div>
    )
}

export default Post
