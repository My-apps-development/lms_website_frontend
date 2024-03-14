import { FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom"
import "./Header.css"
import { useState } from "react"


const Header = () => {
    const navigate = useNavigate()

    const [profileClick, setProfileClick] = useState(false)


    const token = JSON.parse(localStorage.getItem("token"))
    console.log(token);




    const handleLogout = (e) => {
        e.preventDefault()

        localStorage.clear()
        navigate("/login")
    }
    return (
        <header className="font-nunito shadow-xl text-[#827A7A] font-semibold  w-full  bg-white p-2 sticky top-0 z-10" data-aos="fade-down">
            <nav className="flex w-full justify-around items-center p-2 " >
                <div onClick={() => navigate("/")}>
                    <img src="/LOGO.png" alt="" className="w-14 h-14 cursor-pointer" />
                </div>
                <div className="flex justify-center items-center gap-10 p-2">

                    <NavLink to="/">
                        <div className="p-2">
                            <p>Home</p>
                        </div>
                    </NavLink>

                    <NavLink to="/category">
                        <div className="p-2">
                            <p>Videos</p>
                        </div>
                    </NavLink>


                    <NavLink to="/library">
                        <div className="p-2">
                            <p>Library</p>
                        </div>
                    </NavLink>
{/* 
                    <NavLink to="/assessment">
                        <div className="p-2">
                            <p>Assessment</p>
                        </div>
                    </NavLink> */}
                </div>
                {
                    token ? <div className="flex gap-5">

                        {/* <button className="p-2 w-28 rounded-lg border-2 border-[#B32073] hover:bg-[#B32073] hover:text-white hover:scale-85 hover:duration-300" type="button" onClick={handleLogout}>Logout</button>

                        <button className="p-2 w-28 rounded-lg border-2 border-[#B32073] bg-[#B32073] text-white hover:scale-95 hover:duration-300 hover:bg-inherit hover:border-2 hover:border-[#B32073] hover:text-inherit" onClick={() => navigate("/profile")}>Profile</button> */}

                        <div>
                            <button className=" p-2 w-36 rounded-lg border-2 border-[#B32073] bg-[#B32073] text-white hover:scale-95 hover:duration-300 hover:bg-inherit hover:border-2 hover:border-[#B32073] hover:text-inherit flex justify-center items-center gap-2" onClick={() => setProfileClick(!profileClick)}><FaUser />My Profile</button>

                            {
                                profileClick && (
                                    <div className=" absolute  mt-10 w-36 z-10 bg-[#B32073] rounded-lg text-white" data-aos="fade-left">
                                        <ul className="flex flex-col p-2 gap-3 justify-center items-center ">
                                            <li onClick={() => navigate("/profile")} className="cursor-pointer">Profile</li>
                                            <li className="cursor-pointer">Certificate</li>
                                            <li className="cursor-pointer" onClick={handleLogout}>Logout</li>
                                        </ul>
                                    </div>
                                )
                            }
                        </div>

                    </div> : <div className="flex gap-5">
                        <NavLink to="/login">
                            <button className="p-2 w-28 rounded-lg border-2 border-[#B32073] hover:bg-[#B32073] hover:text-white hover:scale-85 hover:duration-300">Login</button>
                        </NavLink>
                        <button className="p-2 w-28 rounded-lg border-2 border-[#B32073] bg-[#B32073] text-white hover:scale-95 hover:duration-300 hover:bg-inherit hover:border-2 hover:border-[#B32073] hover:text-inherit">Sign Up</button>
                    </div>
                }
            </nav>


        </header>
    )
}

export default Header