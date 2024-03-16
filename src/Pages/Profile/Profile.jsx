import { useEffect, useRef, useState } from "react"
import { axiosInstance } from "../../Utils/AxiosSetup"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import { errorMessage, successMessage } from "../../Utils/NotificationManager"
import Loader from "../../Utils/Loader"


const Profile = () => {

    const [UploadLicense, setUploadLicense] = useState(null)
    const [fileDisplay, setFileDisplay] = useState(null)
    const [profileInputs, setProfileInputs] = useState({
        fullname: "",
        license_num: "",
        email: "",
        mobile: ""

    })

    const [loader, setLoader] = useState(false)



    const [profilePicture, setProfilePicture] = useState(null)
    const [displayProfilePicture, setDisplayProfilePicture] = useState(null)

    const fileRef = useRef()



    const handleChangeProfile = (e) => {
        e.preventDefault()

        setProfileInputs({ ...profileInputs, [e.target.name]: e.target.value })

    }

    const handleUploadProfilePicture = (e) => {
        e.preventDefault()

        fileRef.current.click()



    }

    // console.log(fileRef);

    const handleChangeProfilePhoto = (e) => {
        e.preventDefault()

        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            // console.log(reader);
            reader.onloadend = () => {
                setDisplayProfilePicture(reader.result)
            }
            reader.readAsDataURL(file);
        }
        setProfilePicture(file)


    }

    const handleChangeProfileImage = (e) => {
        e.preventDefault()

        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            // console.log(reader);
            reader.onloadend = () => {
                setFileDisplay(reader.result)
            }
            reader.readAsDataURL(file);
        }
        setUploadLicense(file)


    }

    const UploadProfile = async (e) => {
        e.preventDefault()

        const PostProfile = new FormData()
        PostProfile.append("fullname", profileInputs?.fullname)
        PostProfile.append("license_num", profileInputs?.license_num)
        PostProfile.append("email", profileInputs?.email)
        PostProfile.append("mobile", profileInputs?.mobile)
        PostProfile.append("upload_license", UploadLicense)
        PostProfile.append("upload_profile", profilePicture)

        try {
            setLoader(true)
            const response = await axiosInstance.post("/profileUpdate", PostProfile, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            const data = await response?.data
            // console.log(data.message);
            successMessage(data?.message)
            fetchProfile()
            // navigate("/")
            setLoader(false)
        } catch (error) {
            setLoader(false)
            errorMessage(error?.response?.data?.message)
            // console.log("Error Posting Profile Details", error.message);
        }
    }


    const fetchProfile = async () => {
        try {
            setLoader(true)
            const response = await axiosInstance.get("/getprofile")
            const data = await response?.data

            successMessage(data?.message)
            setProfileInputs(data?.user);
            setDisplayProfilePicture(data?.user?.upload_profile);
            setFileDisplay(data?.user?.upload_license);
            setLoader(false)
        } catch (error) {
            setLoader(false)
            errorMessage(error?.response?.data?.message)
            // console.log("Error Fetching Profile", error.message);
        }
    }

    useEffect(() => {
        fetchProfile()
    }, [])
    return (
        <div>
            <Header />
            {
                loader ? <Loader /> :

                    <div className="flex flex-col gap-5 font-nunito font-semibold w-[80%] justify-center items-center my-10 mx-44 p-5 shadow-xl rounded-lg max-sm:w-full max-sm:m-0">

                        <div className="flex flex-col gap-5 justify-center items-center p-2 w-96 max-sm:w-full" data-aos="fade-down">
                            <img src={displayProfilePicture} alt="" className="w-32 h-32 rounded-full border-2" />
                            <input type="file" name="upload_profile" id="upload_profile" ref={fileRef} onChange={handleChangeProfilePhoto} className="hidden" />
                            <p className="text-[#B32073] cursor-pointer p-2" onClick={handleUploadProfilePicture}>Upload Profile</p>
                        </div>

                        <div className="flex justify-center items-center  w-full p-2 max-sm:flex-col">
                            <div className="grid grid-cols-2 w-[60%] p-5 gap-5 max-sm:grid-cols-1 max-sm:w-full" data-aos="fade-right">
                                <div className="flex flex-col p-2 gap-3">
                                    <label htmlFor="">Full name</label>
                                    <input type="text" name="fullname" id="fullname" className="p-3 border-2 border-gray-600 rounded-lg focus:outline-[#B32073]" onChange={handleChangeProfile} value={profileInputs?.fullname} />
                                </div>

                                <div className="flex flex-col p-2 gap-3">
                                    <label htmlFor="">License Number</label>
                                    <input type="text" name="license_num" id="license_num" className="p-3  border-2 border-gray-600 rounded-lg focus:outline-[#B32073]" onChange={handleChangeProfile} value={profileInputs?.license_num} />
                                </div>

                                <div className="flex flex-col p-2 gap-3">
                                    <label htmlFor="">Email</label>
                                    <input type="text" name="email" id="email" className="p-3  border-2 border-gray-600 rounded-lg focus:outline-[#B32073]" onChange={handleChangeProfile} value={profileInputs?.email} />
                                </div>

                                <div className="flex flex-col p-2 gap-3">
                                    <label htmlFor="">Mobile Number</label>
                                    <input type="text" name="mobile" id="mobile" className="p-3 border-2 border-gray-600 rounded-lg focus:outline-[#B32073]" onChange={handleChangeProfile} value={profileInputs?.mobile} />
                                </div>



                                {/* <div className="flex flex-col p-2 gap-3">
                                        <label htmlFor="">Company</label>
                                        <select name="companyid" id="companyid" className="p-3 border-2 border-gray-600 rounded-lg focus:outline-[#B32073]" onChange={handleChangeProfile}>
                                            <option value="">Choose Company</option>
                                            {
                                                companyList?.map((item, index) => {
                                                    return (
                                                        <option value={item?._id} key={index}>{item?.name}</option>
                                                    )
                                                })
                                            }

                                        </select>
                                    </div> */}
                            </div>

                            <div className="w-[40%] mt-3 border-2 p-2 rounded-lg max-sm:w-full" data-aos="fade-left">
                                <img src={fileDisplay} alt="" className="rounded-lg object-cover w-full h-52" />

                                <div className="flex flex-col p-2 gap-3">
                                    <label htmlFor="">Upload License</label>
                                    <input type="file" name="upload_license" id="upload_license" className="p-3 border-2 border-gray-600 rounded-lg focus:outline-[#B32073]" onChange={handleChangeProfileImage} />
                                    {/* <p className="text-[#B32073] cursor-pointer p-2" onClick={handleUploadProfilePicture}>Upload License</p> */}
                                </div>
                            </div>
                        </div>



                        <div className="flex justify-center items-center">
                            <button className="p-2 w-32 rounded-lg border-2 border-[#B32073] flex justify-center items-center gap-2 bg-[#B32073] text-white hover:scale-95 hover:duration-300" onClick={UploadProfile}>Update Profile</button>
                        </div>
                    </div>
            }
            <Footer />
        </div>
    )
}

export default Profile