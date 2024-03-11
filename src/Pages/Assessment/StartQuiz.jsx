import { useState } from "react"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Quiz from "./quiz.json"


const StartQuiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0)

    const previousQuestion = () => {
      
        setCurrentQuestion((prev) => Math.max(prev - 1, 0));
    }

    const nextQuestion = () => {
        setCurrentQuestion((next) => next + 1)
    }

    console.log(currentQuestion);

    const currentQuizNumber = Quiz.Quiz[currentQuestion]

    console.log(currentQuizNumber);
    return (
        <div>
            <Header />
            <div className="flex justify-center items-center flex-col w-full font-semibold">
                <div className="w-full text-center text-2xl">
                    <h1>Questions 1/10</h1>
                </div>
                <div className="w-full">
                    <div className="bg-[#B32073] p-2">
                        <div className="flex gap-5 p-10  text-2xl text-white ml-32">
                            <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
                                <p className="text-black">{currentQuizNumber.id}</p>
                            </div>
                            <div className="w-full flex flex-wrap">
                                <h4>{currentQuizNumber.question}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center my-10 p-2 flex-col">
                        <div className="grid grid-cols-2 w-[70%] p-2 gap-5 place-items-center">
                            <p className="bg-gray-600 w-56 py-2 px-5 text-center text-white">A. {currentQuizNumber.option_A}</p>
                            <p className="bg-gray-600 w-56 py-2 px-5 text-center text-white">B. {currentQuizNumber.option_B}</p>
                            <p className="bg-gray-600 w-56 py-2 px-5 text-center text-white">C. {currentQuizNumber.option_C}</p>
                            <p className="bg-gray-600 w-56 py-2 px-5 text-center text-white">D. {currentQuizNumber.option_D}</p>
                        </div>

                        <div className="w-[80%] my-10 p-2">
                            <div className="flex justify-between items-center gap-10 ">
                                <button className={`p-2 bg-[#B32073] w-32 text-white rounded-lg  hover:bg-inherit hover:border-[#B32073] hover:border-2 hover:text-[#B32073] disabled:bg-gray-600 ${currentQuestion === 0 ? "invisible" : ""}`} onClick={previousQuestion} disabled = {currentQuizNumber === 0}>Previous</button>
                                <button className={`p-2 bg-[#B32073] w-32 text-white rounded-lg  hover:bg-inherit hover:border-[#B32073] hover:border-2 hover:text-[#B32073] disabled:bg-gray-600 `} onClick={nextQuestion} disabled={currentQuizNumber == Quiz.Quiz.length - 1}>{currentQuestion === Quiz.Quiz.length -1 ? "Submit" : "Next"}</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default StartQuiz