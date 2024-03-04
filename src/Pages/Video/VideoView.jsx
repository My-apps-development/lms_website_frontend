import { FaArrowRightLong } from "react-icons/fa6"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"


const VideoView = () => {
    return (
        <div className="font-nunito font-semibold text-[#827A7A]">
            <Header />
            <div className="flex flex-col ml-20 gap-2 mt-10 w-[90%]">
                <div className="ml-20 mt-6">
                    <h1>Home/Introduction</h1>
                </div>
                <div className="flex justify-center items-center">
                    <video controls width="90%" className="h-96" autoPlay>
                        <source src="/video/5124655_people_person_man_3840x2160.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="ml-20 p-5 w-[90%]">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-3xl font-bold p-2">Advaya FM Introduction</h1>
                        <p className="text-[#B32073] p-2">Advaya FM</p>
                        <p className="p-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio maiores ullam voluptatum velit voluptates eveniet nostrum nulla soluta illo inventore vitae, dicta maxime doloribus id quibusdam a aliquam eius officiis excepturi distinctio. Hic laboriosam eius placeat, eos reiciendis molestias rerum eligendi excepturi quasi tempore iusto minima repellat fugiat optio.</p>
                    </div>
                </div>
            </div>

            <div className="p-2 mt-5 w-[90%] mx-20 mb-3">
                <div className="mt-5 p-3">
                    <h1 className="text-4xl font-bold">Recently Viewed</h1>
                </div>
                <div className="p-2 grid grid-cols-3 gap-5 mt-10">

                    <div className="w-full rounded p-2 border-2">
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

                    <div className="w-full rounded p-2 border-2">
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

                    <div className="w-full rounded p-2 border-2">
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

                   
                </div>


            </div>
            <div>
            <Footer />
            </div>
        </div>
    )
}

export default VideoView