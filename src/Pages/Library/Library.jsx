import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect } from "react";


const Library = () => {

    const navigate = useNavigate()

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div className="font-nunito text-[#827A7A]">
            <Header />
            <div className="relative shadow-xl font-semibold">
                <div className="mt-5">
                    <img src="/Banners/Library_banner.jpeg" alt="Library_Banner" className="w-full h-96 object-cover blur-sm opacity-90" />
                </div>
                <div className="justify-center items-center flex absolute top-48 left-[680px]">
                    <h1 className="text-4xl font-bold text-black">Library</h1>
                </div>

            </div>


            <div className="p-2 mt-5 w-[90%] mx-20">
                <div className="mt-5 p-3">
                    <h1 className="text-4xl font-bold">Recommended For You</h1>
                </div>
                <div className="p-2 grid grid-cols-3 gap-5 mt-10">

                    <div className="w-full rounded p-2 border-2" data-aos = "flip-left">
                        <div>
                            <img src="https://img.freepik.com/free-photo/woman-male-driving-instructor-driving-test_52683-101120.jpg?t=st=1709371067~exp=1709374667~hmac=a0b290717ca1ccf9afb5ce161f901b4cc411e4432c558c08e33f29d40002c3ee&w=1060" alt="img" className="w-full h-60 rounded" />
                        </div>
                        <div>
                            <div className="text-sm p-2 border-b-2">
                                <p>20 lessons</p>
                            </div>
                            <div className="p-2">
                                <h1 className="font-bold text-2xl">Advaya FM Instruction</h1>
                                <div className="flex justify-between items-center">
                                    <p>412 students</p>
                                    <p className="px-5 py-2 text-white bg-orange-600" onClick={()=>navigate("/video/view")}><FaArrowRightLong /></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full rounded p-2 border-2" data-aos = "flip-left">
                        <div>
                            <img src="https://img.freepik.com/free-photo/woman-male-driving-instructor-driving-test_52683-101120.jpg?t=st=1709371067~exp=1709374667~hmac=a0b290717ca1ccf9afb5ce161f901b4cc411e4432c558c08e33f29d40002c3ee&w=1060" alt="img" className="w-full h-60 rounded" />
                        </div>
                        <div>
                            <div className="text-sm p-2 border-b-2">
                                <p>20 lessons</p>
                            </div>
                            <div className="p-2">
                                <h1 className="font-bold text-2xl">Advaya FM Instruction</h1>
                                <div className="flex justify-between items-center">
                                    <p>412 students</p>
                                    <p className="px-5 py-2 text-white bg-orange-600"><FaArrowRightLong /></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full rounded p-2 border-2" data-aos = "flip-left">
                        <div>
                            <img src="https://img.freepik.com/free-photo/woman-male-driving-instructor-driving-test_52683-101120.jpg?t=st=1709371067~exp=1709374667~hmac=a0b290717ca1ccf9afb5ce161f901b4cc411e4432c558c08e33f29d40002c3ee&w=1060" alt="img" className="w-full h-60 rounded" />
                        </div>
                        <div>
                            <div className="text-sm p-2 border-b-2">
                                <p>20 lessons</p>
                            </div>
                            <div className="p-2">
                                <h1 className="font-bold text-2xl">Ettiquette & Grooming</h1>
                                <div className="flex justify-between items-center">
                                    <p>412 students</p>
                                    <p className="px-5 py-2 text-white bg-orange-600"><FaArrowRightLong /></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full rounded p-2 border-2" data-aos = "flip-left">
                        <div>
                            <img src="https://img.freepik.com/free-photo/businesman-working-computer_1098-21050.jpg?t=st=1709371933~exp=1709375533~hmac=b7ac709dff33a203b639a680f94e6f53974d3573ac7ed6e0bfabe272f0a5f65d&w=1060" alt="img" className="w-full h-60 rounded" />
                        </div>
                        <div>
                            <div className="text-sm p-2 border-b-2">
                                <p>20 lessons</p>
                            </div>
                            <div className="p-2">
                                <h1 className="font-bold text-2xl">Cleaning</h1>
                                <div className="flex justify-between items-center">
                                    <p>412 students</p>
                                    <p className="px-5 py-2 text-white bg-orange-600"><FaArrowRightLong /></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full rounded p-2 border-2" data-aos = "flip-left">
                        <div>
                            <img src="https://img.freepik.com/free-photo/businesman-working-computer_1098-21050.jpg?t=st=1709371933~exp=1709375533~hmac=b7ac709dff33a203b639a680f94e6f53974d3573ac7ed6e0bfabe272f0a5f65d&w=1060" alt="img" className="w-full h-60 rounded" />
                        </div>
                        <div>
                            <div className="text-sm p-2 border-b-2">
                                <p>20 lessons</p>
                            </div>
                            <div className="p-2">
                                <h1 className="font-bold text-2xl">Defensive Driving</h1>
                                <div className="flex justify-between items-center">
                                    <p>412 students</p>
                                    <p className="px-5 py-2 text-white bg-orange-600"><FaArrowRightLong /></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full rounded p-2 border-2" data-aos = "flip-left">
                        <div>
                            <img src="https://img.freepik.com/free-photo/businesman-working-computer_1098-21050.jpg?t=st=1709371933~exp=1709375533~hmac=b7ac709dff33a203b639a680f94e6f53974d3573ac7ed6e0bfabe272f0a5f65d&w=1060" alt="img" className="w-full h-60 rounded" />
                        </div>
                        <div>
                            <div className="text-sm p-2 border-b-2">
                                <p>20 lessons</p>
                            </div>
                            <div className="p-2">
                                <h1 className="font-bold text-2xl">Advaya FM Instruction</h1>
                                <div className="flex justify-between items-center">
                                    <p>412 students</p>
                                    <p className="px-5 py-2 text-white bg-orange-600"><FaArrowRightLong /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-2 mt-5 w-[90%] mx-20" >
                <div className="mt-5 p-3">
                    <h1 className="text-4xl font-bold">Recently Viewed</h1>
                </div>
                <div className="p-2 grid grid-cols-3 gap-5 mt-10">

                    <div className="w-full rounded p-2 border-2" data-aos = "flip-right">
                        <div>
                            <img src="https://img.freepik.com/free-photo/woman-male-driving-instructor-driving-test_52683-101120.jpg?t=st=1709371067~exp=1709374667~hmac=a0b290717ca1ccf9afb5ce161f901b4cc411e4432c558c08e33f29d40002c3ee&w=1060" alt="img" className="w-full h-60 rounded" />
                        </div>
                        <div>
                            <div className="text-sm p-2 border-b-2">
                                <p>20 lessons</p>
                            </div>
                            <div className="p-2">
                                <h1 className="font-bold text-2xl">Advaya FM Instruction</h1>
                                <div className="flex justify-between items-center">
                                    <p>412 students</p>
                                    <p className="px-5 py-2 text-white bg-orange-600"><FaArrowRightLong /></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full rounded p-2 border-2" data-aos = "flip-right">
                        <div>
                            <img src="https://img.freepik.com/free-photo/woman-male-driving-instructor-driving-test_52683-101120.jpg?t=st=1709371067~exp=1709374667~hmac=a0b290717ca1ccf9afb5ce161f901b4cc411e4432c558c08e33f29d40002c3ee&w=1060" alt="img" className="w-full h-60 rounded" />
                        </div>
                        <div>
                            <div className="text-sm p-2 border-b-2">
                                <p>20 lessons</p>
                            </div>
                            <div className="p-2">
                                <h1 className="font-bold text-2xl">Advaya FM Instruction</h1>
                                <div className="flex justify-between items-center">
                                    <p>412 students</p>
                                    <p className="px-5 py-2 text-white bg-orange-600"><FaArrowRightLong /></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full rounded p-2 border-2" data-aos = "flip-right">
                        <div>
                            <img src="https://img.freepik.com/free-photo/woman-male-driving-instructor-driving-test_52683-101120.jpg?t=st=1709371067~exp=1709374667~hmac=a0b290717ca1ccf9afb5ce161f901b4cc411e4432c558c08e33f29d40002c3ee&w=1060" alt="img" className="w-full h-60 rounded" />
                        </div>
                        <div>
                            <div className="text-sm p-2 border-b-2">
                                <p>20 lessons</p>
                            </div>
                            <div className="p-2">
                                <h1 className="font-bold text-2xl">Ettiquette & Grooming</h1>
                                <div className="flex justify-between items-center">
                                    <p>412 students</p>
                                    <p className="px-5 py-2 text-white bg-orange-600"><FaArrowRightLong /></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full rounded p-2 border-2" data-aos = "flip-right" >
                        <div>
                            <img src="https://img.freepik.com/free-photo/businesman-working-computer_1098-21050.jpg?t=st=1709371933~exp=1709375533~hmac=b7ac709dff33a203b639a680f94e6f53974d3573ac7ed6e0bfabe272f0a5f65d&w=1060" alt="img" className="w-full h-60 rounded" />
                        </div>
                        <div>
                            <div className="text-sm p-2 border-b-2">
                                <p>20 lessons</p>
                            </div>
                            <div className="p-2">
                                <h1 className="font-bold text-2xl">Cleaning</h1>
                                <div className="flex justify-between items-center">
                                    <p>412 students</p>
                                    <p className="px-5 py-2 text-white bg-orange-600"><FaArrowRightLong /></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full rounded p-2 border-2" data-aos = "flip-right">
                        <div>
                            <img src="https://img.freepik.com/free-photo/businesman-working-computer_1098-21050.jpg?t=st=1709371933~exp=1709375533~hmac=b7ac709dff33a203b639a680f94e6f53974d3573ac7ed6e0bfabe272f0a5f65d&w=1060" alt="img" className="w-full h-60 rounded" />
                        </div>
                        <div>
                            <div className="text-sm p-2 border-b-2">
                                <p>20 lessons</p>
                            </div>
                            <div className="p-2">
                                <h1 className="font-bold text-2xl">Defensive Driving</h1>
                                <div className="flex justify-between items-center">
                                    <p>412 students</p>
                                    <p className="px-5 py-2 text-white bg-orange-600"><FaArrowRightLong /></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full rounded p-2 border-2" data-aos = "flip-right">
                        <div>
                            <img src="https://img.freepik.com/free-photo/businesman-working-computer_1098-21050.jpg?t=st=1709371933~exp=1709375533~hmac=b7ac709dff33a203b639a680f94e6f53974d3573ac7ed6e0bfabe272f0a5f65d&w=1060" alt="img" className="w-full h-60 rounded" />
                        </div>
                        <div>
                            <div className="text-sm p-2 border-b-2">
                                <p>20 lessons</p>
                            </div>
                            <div className="p-2">
                                <h1 className="font-bold text-2xl">Advaya FM Instruction</h1>
                                <div className="flex justify-between items-center">
                                    <p>412 students</p>
                                    <p className="px-5 py-2 text-white bg-orange-600"><FaArrowRightLong /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


            <div className="mt-5">
                <Footer />
            </div>
        </div>
    )
}

export default Library