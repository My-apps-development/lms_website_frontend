import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"


const Contact = () => {
  return (
    <div>
        <Header />

        <div className="py-5 w-full flex justify-between items-center px-52 max-sm:px-5 max-sm:flex-col max-sm:gap-5">
            <div className="w-[40%] p-2 border-2 shadow-lg max-sm:w-full">
                <img src="/LOGO.png" alt="" className="w-full h-full object-cover object-center " />
            </div>
            <div className="w-[50%] font-semibold flex flex-col gap-5 max-sm:w-full">
                <h1 className="text-4xl text-pink-600">info@advayafm.com</h1>
                <p className="text-2xl">8125991247</p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact