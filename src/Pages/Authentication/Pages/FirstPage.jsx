import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import { Box, Modal } from "@mui/material";
import { axiosInstance } from "../../../Utils/AxiosSetup";
import { errorMessage, successMessage } from "../../../Utils/NotificationManager";


const FirstPage = ({ onNext, onCompanyListChange, token }) => {
    const navigate = useNavigate()

    const [activeButton, setActiveButton] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [phone, setPhone] = useState("")
    const [companyList, setCompanyList] = useState([])
    const [UploadLicense, setUploadLicense] = useState(null)
    const [fileDisplay, setFileDisplay] = useState(null)

    

    const [profileInputs, setProfileInputs] = useState({
        fullname: "",
        license_num: "",
        companyid: ""
    })

    const [otp, setOtp] = useState("")


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'background.paper',
        border: '2px solid transparent',
        boxShadow: 24,
        overflowY: 'auto',
        p: 4,
    };

    const handleClick = (e) => {
        e.preventDefault()

        setActiveButton(e.target.textContent)
    }

    const handleChange = (e) => {
        e.preventDefault()

        setPhone(e.target.value)
    }

    const handleChangeProfile = (e) => {
        e.preventDefault()

        setProfileInputs({ ...profileInputs, [e.target.name]: e.target.value })

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


    // console.log(otp);





    const AddPhoneNumber = async (e) => {
        e.preventDefault()

        if (activeButton === null) {
            errorMessage("Role is Required")
            return
        }

        if (!phone) {
            errorMessage("Phone Number is Required")
            return
        } else if(phone.length > 10 || phone.length < 10){
            errorMessage("Enter 10 digit mobile number ")
            return
        }
        
        const formData = new FormData()
        formData.append("role", activeButton?.toLowerCase()?.trim())
        formData.append("phone", phone)

        try {
            const response = await axiosInstance.post("/addphone", formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response?.data
            successMessage(data?.message);
        } catch (error) {
            errorMessage(error?.response?.data?.message)
            // console.log("error posting data", error.message);
        }
    }

    const SendOtp = async (e) => {
        e.preventDefault()

        if (!phone) {
            errorMessage("Phone is Required")
            return
        } else if(phone.length > 10 || phone.length < 10){
            errorMessage("Enter 10 digit mobile number ")
            return
        }

        if (!otp) {
            errorMessage("Otp is Required")
            return
        } else if(otp.length > 4 || otp.length < 4){
            errorMessage("Otp contains 4 digits")
            return
        }

        const postOtp = new FormData()
        postOtp.append("otp", otp)
        postOtp.append("phone", phone)

        try {
            const response = await axiosInstance.post("/verifyOtp", postOtp, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response?.data
            // console.log(data);
            setCompanyList(data?.companiesdata)
            token(data?.accessToken)
            localStorage.setItem("user", JSON.stringify(data?.user))
            localStorage.setItem("token", JSON.stringify(data?.accessToken))

            onCompanyListChange(data?.companiesdata)
            
            onNext()

            // setIsModalOpen(true)
            // console.log(data);
            successMessage("Otp Verify Success")

          
            // navigate("/")
        } catch (error) {

            console.log("error posting otp", error.message);
        }
    }


    const UploadProfile = async (e) => {
        e.preventDefault()

        const PostProfile = new FormData()
        PostProfile.append("fullname", profileInputs?.fullname)
        PostProfile.append("license_num", profileInputs?.license_num)
        PostProfile.append("companyid", profileInputs?.companyid)
        PostProfile.append("upload_license", UploadLicense)

        try {
            const response = await axiosInstance.post("/userDetail", PostProfile, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            const data = await response?.data
            successMessage(data?.message)
            navigate("/")

        } catch (error) {
            errorMessage(error?.response?.data?.message)
            // console.log("Error Posting Profile Details", error.message);
        }
    }

    const handleNavigateRegister = (e) => {
        e.preventDefault()

        navigate("/login")
    }





    // const handleLogin = (e) => {
    //     e.preventDefault()
    //     SendOtp()
    //     navigate("/login")
    // }
    return (
        <div className="flex justify-center items-center font-poppins ">
            {/* <div className="w-[50%] flex justify-center items-center">
                <img src="/Login_left_logo.jpg" alt="left_logo" className=" h-screen object-cover w-[80%]" />
            </div> */}
            <div className="flex justify-center items-center p-2 font-semibold w-full">
                <div className="flex flex-col justify-center items-center w-[90%] p-2 gap-5  rounded-md">
                    <div className="mt-5">
                        <img src="/LOGO.png" alt="logo" className="w-20 h-20 object-cover" />
                    </div>
                    <div>
                        <p>Welcome Please Register to your account</p>
                    </div>
                    <div className="flex flex-col w-[70%] gap-4 p-2">
                        <button className={`p-2 w-full rounded-lg border-2 border-[#B32073] ${activeButton == "Driver" ? "bg-[#B32073] text-white" : ""}`} onClick={handleClick}>Driver</button>
                        <button className={`p-2 w-full rounded-lg border-2 border-[#B32073] ${activeButton == "House Keeper" ? "bg-[#B32073] text-white" : ""}`} onClick={handleClick}>House Keeper</button>
                        <button className={`p-2 w-full rounded-lg border-2 border-[#B32073] ${activeButton == "Security Guard" ? "bg-[#B32073] text-white" : ""}`} onClick={handleClick}>Security Guard</button>

                        {/* className={({ isActive, isPending }) => isPending ? "flex  flex-row items-center duration-300 hover:shadow-xl hover:scale-105 hover:text-[#B32073]  pr-6" : isActive ? "flex text-[#B32073] flex-row items-center duration-300 scale-105 pr-6 bg-gray-300  rounded hover:text-[#B32073] hover:shadow-xl " : "text-gray-500"} */}



                    </div>
                    <div className="w-[70%] p-2 flex gap-2">
                        <input type="text" name="phone" id="phone" className="p-2 w-[70%] border-2 rounded-lg border-gray-300 focus:outline-[#B32073] focus:outline-1 " placeholder="Enter Mobile Number" onChange={handleChange} />
                        <button className="w-[30%] p-2 border-2 rounded-lg text-[#B32073] border-[#B32073] hover:bg-[#B32073] hover:text-white" onClick={AddPhoneNumber}>Send Code</button>
                    </div>
                    <div className="w-[70%] flex flex-col gap-4 p-2">
                        <h1 className="w-full">Verification Code</h1>
                        <input type="text" name="otp" id="otp" className="w-full p-2 border-2 rounded-lg border-gray-300 focus:outline-[#B32073] focus:outline-1" placeholder="Enter Code" onChange={(e) => setOtp(e.target.value)} />
                    </div>
                    <div className="w-[70%] flex justify-center items-center p-2">
                        <button className="p-2 w-full rounded-lg border-2 border-[#B32073] flex justify-center items-center gap-2 bg-[#B32073] text-white hover:scale-95 hover:duration-300" onClick={SendOtp}>Verify Otp <FaArrowRightLong className="scale-95 duration-300" /> </button>
                    </div>
                    <div className="uppercase text-red-700">
                        <p onClick={handleNavigateRegister} className="cursor-pointer">Already have an account, Login here</p>
                    </div>
                </div>
            </div>

            <div>
                <Modal
                    open={isModalOpen}
                >
                    <Box sx={style}>
                        <div className="flex flex-col gap-5 font-nunito font-semibold">
                            <div className="flex justify-between items-center ">
                                <h1 className="text-2xl">Complete Profile</h1>
                                <button className="p-2 w-24 rounded-lg border-2 border-[#B32073] flex justify-center items-center gap-2 bg-[#B32073] text-white hover:scale-95 hover:duration-300" onClick={() => setIsModalOpen(false)}>Close</button>
                            </div>
                            <div className="flex w-full gap-5">
                                <div className="grid grid-cols-2 w-[60%]">
                                    <div className="flex flex-col p-2 gap-3">
                                        <label htmlFor="">Full name</label>
                                        <input type="text" name="fullname" id="fullname" className="p-3 border-2 border-gray-600 rounded-lg focus:outline-[#B32073]" onChange={handleChangeProfile} />
                                    </div>

                                    <div className="flex flex-col p-2 gap-3">
                                        <label htmlFor="">License Number</label>
                                        <input type="text" name="license_num" id="license_num" className="p-3 border-2 border-gray-600 rounded-lg focus:outline-[#B32073]" onChange={handleChangeProfile} />
                                    </div>

                                    <div className="flex flex-col p-2 gap-3">
                                        <label htmlFor="">Upload License</label>
                                        <input type="file" name="upload_license" id="upload_license" className="p-3 border-2 border-gray-600 rounded-lg focus:outline-[#B32073]" onChange={handleChangeProfileImage} />
                                    </div>

                                    <div className="flex flex-col p-2 gap-3">
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
                                    </div>
                                </div>

                                <div className="w-[40%] mt-3 shadow-xl p-2 rounded-lg">
                                    <img src={fileDisplay} alt="" className="rounded-lg object-cover w-96 h-44" />
                                </div>
                            </div>



                            <div className="flex justify-center items-center">
                                <button className="p-2 w-32 rounded-lg border-2 border-[#B32073] flex justify-center items-center gap-2 bg-[#B32073] text-white hover:scale-95 hover:duration-300" onClick={UploadProfile}>Submit Profile</button>
                            </div>
                        </div>
                    </Box>
                </Modal>
            </div>

        </div>
    )
}

export default FirstPage