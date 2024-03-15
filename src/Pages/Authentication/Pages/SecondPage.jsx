import { useState } from "react"
import { axiosInstance } from "../../../Utils/AxiosSetup"
import { errorMessage, successMessage } from "../../../Utils/NotificationManager"


const SecondPage = ({ onNext, companyList, token }) => {

    const [UploadLicense, setUploadLicense] = useState(null)
    const [fileDisplay, setFileDisplay] = useState(null)

    const [profileInputs, setProfileInputs] = useState({
        fullname: "",
        license_num: "",
        companyid: ""
    })


    console.log(token);

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



    const handleChangeProfile = (e) => {
        e.preventDefault()

        setProfileInputs({ ...profileInputs, [e.target.name]: e.target.value })

    }

    const handleSubmitProfile = async (e) => {
        e.preventDefault()

        // console.log(profileInputs);

        if(!profileInputs?.fullname){
            errorMessage("Fullname is Required")
            return
        }

        if(!profileInputs?.license_num){
            errorMessage("License Number is Required")
            return
        }

        if(UploadLicense === null){
            errorMessage("Upload License is Required")
            return
        }

        if(!profileInputs?.companyid){
            errorMessage("Company is Required")
            return
        }



        const postProfileData = new FormData()
        postProfileData.append("fullname", profileInputs?.fullname)
        postProfileData.append("license_num", profileInputs?.license_num)
        postProfileData.append("companyid", profileInputs?.companyid)
        postProfileData.append("upload_license", UploadLicense)

        try {
            const response = await axiosInstance.post("/userDetail", postProfileData, { headers: { "Content-Type": "multipart/form-data", Authorization: token } })
            const data = await response?.data
            successMessage(data.message);
            onNext()
        } catch (error) {
            errorMessage(error?.response?.data?.message)
            // console.log("Error posting profile data", error.message);
        }
    }




    return (
        <div className="flex flex-col gap-5 font-nunito font-semibold w-full mt-10 justify-center items-center">
            <div className="flex justify-center items-center ">
                <h1 className="text-2xl">Complete Profile</h1>
                {/* <button className="p-2 w-24 rounded-lg border-2 border-[#B32073] flex justify-center items-center gap-2 bg-[#B32073] text-white hover:scale-95 hover:duration-300">Close</button> */}
            </div>


            <div className="flex w-full gap-5 flex-col justify-center items-center p-2">
                <div className="grid grid-cols-2 w-[90%] gap-2 p-3">
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

                <div className="w-[90%] mt-3 shadow-xl p-2 rounded-lg flex justify-center items-center">
                    <img src={fileDisplay} alt="" className="rounded-lg object-cover w-96 h-56" />
                </div>
            </div>



            <div className="flex justify-center items-center">
                <button className="p-2 w-32 rounded-lg border-2 border-[#B32073] flex justify-center items-center gap-2 bg-[#B32073] text-white hover:scale-95 hover:duration-300" onClick={handleSubmitProfile}>Submit Profile</button>
            </div>
        </div>
    )
}

export default SecondPage