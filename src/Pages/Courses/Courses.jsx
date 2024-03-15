import { FaArrowRightLong } from "react-icons/fa6"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import { axiosInstance } from "../../Utils/AxiosSetup"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Loader from "../../Utils/Loader"
import { errorMessage } from "../../Utils/NotificationManager"


const Courses = () => {

    const navigate = useNavigate()
    const [courseList, setCourseList] = useState([])
    const [loader, setLoader] = useState(false)

    const fetchCourses = async () => {

        try {
            setLoader(true)
            const response = await axiosInstance.get("/homepage/fetchcourse")
            const data = await response?.data
            setCourseList(data?.courseData);
            setLoader(false)
        } catch (error) {
            errorMessage(error?.response?.data?.message)
            // console.log("Error Fetching Courses", error.message);
        }
    }

    // console.log(courseList);




    useEffect(() => {
        fetchCourses()
    }, [])
    return (
        <div>
            <Header />
            {
                loader ? <Loader /> :

                    <div className="font-semibold flex flex-col gap-3 justify-center items-center w-full">
                        <div className=" mt-2 p-3 w-full">
                            <h1 className="text-2xl mx-6">Courses</h1>
                        </div>
                        {
                            !courseList.length && <div className=" p-2 flex justify-center items-center h-96 w-full">
                                <h1 className="text-4xl text-center p-2 w-full">Oops...! No Courses are found</h1>
                            </div>
                        }
                        <div className="grid grid-cols-3 p-2 place-items-center gap-2 w-full">

                            {
                                courseList?.map((item, index) => {
                                    return (
                                        <div className=" rounded p-2 border-2 font-semibold" data-aos="flip-left" key={index}>
                                            <div>
                                                <video controls width="100%" className="h-60" controlsList="nodownload">
                                                    <source src={item?.course?.video_link} type="video/mp4" />
                                                </video>
                                            </div>
                                            <div>
                                                <div className="text-sm p-2 border-b-2">
                                                    <p>{item?.chapters?.length} Chapters </p>
                                                </div>
                                                <div className="p-2 flex justify-between items-center">
                                                    <h1 className="font-bold text-2xl capitalize">{item?.course?.title}</h1>
                                                    {/* <p>{item?.course?.description}</p> */}
                                                    <div className="flex justify-between items-center">
                                                        {/* <p className="invisible">412 students</p> */}
                                                        <p className="px-5 py-2 text-white bg-orange-600 cursor-pointer" onClick={() => navigate(`/video/view/${item?.course?._id}`, { state: { courseId: item?.course?._id, chapters: item?.chapters } })}><FaArrowRightLong /></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
            }
            <Footer />
        </div >
    )
}

export default Courses