import { FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom"
import "./Header.css"
import { useEffect, useState } from "react"
import { IoMdNotificationsOutline } from "react-icons/io"
import { Drawer } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { errorMessage } from "../../Utils/NotificationManager";
import { axiosInstance } from "../../Utils/AxiosSetup";

const Header = () => {
    const navigate = useNavigate()

    const [profileClick, setProfileClick] = useState(false)
    const [state, setState] = useState({ right: false })
    const [notificationList, setNotificationList] = useState([])


    const token = JSON.parse(localStorage.getItem("token"))
    // console.log(token);

    const style = {
        position: 'absolute',
        top: '42%',
        left: '68%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        p: 2,
        border: '1px solid #910033',
    };

    const fetchNotification = async () => {
        try {
            const response = await axiosInstance.get("/notification/fetch")
            const data = await response?.data
            setNotificationList(data?.notifications);
        } catch (error) {
            errorMessage(error?.response?.data?.message)
        }
    }







    const handleLogout = (e) => {
        e.preventDefault()

        localStorage.clear()
        navigate("/login")
    }

    useEffect(() => {
        fetchNotification()
    }, [])
    return (
        <header className="font-nunito shadow-xl text-[#827A7A] font-semibold  w-full  bg-white p-2 sticky top-0 z-10" data-aos="fade-down">
            <nav className="flex w-full justify-around items-center p-2 " >
                <div onClick={() => navigate("/")}>
                    <img src="/LOGO.png" alt="" className="w-16 h-16 cursor-pointer" />
                </div>
                <div className="flex justify-center items-center gap-10 px-2">

                    <NavLink to="/" className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "py-1 border-b-2 border-[#B32073]  border-opacity-100 text-[#B32073] duration-200 cursor-pointer max-sm:text-xs" : ""
                    }>
                        <div className="p-2">
                            <p>Home</p>
                        </div>
                    </NavLink>

                    <NavLink to="/category" className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "py-1 border-b-2 border-[#B32073]  border-opacity-100 text-[#B32073] duration-200 cursor-pointer max-sm:text-xs" : ""
                    }>
                        <div className="p-2">
                            <p>Videos</p>
                        </div>
                    </NavLink>


                    <NavLink to="/library" className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "py-1 border-b-2 border-[#B32073]  border-opacity-100 text-[#B32073] duration-200 cursor-pointer max-sm:text-xs" : ""
                    }>
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
                    token ? <div className="flex gap-10 justify-center items-center">

                        {/* <button className="p-2 w-28 rounded-lg border-2 border-[#B32073] hover:bg-[#B32073] hover:text-white hover:scale-85 hover:duration-300" type="button" onClick={handleLogout}>Logout</button>

                        <button className="p-2 w-28 rounded-lg border-2 border-[#B32073] bg-[#B32073] text-white hover:scale-95 hover:duration-300 hover:bg-inherit hover:border-2 hover:border-[#B32073] hover:text-inherit" onClick={() => navigate("/profile")}>Profile</button> */}

                        <div className="text-3xl cursor-pointer" onClick={() => setState((prevState) => ({ ...prevState, right: true }))}>
                            <p><IoMdNotificationsOutline /></p>
                        </div>

                        <div>
                            <button className=" p-2 w-36 rounded-lg border-2 border-[#B32073] bg-[#B32073] text-white hover:scale-95 hover:duration-300 hover:bg-inherit hover:border-2 hover:border-[#B32073] hover:text-inherit flex justify-center items-center gap-2" onClick={() => setProfileClick(!profileClick)}><FaUser />My Profile</button>

                            {
                                profileClick && (
                                    <div className=" absolute  mt-10 w-36 z-10 bg-[#B32073] rounded-lg text-white" data-aos="fade-left">
                                        <ul className="flex flex-col p-2 gap-3 justify-center items-center ">
                                            <li onClick={() => navigate("/profile")} className="cursor-pointer">Profile</li>
                                            <li className="cursor-pointer" onClick={() => navigate("/certificate")}>Certificate</li>
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
                        <NavLink to="/register">
                            <button className="p-2 w-28 rounded-lg border-2 border-[#B32073] bg-[#B32073] text-white hover:scale-95 hover:duration-300 hover:bg-inherit hover:border-2 hover:border-[#B32073] hover:text-inherit">Sign Up</button>
                        </NavLink>
                    </div>
                }
            </nav>

            <div>
                <Drawer
                    anchor="right"
                    open={state.right}
                    classes={{
                        paper: { ...style },
                    }}
                    PaperProps={{
                        sx: { width: "30%" },
                    }}
                >
                    <div>
                        <div className="flex justify-between items-center w-full font-semibold px-4">
                            <h1 className="text-2xl mt-4">Notifications</h1>
                            <button className="p-2 w-10 h-10 flex justify-center items-center text-center rounded-full border-2 border-[#B32073] bg-[#B32073] text-white hover:scale-95 hover:duration-300 hover:bg-inherit hover:border-2 hover:border-[#B32073] hover:text-gray-500 mt-4" onClick={() => { setState((prevState) => ({ ...prevState, right: false })) }
                            }><CloseIcon /></button>
                        </div>

                        <div className="mt-10 flex justify-center items-center w-full gap-2 flex-col">
                            {notificationList?.map((notification, index) => {
                                return (
                                    <div key={index} className="flex flex-col p-5 font-semibold shadow-xl border-2 w-full">
                                        <div className="flex justify-between items-center capitalize">
                                            <h1 className="text-sm">{notification?.title}</h1>
                                            <p className="text-xs">{notification?.time}</p>
                                        </div>
                                        <div className="flex justify-between items-center capitalize text-xs">
                                            <p>{notification?.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </Drawer>
            </div>


        </header>
    )
}

export default Header