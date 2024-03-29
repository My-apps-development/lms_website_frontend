// import { FaArrowRightLong } from "react-icons/fa6"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { axiosInstance } from "../../Utils/AxiosSetup"
import Loader from "../../Utils/Loader"
import { errorMessage, successMessage } from "../../Utils/NotificationManager"


const VideoView = () => {
    const navigate = useNavigate()

    const { state } = useLocation()

    const [chapterList, setChapterList] = useState([])

    const [currentChapter, setCurrentChapter] = useState(0)

    const [loader, setLoader] = useState(false)

    const user = JSON.parse(localStorage.getItem("user"))
    // console.log(state?.courseId);



    // const fetchChapters = async () => {
    //     try {
    //         setLoader(true)
    //         const response = await axiosInstance.get(`/homepage/chapters?courseId=${state?.courseId}`)
    //         const data = await response?.data
    //         setChapterList(data?.chapters);
    //         setLoader(false)
    //     } catch (error) {
    //         setLoader(false)
    //         errorMessage(error?.response?.data?.message)
    //         // console.log("Error Fetching Chapters", error.message);
    //     }
    // }

    const NextChapter = () => {
        if (chapterList.length > 0) {
            setCurrentChapter((current) => (current + 1) % chapterList.length);
        }
    }



    const PreviousChapter = () => {
        setCurrentChapter((current) => {
            if (current === 0) {
                return chapterList.length - 1;
            } else {
                return current - 1;
            }
        });
    };

    // console.log(chapterList[currentChapter]);


    const handleVideoEnd = async (_id) => {

        const fD = new FormData()
        fD.append("chapterid", _id)

        try {
            setLoader(true)
            const response = await axiosInstance.post("/notification/chapterComplete", fD, { headers: { "Content-Type": "application/json" } })
            const data = await response?.data
            successMessage(data?.title)
            setLoader(false)
        } catch (error) {
            setLoader(false)
            errorMessage(error?.response?.data?.message)
        }
    }


    // console.log(chapterList[currentChapter]?.language, user?.language);



    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
    useEffect(() => {
        setChapterList(state?.chapters)
        // fetchChapters()
    }, [])
    return (
        <div className="font-nunito font-semibold text-[#827A7A]">
            <Header />

            {
                !chapterList?.length ? (
                    <div className=" p-2 flex justify-center items-center h-96 w-full">
                        <h1 className="text-4xl text-center p-2 w-full animate-pulse">Oops...! No Chapters are found &#128531;</h1>
                    </div>
                ) : (
                    loader ? <Loader /> :
                        <div>
                            {
                                chapterList[currentChapter]?.language === user?.language &&

                                <div className="flex flex-col ml-20 gap-2 mt-10 w-[90%] max-sm:w-full max-sm:m-0">
                                    <div className="ml-20 mt-6 max-sm:ml-6">
                                        <h1>Home/{chapterList[currentChapter]?.title}</h1>
                                    </div>
                                    <div className="flex justify-center items-center" data-aos="fade-down">
                                        <video controls width="90%" className="h-96 max-sm:h-56" autoPlay key={chapterList[currentChapter]?._id} controlsList="nodownload" onEnded={() => handleVideoEnd(chapterList[currentChapter]?._id)}>
                                            <source src={chapterList[currentChapter]?.video_link} type="video/mp4" />
                                        </video>
                                    </div>

                                    <div className=" p-5 w-full">
                                        <div className="flex flex-col gap-1">
                                            <h1 className="text-3xl font-bold p-2" data-aos="fade-left">{chapterList[currentChapter]?.title}</h1>
                                            <p className="text-[#B32073] p-2" data-aos="fade-left">{chapterList[currentChapter]?.title}</p>
                                            <p className="p-2" data-aos="fade-left">{chapterList[currentChapter]?.description}</p>
                                        </div>
                                        <div className="flex w-full p-2 font-semibold text-xl">
                                            <button className="p-2 w-full rounded-lg border-2 border-[#C4C4C4] flex justify-center items-center gap-2 bg-[#C4C4C4] text-white hover:scale-95 hover:duration-300" onClick={() => {
                                                navigate("/assessment", { state: { courseId: chapterList[currentChapter]?.courseId } })
                                            }}>Assessment</button>
                                        </div>
                                        <div className="flex gap-3 mt-3 p-2">
                                            <button className={`p-2 w-32 rounded-lg border-2 border-[#B32073] flex justify-center items-center gap-2 bg-[#B32073] text-white hover:scale-95 hover:duration-300 ${currentChapter === 0 && "disabled:bg-gray-600 disabled:border-gray-600 disabled:cursor-not-allowed"}`} disabled={currentChapter == 0} onClick={PreviousChapter}>&lt; Previous</button>
                                            <button className={`p-2 w-36 rounded-lg border-2 border-[#B32073] flex justify-center items-center gap-2 bg-[#B32073] text-white hover:scale-95 hover:duration-300 ${currentChapter === chapterList?.length - 1 && "disabled:bg-gray-600 disabled:border-gray-600 disabled:cursor-not-allowed"}`} onClick={NextChapter} disabled={currentChapter === chapterList?.length - 1}>Next Chapter  &gt;</button>
                                        </div>
                                    </div>
                                </div>
                            }

                        </div>
                )
            }

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default VideoView