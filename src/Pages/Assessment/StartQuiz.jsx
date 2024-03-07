import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"


const StartQuiz = () => {
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
                                <p className="text-black">1</p>
                            </div>
                            <div className="w-full flex flex-wrap">
                                <h4>In what year did the United States host the FIFA World Cup for the first time?</h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center my-10 p-2">
                        <div className="grid grid-cols-2 w-[70%] p-2 gap-5">
                            <p>A. 1986</p>
                            <p>A. 1994</p>
                            <p>A. 1998</p>
                            <p>A. 1987</p>
                        </div>
                    </div>
                    <div className="w-[30%] mx-64  my-10 p-2">
                        <div className="flex justify-between items-center gap-10">
                            <button className="p-2 bg-[#B32073] text-white rounded-lg  hover:bg-inherit hover:border-[#B32073] hover:border-2 hover:text-[#B32073]">Previous</button>
                            <button className="p-2 bg-[#B32073] text-white rounded-lg  hover:bg-inherit hover:border-[#B32073] hover:border-2 hover:text-[#B32073]">Next</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default StartQuiz