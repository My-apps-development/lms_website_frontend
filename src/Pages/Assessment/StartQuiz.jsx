import { useEffect, useState } from "react"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
// import Quiz from "./quiz.json"
import { axiosInstance } from "../../Utils/AxiosSetup"
import { useLocation } from "react-router-dom"
import { errorMessage, successMessage } from "../../Utils/NotificationManager"
import Loader from "../../Utils/Loader"


const StartQuiz = () => {

    const { state } = useLocation()

    // console.log();

    const [currentQuestion, setCurrentQuestion] = useState(0)

    const [questionList, setQuestionList] = useState([])

    const [answer, setAnswer] = useState([])

    const [correctAnswer, setCorrectAnswer] = useState(0)

    const [wrongAnswer, setWrongAnswer] = useState(0)

    const [loader, setLoader] = useState(false)

    const [totalMark, setTotalMark] = useState(0)

    const previousQuestion = () => {

        setCurrentQuestion((prev) => Math.max(prev - 1, 0));
    }

    const nextQuestion = () => {
        setCurrentQuestion((next) => next + 1)
    }

    // console.log(currentQuestion);

    const currentQuizNumber = questionList[currentQuestion]

    // console.log(currentQuizNumber);

    const startQuiz = async () => {
        try {
            setLoader(true)
            const response = await axiosInstance.get(`/quiz?courseId=${state?.courseId}`)
            const data = await response?.data
            setQuestionList(data?.data);
            setLoader(false)
        } catch (error) {
            setLoader(false)
            errorMessage(error?.response?.data?.message)
            // console.log("Error Fetching Quiz", error.message);
        }
    }

    const handleAnswer = (selectedOption) => {

        // console.log(selectedOption);

        setAnswer((prevAnswer) => ({
            ...prevAnswer,
            [currentQuizNumber._id]: selectedOption
        }))

    }

    const calculateScore = () => {
        let correctAnswer = 0
        let wrongAnswer = 0
        let totalMarks = 0
        questionList?.forEach((question) => {
      
           
            if (answer[question?._id] === question?.correct_option) {
                correctAnswer++
                totalMarks += question.marks;
               
            } else {
                wrongAnswer++
            }
        })
        setCorrectAnswer(correctAnswer)
        setWrongAnswer(wrongAnswer);
        setTotalMark(totalMarks)
    }

    console.log(answer, "answers");
    console.log(totalMark, "totalmarks");
    console.log(correctAnswer, "correct answer");
    console.log(wrongAnswer, "wrong answer");

    const percentage = ((correctAnswer / questionList.length) * 100).toFixed(2) + "%"
    console.log(percentage);


    console.log(questionList);

    const postQuiz = async () => {

        const postAssignment = new FormData()
        postAssignment.append("courseid", state?.courseId)
        postAssignment.append("totalquestions", questionList.length)
        postAssignment.append("correctanswer", correctAnswer)
        postAssignment.append("wronganswer", wrongAnswer)
        postAssignment.append("percentage", percentage)

        try {
            setLoader(true)
            const response = await axiosInstance.post("/assignment/insert", postAssignment, { headers: { "Content-Type": "application/json" } })
            const data = await response?.data
            successMessage(data?.message);
            setLoader(false)
        } catch (error) {
            setLoader(false)
            errorMessage(error?.response?.data?.message)
            // console.log("Error Posting Quiz", error.message);
        }
    }

    const handleButtonClick = () => {
        if (currentQuestion === questionList.length - 1) {
            calculateScore();
            postQuiz(); // Call postQuiz function when it's the last question
        } else {
            nextQuestion(); // Call nextQuestion function for other questions
        }
    };



    useEffect(() => {
        startQuiz()
    }, [])
    return (
        <div>
            <Header />
            {
                loader ? <Loader /> : <div className="flex justify-center items-center flex-col w-full font-semibold">
                    <div className="w-full text-center text-2xl">
                        <h1>Questions {currentQuestion + 1}/{questionList.length}</h1>
                    </div>
                    <div className="w-full">
                        <div className="bg-[#B32073] p-2">
                            <div className="flex gap-5 p-10  text-2xl text-white ml-32">
                                <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
                                    <p className="text-black">{currentQuestion + 1}</p>
                                </div>
                                <div className="w-full flex flex-wrap">
                                    <h4>{currentQuizNumber?.question}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-center items-center my-10 p-2 flex-col">
                            <div className="grid grid-cols-2 w-[70%] p-2 gap-5 place-items-center">
                                <p className="bg-gray-600 w-96 py-2 px-5 text-center text-white cursor-pointer" onClick={() => handleAnswer(currentQuizNumber?.option_A)}>A. {currentQuizNumber?.option_A}</p>
                                <p className="bg-gray-600 w-96 py-2 px-5 text-center text-white cursor-pointer" onClick={() => handleAnswer(currentQuizNumber?.option_B)}>B. {currentQuizNumber?.option_B}</p>
                                <p className="bg-gray-600 w-96 py-2 px-5 text-center text-white cursor-pointer" onClick={() => handleAnswer(currentQuizNumber?.option_C)}>C. {currentQuizNumber?.option_C}</p>
                                {
                                    currentQuizNumber?.option_D == " "?.replace(/\s+/g, '') ? <p className="bg-gray-600 w-96 py-2 px-5 text-center cursor-pointer text-white" onClick={() => handleAnswer(currentQuizNumber?.option_D)}>D. {currentQuizNumber?.option_D}</p> : null
                                }
                            </div>

                            <div className="w-[80%] my-10 p-2">
                                <div className="flex justify-between items-center gap-10 ">
                                    <button className={`p-2 bg-[#B32073] w-32 text-white rounded-lg  hover:bg-inherit hover:border-[#B32073] hover:border-2 hover:text-[#B32073] disabled:bg-gray-600 ${currentQuestion === 0 ? "invisible" : ""}`} onClick={previousQuestion} disabled={currentQuizNumber === 0}>Previous</button>
                                    <button className={`p-2 bg-[#B32073] w-32 text-white rounded-lg  hover:bg-inherit hover:border-[#B32073] hover:border-2 hover:text-[#B32073] disabled:bg-gray-600 `} onClick={handleButtonClick} disabled={currentQuizNumber == questionList.length - 1}>{currentQuestion === questionList.length - 1 ? "Submit" : "Next"}</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }
            <Footer />
        </div>
    )
}

export default StartQuiz