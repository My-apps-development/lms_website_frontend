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

        const originalBoxShadow = certificateTemplate.style.boxShadow;
        certificateTemplate.style.boxShadow = 'none';

        html2canvas(certificateTemplate, { scrollX: 0, scrollY: 0, scale: 1 }).then(canvas => {
            certificateTemplate.style.boxShadow = originalBoxShadow;
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
            <div className="text-[#827A7A]">
                <div className="text-3xl font-semibold ml-36 mt-10">
                    <h1>Certificate</h1>
                </div>
                {
                    certificateData?.data[0]?.assignments?.percentage >= "50%" ? <div>
                        <div className="flex justify-center items-center m-10">
                            <div className="w-[70%]  shadow-2xl flex justify-center items-center flex-col font-semibold p-10 certificate-template">
                                <div className="border-2 border-[#B32073] rounded-lg p-5 flex flex-col gap-4 ">
                                    <div className="flex justify-between items-center gap-5">
                                        <div className="flex flex-col gap-2">
                                            <h1 className="text-2xl">Digital Certificate</h1>
                                            <h1 className="text-sm">Awarded to</h1>
                                        </div>
                                        <div>
                                            <img src="/LOGO.png" alt="" className="w-24 h-24" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-5 justify-center items-start">
                                        <div className="flex flex-col justify-center items-start gap-2">
                                            <h1 className="text-xl underline">{certificateData?.data[0]?.user?.fullname}</h1>
                                            <p className="text-sm">for completing</p>
                                            <h1 className="text-xl capitalize underline">{certificateData?.data[0]?.course?.title}</h1>
                                            <p className="text-sm">valid till dec 2025.</p>
                                        </div>
                                        {/* <div className="flex flex-col gap-2">
                                    <h1 className="text-2xl capitalize">{certificateData?.data[0]?.course?.title}</h1>
                                    <p className="text-sm">valid till dec 2025</p>
                                </div> */}
                                        <div className="text-sm">
                                            <p>Your dedication and effort have paid off, and you &apos; re now equipped with
                                                essential skills to visualize data like a pro. Well done on this significant
                                                achievement!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-4 mb-5">
                            <button className="p-2 w-44 rounded-lg border-2 border-[#B32073] flex justify-center items-center gap-2 bg-[#B32073] text-white hover:scale-95 hover:duration-300 capitalize font-semibold" onClick={downloadCertificate}>download certificate</button>
                        </div>
                    </div> : <div className="text-xl font-semibold ml-36 mt-10 h-96">
                        <h1 className="text-center">Qualify assessment more than 50% to get certificate</h1>
                    </div>
                }

            </div>
            <Footer />
        </div>
    )
}

export default Certificate

