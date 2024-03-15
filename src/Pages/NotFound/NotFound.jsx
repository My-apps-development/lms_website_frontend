import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"


const NotFound = () => {
    return (
        <div>
            <Header />
           
            <div className="flex justify-center items-center w-full mt-10 " data-aos="fade-down">
                <img src="/404.jpg" alt="" className="w-96 h-72 object-cover rounded-lg" />
            </div>

            <div className="flex justify-center items-center gap-5 flex-col my-5">
                {/* <p className="text-4xl" data-aos="fade-left">404</p> */}
                <h1 className="text-4xl" data-aos="fade-right">No Information Found</h1>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound