import { useLocation, useNavigate } from "react-router-dom"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"


const Assessment = () => {
    const navigate = useNavigate()
    const { state } = useLocation()
    // console.log(state?.courseId);
    return (
        <div className="font-nunito text-[#827A7A]">
            <Header />
            <div className="relative shadow-xl font-semibold">
                <div className="mt-5 max-sm:hidden">
                    <img src="/Banners/Assessment_Banner.jpeg" alt="Library_Banner" className="w-full h-96 object-cover blur-sm opacity-90" />
                </div>
                <div className="justify-center items-center flex absolute top-48 left-[680px]">
                    <h1 className="text-4xl font-bold text-[#0C0531]">Assessment</h1>
                </div>

            </div>
            <div className="p-2 mt-5 w-[90%] mx-20 text-black font-semibold flex justify-center items-start flex-col gap-3 max-sm:w-full max-sm:mt-10 max-sm:mx-5">
                <div className="font-bold text-xl">
                    <h1>Important Points to Remember</h1>
                </div>
                <div className="flex flex-col justify-center items-start gap-5">
                    <div className="flex justify-center items-center gap-3 ">
                        <img src="https://cdn-icons-png.flaticon.com/128/7656/7656139.png" alt="" className="w-5 h-5" />
                        <p>Explore Courses - 1</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <img src="https://cdn-icons-png.flaticon.com/128/7656/7656139.png" alt="" className="w-5 h-5" />
                        <p>Give Minimum 8 Answers - 2</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <img src="https://cdn-icons-png.flaticon.com/128/7656/7656139.png" alt="" className="w-5 h-5" />
                        <p>Submit Responses - 3</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <img src="https://cdn-icons-png.flaticon.com/128/7656/7656139.png" alt="" className="w-5 h-5" />
                        <p>Track Progress - 4</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <img src="https://cdn-icons-png.flaticon.com/128/7656/7656139.png" alt="" className="w-5 h-5" />
                        <p>Take Assessment - 5</p>
                    </div>



                </div>
                <div className="my-3">
                    <button className="p-2 bg-[#B32073] text-white rounded-lg  hover:bg-inherit hover:border-[#B32073] hover:border-2 hover:text-[#B32073]" onClick={() => navigate("/assessment/quiz", {state : {courseId : state?.courseId}})}>Start the Test</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Assessment