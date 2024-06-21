import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()

    const handleNavigatePrivacy = (e) => {
        e.preventDefault()
        navigate("/privacy-policy")
    }
    return (
        <div className="flex justify-center items-center w-full flex-col gap-5 font-semibold font-nunito text-white bg-[#B32073] h-96 max-sm:flex-col max-sm:h-full">
            <div className="flex justify-around items-start gap-5 w-full max-sm:flex-col max-sm:justify-center max-sm:items-center">
                <div className="flex flex-col justify-center items-start gap-2 max-sm:p-10 max-sm:items-center">
                    <div>
                        <img src="/LOGO.png" alt="logo" className="w-32 h-32 bg-white rounded-full" />
                    </div>
                    <div>
                        <p>Follow on social services</p>
                    </div>
                    <div className="flex gap-5 mt-3" data-aos="fade-up">
                        <p data-aos-duration="500" data-aos="fade-up"><FaFacebook /></p>
                        <p data-aos-duration="600" data-aos="fade-up"><FaInstagram /></p>
                        <p data-aos-duration="700" data-aos="fade-up"><FaTwitter /></p>
                    </div>
                </div>
                <div className="p-2">
                    <div className="font-bold text-xl p-1">
                        <h1>Links</h1>
                    </div>
                    <div className="p-1">
                        <p className="cursor-pointer" onClick={()=>navigate("/")}>Home</p>
                        <p className="cursor-pointer" onClick={()=>navigate("/library")}>Library</p>
                        <p className="cursor-pointer" onClick={()=>navigate("/category")}>Assessment</p>
                        <p className="cursor-pointer" onClick={handleNavigatePrivacy}>Privacy Policy</p>
                        <p className="cursor-pointer" onClick={()=>navigate("/contactus")}>Contact us</p>
                    </div>
                </div>
                <div className="p-2">
                    <div className="font-bold text-xl p-1">
                        <h1>Resources</h1>
                    </div>
                    <div className="p-1">
                        <p>About Us</p>
                        <p>Career</p>
                        <p>Legal Notice</p>
                    </div>
                </div>
                <div className="p-2">
                    <div className="font-bold text-xl p-1">
                        <h1>Contacts</h1>
                    </div>
                    <div className="p-1">
                        <p>Hyderabad</p>
                        <p>Support</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center gap-2 ">
                <p className="border-t-2 w-[70%] text-center p-2" data-aos="fade-up">copy right 2024 @ Advaya FM</p>
            </div>
        </div>
    )
}

export default Footer