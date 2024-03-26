import { useEffect, useState } from "react"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
// import Quiz from "./quiz.json"
import { axiosInstance } from "../../Utils/AxiosSetup"
import { useLocation, useNavigate } from "react-router-dom"
import { errorMessage, successMessage } from "../../Utils/NotificationManager"
import Loader from "../../Utils/Loader"


const StartQuiz = () => {

    const { state } = useLocation()

    // console.log();

    const userId = JSON.parse(localStorage.getItem("user"))


    const [currentQuestion, setCurrentQuestion] = useState(0)

    const [questionList, setQuestionList] = useState([])

    const [answer, setAnswer] = useState([])

    const [correctAnswer, setCorrectAnswer] = useState(0)

    const [wrongAnswer, setWrongAnswer] = useState(0)

    const [loader, setLoader] = useState(false)

    const [totalMark, setTotalMark] = useState(0)

    const navigate = useNavigate()

    const previousQuestion = () => {

        setCurrentQuestion((prev) => Math.max(prev - 1, 0));
    }

    const nextQuestion = () => {
        setCurrentQuestion((next) => next + 1)
    }





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

        console.log(selectedOption, currentQuizNumber?.correct_option);

        const currentQuiz = questionList[currentQuestion];
        const isCorrect = selectedOption === currentQuiz?.correct_option;

        if (isCorrect) {
            setCorrectAnswer((prevCount) => prevCount + 1);
            setTotalMark((prevMark) => prevMark + currentQuiz?.marks);
        } else {
            setWrongAnswer((prevCount) => prevCount + 1);
        }

        // setAnswer((prevAnswer) => ({
        //     ...prevAnswer,
        //     [currentQuizNumber._id]: selectedOption
        // }))
        // calculateScore()

    }

    const currentQuizNumber = questionList[currentQuestion]

    // console.log(currentQuizNumber);

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



    const percentage = ((correctAnswer / questionList.length) * 100).toFixed(2) + "%"


    // console.log(answer, "answers");
    // console.log(totalMark, "totalmarks");
    // console.log(correctAnswer, "correct answer");
    // console.log(wrongAnswer, "wrong answer");
    // console.log(percentage);



    const handleButtonClick = () => {
        if (currentQuestion === questionList.length - 1) {
            // calculateScore();
            postQuiz();
            AssessmentCompleted()// Call postQuiz function when it's the last question
            console.log("State being passed to result route:", { finalScore: percentage, correctAnswer: correctAnswer, totalQuestions: questionList?.length });
            navigate("/assessment/quiz/result", { state: { finalScore: percentage, correctAnswer: correctAnswer, totalQuestions: questionList?.length } })

        } else {
            nextQuestion(); // Call nextQuestion function for other questions
            // calculateScore()
        }
    };

    const postQuiz = async () => {

        const postAssignment = new FormData()
        postAssignment.append("courseid", state?.courseId)
        postAssignment.append("totalquestions", questionList.length)
        postAssignment.append("correctanswer", correctAnswer)
        postAssignment.append("wronganswer", wrongAnswer)
        postAssignment.append("percentage", percentage)
        postAssignment.append("userId", userId?._id)

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

    //---------------------------------------  Notification Start   -------------------------------------------------------------------------

    const AssessmentCompleted = async () => {

        const fD = new FormData()
        fD.append("courseid", state?.courseId)

        try {
            const response = await axiosInstance.post("/notification/assessmentComplete", fD, { headers: { "Content-Type": "application/json" } })
            const data = await response?.data
            successMessage(data?.title)
        } catch (error) {
            errorMessage(error?.response?.data?.message)
        }
    }

    //---------------------------------------  Notification End   -------------------------------------------------------------------------



    useEffect(() => {
        startQuiz()
    }, [])
    return (
        <div>
            <Header />
            {
                loader ? <Loader /> : <div className="flex justify-center items-center flex-col w-full font-semibold">
                    <div className="w-full text-center text-2xl max-sm:p-5">
                        <h1>Questions {currentQuestion + 1}/{questionList.length}</h1>
                    </div>
                    <div className="w-full max-sm:text-xs">
                        <div className="bg-[#B32073] p-2">
                            <div className="flex gap-5 p-10  text-2xl text-white ml-32 max-sm:m-0">
                                <div className=" flex justify-center items-center max-sm:hidden">
                                    <p className="text-black w-10 h-10 rounded-full bg-white text-center">{currentQuestion + 1}</p>
                                </div>
                                <div className="w-full flex flex-wrap max-sm:text-xs">
                                    <h4>{currentQuizNumber?.question}</h4>
                                </div>

                            </div>
                        </div>
                        <div className="w-full flex justify-center items-center my-10 p-2 flex-col gap-3">
                            <div className="w-full flex justify-around">
                                {currentQuizNumber?.question_audio && <audio controls>
                                    <source src={currentQuizNumber?.question_audio} type="audio/mp3"></source>
                                </audio>}
                            </div>
                            <div className="flex w-full">
                                <div className="grid grid-cols-2 w-[60%] p-2 gap-5 place-items-center max-sm:grid-cols-1 mx-32 ">
                                    <p className="bg-gray-600 w-96 py-2 px-5 text-center text-white cursor-pointer max-sm:w-72" onClick={() => handleAnswer(currentQuizNumber?.option_A)}>A. {currentQuizNumber?.option_A}</p>
                                    <p className="bg-gray-600 w-96 py-2 px-5 text-center text-white cursor-pointer max-sm:w-72" onClick={() => handleAnswer(currentQuizNumber?.option_B)}>B. {currentQuizNumber?.option_B}</p>
                                    <p className="bg-gray-600 w-96 py-2 px-5 text-center text-white cursor-pointer max-sm:w-72" onClick={() => handleAnswer(currentQuizNumber?.option_C)}>C. {currentQuizNumber?.option_C}</p>
                                    {
                                        currentQuizNumber?.option_D == " "?.replace(/\s+/g, '') ? <p className="bg-gray-600 w-96 py-2 px-5 text-center cursor-pointer text-white max-sm:w-72" onClick={() => handleAnswer(currentQuizNumber?.option_D)}>D. {currentQuizNumber?.option_D}</p> : null
                                    }
                                </div>
                                <div className="w-[30%]">
                                    {currentQuizNumber?.question_image && <img src={currentQuizNumber?.question_image} alt={currentQuizNumber?._id} className="w-24 h-24" />}

                                </div>
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