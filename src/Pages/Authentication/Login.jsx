import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()


    const handleLogin = (e) => {
        e.preventDefault()

        navigate("/")
    }
    return (
        <div className="flex justify-center items-center">
            <div className="w-[50%] flex justify-center items-center">
                <img src="/public/Login_left_logo.jpg" alt="left_logo" className=" h-screen object-cover w-[80%]" />
            </div>
            <div className="w-[50%] flex justify-center items-center p-2 font-semibold">
                <div className="flex flex-col justify-center items-center w-[70%] p-2 gap-5 border-2 rounded-md">
                    <div className="mt-5">
                        <img src="/public/LOGO.png" alt="logo" className="w-20 h-20 object-cover" />
                    </div>
                    <div>
                        <p>Welcome Please Login to your account</p>
                    </div>
                    <div className="flex flex-col w-[70%] gap-4 p-2">
                        <button className="p-2 w-full rounded-lg border-2 border-[#B32073]">Driver</button>
                        <button className="p-2 w-full rounded-lg border-2 border-[#B32073]">House Keeper</button>
                        <button className="p-2 w-full rounded-lg border-2 border-[#B32073]">Security Guard</button>
                    </div>
                    <div className="w-[70%] p-2 flex gap-2">
                        <input type="text" name="mobile_number" id="mobile_number" className="p-2 w-[70%] border-2 rounded-lg border-gray-300 focus:outline-[#B32073] focus:outline-1 " placeholder="Enter Mobile Number"/>
                        <button className="w-[30%] p-2 border-2 rounded-lg text-[#B32073] border-[#B32073]">Send Code</button>
                    </div>
                    <div className="w-[70%] flex flex-col gap-4 p-2">
                        <h1 className="w-full">Verification Code</h1>
                        <input type="text" name="otp" id="otp" className="w-full p-2 border-2 rounded-lg border-gray-300 focus:outline-[#B32073] focus:outline-1" placeholder="Enter Code"/>
                    </div>
                    <div className="w-[70%] flex justify-center items-center p-2">
                        <button className="p-2 w-full rounded-lg border-2 border-[#B32073] flex justify-center items-center gap-2 bg-[#B32073] text-white hover:scale-95 hover:duration-300" onClick={handleLogin}>Login <FaArrowRightLong className="scale-95 duration-300"/> </button>
                    </div>
                    <div className="uppercase text-red-700">
                        <p>Login for driver</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login