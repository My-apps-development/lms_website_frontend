import { useEffect, useState } from "react"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import { axiosInstance } from "../../Utils/AxiosSetup"
import { errorMessage } from "../../Utils/NotificationManager"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"


const Certificate = () => {

    const [certificateData, setCertificateData] = useState(null)

    const user = JSON.parse(localStorage.getItem("user"))
    const fetchCertificate = async () => {
        try {
            const response = await axiosInstance.get("/assignment/Certificate")
            const data = await response?.data
            setCertificateData(data);
        } catch (error) {
            errorMessage(error?.response?.data?.message)
        }
    }

    const downloadCertificate = () => {
        const certificateTemplate = document.querySelector(".certificate-template");

        html2canvas(certificateTemplate, { scrollX: 0, scrollY: 0, scale: 1 }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'pt', // units are points, 1 inch = 72 points
                format: [canvas.width, canvas.height] // match canvas size
            });
            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
            pdf.save('certificate.pdf');
        });
    };

    console.log(certificateData);

    useEffect(() => {
        fetchCertificate()
    }, [])
    return (
        <div>
            <Header />
            <div className="">
                <div>
                    <h1>Certificate</h1>
                </div>
                <div className="flex justify-center items-center m-10">
                    <div className="w-[90%]  shadow-2xl flex justify-center items-center flex-col font-semibold p-10 certificate-template">
                        <div className="border-2 border-[#B32073] rounded-lg p-5 flex flex-col gap-4 ">
                            <div className="flex justify-between items-center gap-5">
                                <div className="flex flex-col gap-6">
                                    <h1 className="text-4xl">Digital Certificate</h1>
                                    <h1 className="text-2xl">Awarded to</h1>
                                </div>
                                <div>
                                    <img src="/LOGO.png" alt="" className="w-32 h-32" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <h1 className="text-4xl">{user?.fullname}</h1>
                                <p className="text-2xl">for completing</p>
                            </div>
                            <div className="flex flex-col gap-5">
                                <h1 className="text-3xl capitalize">Defensive driving by advaya fm</h1>
                                <p className="text-2xl">valid till dec 2025</p>
                            </div>
                            <div className="text-2xl">
                                <p>Your dedication and effort have paid off, and you &apos; re now equipped with
                                    essential skills to visualize data like a pro. Well done on this significant
                                    achievement!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-4 mb-5">
                    <button className="p-2 w-44 rounded-lg border-2 border-[#B32073] flex justify-center items-center gap-2 bg-[#B32073] text-white hover:scale-95 hover:duration-300 capitalize font-semibold" onClick={downloadCertificate}>download certificate</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Certificate

