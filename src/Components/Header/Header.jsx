import { NavLink } from "react-router-dom"


const Header = () => {
    return (
        <header className="font-nunito shadow-xl text-[#827A7A] font-semibold  w-full  bg-white p-2 sticky top-0 ">
            <nav className="flex w-full justify-around items-center p-2 " >
                <div>
                    <img src="/LOGO.png" alt="" className="w-14 h-14" />
                </div>
                <div className="flex justify-center items-center gap-10 p-2">

                    <div className="p-2">
                        <p>Home</p>
                    </div>


                    <NavLink to="/library">
                        <div className="p-2">
                            <p>Library</p>
                        </div>
                    </NavLink>

                    <NavLink to="/assessment">
                        <div className="p-2">
                            <p>Assessment</p>
                        </div>
                    </NavLink>
                </div>
                <div className="flex gap-5">
                    <NavLink to="/login">
                        <button className="p-2 w-28 rounded-lg border-2 border-[#B32073] hover:bg-[#B32073] hover:text-white hover:scale-85 hover:duration-300">Login</button>
                    </NavLink>
                    <button className="p-2 w-28 rounded-lg border-2 border-[#B32073] bg-[#B32073] text-white hover:scale-95 hover:duration-300 hover:bg-inherit hover:border-2 hover:border-[#B32073] hover:text-inherit">Sign Up</button>
                </div>
            </nav>
        </header>
    )
}

export default Header