import { useLocation, useNavigate } from "react-router-dom"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"


const Result = () => {
    const { state } = useLocation()
    const navigate = useNavigate()

    // console.log(state);
    return (
        <div>
            <Header />
            <div className="font-semibold flex justify-center items-center h-96 flex-col gap-5">
                <div className="flex justify-center items-center flex-col w-96 gap-5 p-2">
                    <h1 className="text-2xl mr-8">Score</h1>
                    <p className="text-6xl ml-5">{state?.finalScore}</p>
                </div>
                <div className="text-xl">
                    <p>Correct answers: {state?.correctAnswer} / {state?.totalQuestions}</p>
                </div>
                <div>
                    <p className="text-[#B32073] cursor-pointer" onClick={()=>navigate("/category/courses")}>Goto Courses</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Result