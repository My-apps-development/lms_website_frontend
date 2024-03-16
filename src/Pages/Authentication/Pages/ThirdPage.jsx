import { useState } from "react"
import { axiosInstance } from "../../../Utils/AxiosSetup"
import { errorMessage, successMessage } from "../../../Utils/NotificationManager"


const ThirdPage = ({ token }) => {

    const [language, setLanguage] = useState("")

    const postLanguage = async (e) => {
        e.preventDefault()

        if(!language){
            errorMessage("Language is Required")
            return
        }

        const formData = new FormData()
        formData.append("language", language)

        try {
            const response = await axiosInstance.post("/userlanguage", formData, { headers: { "Content-Type": "application/json", Authorization: token } })
            const data = await response?.data
            successMessage(data?.message);
        } catch (error) {
            errorMessage(error?.response?.data?.message)
            // console.log("Error posting Language", error.message);
        }
    }


    return (
        <div>
            <div className="flex justify-center items-center px-4 py-2 w-[90%] flex-col h-[550px] max-sm:w-full">
                <div className="flex flex-col gap-3 p-3 w-[90%] max-sm:w-full">
                    <label htmlFor="">Languages <span className="text-red-500">*</span></label>
                    {/* <input type="text" name="language" id="language" className="p-3 border-2 border-gray-600 rounded-lg focus:outline-[#B32073]" /> */}
                    <select name="language" id="language" className="p-3 border-2 border-gray-600 rounded-lg focus:outline-[#B32073]" onChange={(e) => setLanguage(e.target.value)}>
                        <option value="">Choose Language</option>
                        <option value="हिंदी">हिंदी</option>
                        <option value="తెలుగు">తెలుగు</option>
                        <option value="English">English</option>
                        <option value="ಕನ್ನಡ">ಕನ್ನಡ</option>
                        <option value="தமிழ்">தமிழ்</option>
                    </select>
                </div>
                <div className="flex justify-center items-center p-3 mt-10 w-[90%]">
                    <button className="p-2 w-32 rounded-lg border-2 border-[#B32073] flex justify-center items-center gap-2 bg-[#B32073] text-white hover:scale-95 hover:duration-300" onClick={postLanguage}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default ThirdPage