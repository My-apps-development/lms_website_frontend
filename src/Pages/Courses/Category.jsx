import { FaArrowRightLong } from "react-icons/fa6"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import { axiosInstance } from "../../Utils/AxiosSetup"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { errorMessage, successMessage } from "../../Utils/NotificationManager"
import Loader from "../../Utils/Loader"


const Category = () => {

    const navigate = useNavigate()

    const [categoryList, setCategoryList] = useState([])

    const [loader, setLoader] = useState(false)

    const user = JSON.parse(localStorage.getItem("user"))


    const fetchCategories = async () => {
        try {
            setLoader(true)
            const response = await axiosInstance.get("/category")
            const data = await response?.data
            setCategoryList(data?.data);
            setLoader(false)
        } catch (error) {
            errorMessage(error?.response?.data?.message)
            // console.log("error fetching categories", error.message);
        }
    }

    // console.log(user);



    const filterWithRole = categoryList.filter((item) => item?.role.toLowerCase()?.replace(/\s+/g, '') === user?.role.toLowerCase()?.replace(/\s+/g, ''))



    // console.log(filterWithRole);


    const postCategory = async (_id) => {

        // console.log(_id);

        const formData = new FormData()
        formData.append("categoryid", _id)

        try {
            setLoader(true)
            const response = await axiosInstance.post("/insertcategory", formData, { headers: { "Content-Type": "application/json" } })
            const data = await response?.data
            successMessage(data?.message);
            setLoader(false)

        } catch (error) {
            errorMessage(error?.response?.data?.message)
            // console.log("Error Posting Category ", error.message);
        }
    }



    useEffect(() => {
        fetchCategories()
    }, [])
    return (
        <div>
            <Header />

            {
                loader ? <Loader /> :


                    <div className="p-2">

                        <div className="text-2xl font-semibold m-10 p-2">
                            <h1>Categories</h1>
                        </div>

                        <div className="p-2 grid grid-cols-4 gap-5 m-10  font-semibold">
                            {
                                !categoryList?.length && <div className=" p-2 flex justify-center items-center  w-full h-96">
                                    <h1 className="text-4xl text-center p-2 w-full">Oops...! No Categories are found</h1>
                                </div>
                            }
                            {
                                filterWithRole?.map((item, index) => {
                                    return (
                                        <div className="w-full rounded p-2 border-2 hover:scale-95 hover:duration-300" data-aos="flip-right" key={index}>
                                            <div>
                                                <img src={item?.upload_thumbnail} alt="img" className="w-full h-80 rounded object-cover" />
                                            </div>
                                            <div>
                                                <div className="p-2 flex justify-between items-center">
                                                    <h1 className=" text-xl">{item?.categories}</h1>
                                                    <div className="flex justify-between items-center">
                                                        {/* <p>Role : {item?.role}</p> */}
                                                        <p className="px-5 py-2 text-white bg-orange-600 cursor-pointer" onClick={() => {
                                                            postCategory(item?._id)
                                                            navigate("/category/courses")
                                                        }}><FaArrowRightLong /></p>
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
        </div>
    )
}

export default Category