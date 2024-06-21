import { useNavigate } from "react-router-dom"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"


const Dashboard = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Header />
      <div className="font-semibold bg-[#F9F7FF] max-sm:text-xs ">
        <div className="flex justify-around items-center p-5 max-sm:flex-col max-sm:w-full max-sm:justify-center">
          <div className="flex justify-center items-start flex-col gap-5 w-[30%] p-2 max-sm:w-full">
            <h1 className="text-4xl text-[#0C0531] max-sm:text-lg">Start Your Learning Journey With Advaya FM</h1>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,</p>
            <button className="p-2 w-32 rounded-lg  bg-[#B32073] text-white" onClick={() => navigate("/category")}>Explore Course</button>
          </div>
          <div className="max-sm:hidden">
            <img src="/Login_left_logo.jpg" alt="" className="w-96 h-96 object-cover" />
          </div>
        </div>

        <div className="flex justify-center items-center p-2">
          <div className="w-[90%] flex justify-evenly items-center p-5 gap-2 max-sm:w-full max-sm:justify-center max-sm:flex-col">
            <div className="w-[40%] h-[50%] p-2 bg-inherit  max-sm:w-full">
              <img src="/Banners/Wallpaper-1.jpeg" alt="" className=" object-cover " />
            </div>
            <div className="flex justify-center items-start flex-col gap-10 w-[36%] h-full  p-2 max-sm:w-full">
              <h1 className="text-[#0C0531] text-4xl w-full max-sm:text-lg">Introduction to Facilities Management</h1>
              <p>
                As per our ancient traditions of Athidi Devo Bhava in ensuring the care and well being of the guests which happens in our Bharatiya Families is the foundation of Facilities Management which means that all facilities needed for a smooth working environment in offices , schools , colleges or for a smooth and comfortable stay in the hotel there are certain functions / departments are involved in managing that function and support staff working in that function are the pillars of good work environment</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center p-10 flex-col gap-5 bg-[#FFE0F1]  max-sm:w-full max-sm:justify-center max-sm:flex-col">
          <div className="flex flex-col gap-5 p-2 w-[45%] justify-center items-center max-sm:w-full">
            <h1 className="text-[#0C0531] text-4xl w-full text-center max-sm:text-lg">Why Advaya ?</h1>
            <p className="max-sm:text-center">
              Advaya, meaning {'"Unique"'} in Sanskrit, was founded by Guru Prasaad, bringing over 20 years of experience in the industry. We are backed by senior leaders in Facility Management, delivering excellence since 2023.</p>
          </div>
          <div>
            <img src="/LOGO.png" alt="" className="w-[150px] h-[150px]" />
          </div>
        </div>

        <div className="flex justify-center items-center p-2">
          <div className="w-[90%] flex justify-evenly items-center p-5 gap-2 max-sm:w-full max-sm:justify-center max-sm:flex-col">
            <div className="flex flex-col gap-5 p-2 w-[45%] max-sm:w-full">
              <h1 className="text-[#0C0531] text-4xl w-full max-sm:text-lg">FM Upskilling Initiative</h1>
              <p>India today is so developed in terms of infrastructure and development but due to lack of trained resources working in the Facility Management services are often hampered resulting in poor upkeep of the facilities or deterioration in terms of Asset Value necessitating repairs and renovations or in pollution levels in the transportation industry or the house keepers employed both in offices and in the Hotel Industry pan India . </p>
              <p>Today currently there are no training programs at all, or the off lines training don’t achieve their intended learning or any improvement in performance of that skill which will help in operational effectiveness for the company and also on cost savings and also ESG Goals due to the training offered .</p>
            </div>
            <div className="w-[40%] h-[50%] p-2 bg-inherit  max-sm:w-full">
              <img src="/Banners/Library_banner.jpeg" alt="" className="object-cover " />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center p-10 flex-col bg-[#F4F4F4] gap-5  max-sm:w-full max-sm:justify-center max-sm:flex-col">
          <div className="flex flex-col gap-5 p-2 justify-center items-center">
            <h1 className="text-4xl max-sm:text-lg" >What is Advaya’S <span className="text-[#B32073]">FM naipuNya</span> doing UNIQUELY </h1>
            <p>We are initiating India’s Upskilling for India’s  1st Blue-collar workers in the Facilities Management Industry for roles of</p>
            <div className="grid grid-cols-3 w-full justify-center items-center gap-5 max-sm:grid-cols-1">
              <div className="relative">
                <h1 className="text-center border-2 p-2 shadow-lg bg-white">Driver</h1>
                <p className="absolute -top-4 left-2 bg-black w-10 text-center text-yellow-500">1</p>
              </div>
              <div className="relative">
                <h1 className="text-center border-2 p-2 shadow-lg bg-white">House Keeper</h1>
                <p className="absolute -top-4 left-2 bg-black w-10 text-center text-yellow-500">2</p>
              </div>
              <div className="relative">
                <h1 className="text-center border-2 p-2 shadow-lg bg-white">Security</h1>
                <p className="absolute -top-4 left-2 bg-black w-10 text-center text-yellow-500">3</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center p-2 w-full">
            <div className="w-[90%] flex justify-evenly items-center p-5 gap-2 max-sm:w-full max-sm:justify-center max-sm:flex-col">
              <div className="w-[40%] h-[50%] p-2 bg-inherit  max-sm:w-full">
                <img src="/Banners/Library_banner.jpeg" alt="" className=" object-cover" />
              </div>
              <div className="flex flex-col gap-5 p-2 w-[45%] max-sm:w-full">
                <p>It’s the 1st APP based training program with different modules for different roles and responsibilities with an Assessment Based Learning along with Certification and also with Industry Leaders and Associations such as TFMC , Hyderabad , IFMA Accreditation , Industry Leaders and Mentors training program and modules with interactive based learning and gradient based learning for all participants of the training program .</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center p-2 w-full">
        <div className="w-[90%] flex justify-evenly items-center p-5 gap-2 max-sm:w-full max-sm:justify-center max-sm:flex-col">
            <div className="flex flex-col gap-5 p-2 w-[38%] max-sm:w-full">
              <h1 className="text-[#0C0531] text-4xl w-full max-sm:text-lg">FM Upskilling Initiative</h1>
              <p>We are the 1st Company in the FM Upskilling to tie up with IHM , Hyderabad one of Bharat’s premier Educational Institution in the Hotel & Facilities Management Industry and one of the finest institutions for curriculum development and delivery .
               </p>
               <p> Assessment Based Learning Methodology with 9 modules delivered monthly and in ensuring the yearly completion of the learning with refresher modules of the 9 modules delivered.</p>
            </div>
            <div className="w-[40%] h-[50%] p-2 bg-inherit  max-sm:w-full">
              <img src="/Banners/Wallpaper-2.jpeg" alt="" className=" object-cover" />
            </div>
          </div>
        </div>

        <div className="bg-[#FFF3FA] flex justify-center items-center gap-10 p-2 py-10 max-sm:p-4 max-sm:w-full max-sm:justify-center max-sm:flex-col">
          <div className="w-[50%] flex justify-center items-center gap-2 flex-col max-sm:w-full">
            <h1 className="text-[#0C0531] text-4xl w-full text-center p-2 max-sm:text-lg">Progressive Based Learning</h1>
            <p className="text-[#827A7A] ">Progressive Based Learning is basically going step wise learning process in the progressive years .</p>
            <div className="flex justify-center items-center flex-col">
              <p className="text-[#B32073]">1st Year – Basic Learning</p>
              <p className="text-[#B32073]">2nd Year- 1st Level.</p>
              <p className="text-[#B32073]">3rd Year – 2nd Level</p>
              <p className="text-[#B32073]">4th Year – Onwards Refresher course every 3 months .</p>
            </div>
            <p className="text-[#827A7A]">3 Year – Tie up for skill certification through NSQF .</p>
          </div>
        </div>

        <div className="flex justify-around items-center gap-5 p-5 max-sm:w-full max-sm:justify-center max-sm:flex-col">
          <div className="flex flex-col gap-5 p-2 w-[36%] max-sm:w-full">
            <h1 className="text-[#0C0531] text-4xl w-full text-center p-2 max-sm:text-lg">Advaya FM LMS App</h1>
            <p>The App is going to be available in Android Play Store and Apple Stores and the App is available in 5 Languages namely English, Hindi, Telugu, Kannada and Tamil and others, if necessary, shall be created.The App is developed on the latest frameworks and also to ensure that there are no duplication happening the following security measures are in place </p>
            <p>Each Mobile Nos is binded to the respective learning </p>
            <p>OTP and IMEI based login .</p>
            <p>Minimum Pass Percentile of 70% - To Proceed to next level .</p>
            <p>Dashboard for Individual clients .</p>
            <p>Payment based links also available for online based payment systems for small businesses</p>
            <p>Servers are Secure Servers Located In India and no personal information checks conducted .</p>
          </div>
          <div className="w-[40%] h-[50%] p-2 bg-inherit  max-sm:w-full">
            <img src="/Banners/Library_banner.jpeg" alt="" className=" object-cover" />
          </div>
        </div>

        <div className="flex justify-around items-center gap-5 p-10 max-sm:w-full max-sm:justify-center max-sm:flex-col">
          <div className="flex flex-col gap-2 w-[50%] p-2 max-sm:w-full">
            <div>
              <h1 className="text-4xl text-[#0C0531] max-sm:text-lg">Training Offered Roles and Modules</h1>
            </div>
            <div>
              <h1 className="text-xl text-[#B32073] max-sm:text-xs">For Logistics Business -</h1>
              <p>Modules Covered & Topics</p>
            </div>
            <div>
              <div>
                <h1>Defensive Driving Skills</h1>
                <p>Road Signs , Road Marking, Common Causes of Road Crashes and safe driving skills with practical tips from Industry Seniors who have been driving on Indian Roads for more. than 2 Decades. Total Modules – 4 Nos of 60 Mins with each Module having assessment .</p>
              </div>
              <div>
                <h1>1st Aid Training</h1>
                <p>Introduction to 1st Aid Kit and their usage and introduction to 1st aid training in accident-related 1st aid. 2nd Modules will be Advanced 1st Aid for every 100 Learners with good communication skills and understanding .</p>
              </div>

              <div>
                <h1>POSH Training</h1>
                <p>Prevention of Sexual Harassment in Workplace Law of 2013 Training by POSH Certified Trainer for 60 Minutes with assessment .</p>
                <p></p>
              </div>

              <div>
                <h1>Grooming with Personal Grooming</h1>
                <p>Effective Communication, & Hygiene Practices for 60 Minutes with Assessment </p>
              </div>
            </div>
          </div>
          <div className="w-[40%] h-[50%] p-2 bg-inherit  max-sm:w-full">
            <img src="/Banners/Library_banner.jpeg" alt="" className=" object-cover" />
          </div>
        </div>

        <div className="flex justify-around items-center gap-10 p-5 mt-5 mx-16 max-sm:w-full max-sm:justify-center max-sm:flex-col max-sm:m-0">
        <div className="w-[40%] h-[50%] p-2 bg-inherit  max-sm:w-full">
            <img src="/Banners/Library_banner.jpeg" alt="" className=" object-cover" />
          </div>
          <div>
            <div className="flex flex-col gap-3 w-[80%]">
              <h1 className="text-xl text-[#B32073]">For Housekeepers Business</h1>
              <p>Upskilling of Corporate Housekeeping Staff and Hotel House Keeping Staff in Indian Facilities & Hotel Management Sector</p>
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
              <div>
                <h3>Modules Covered & Topics</h3>
              </div>
              <div className="flex flex-col justify-center items-start gap-2">
                <h1>Introduction to Housekeeping Services :</h1>
                <p>Introduction to Various Tools.</p>
                <p>Introduction to various surfaces.</p>
                <p>Introduction to chemicals & uses.</p>
                <p>Chemical usage dilution and other content .</p>
                <p>Various types of cleaning such as dry, wet, scrubbing etc</p>
                <p>Introduction to cleaning schedules such as daily, weekly, monthly, cleaning videos</p>
              </div>
            </div>
          </div>

        </div>


        <div className="flex justify-around items-center gap-5 p-5 mt-5 max-sm:w-full max-sm:justify-center max-sm:flex-col">
          <div className="flex flex-col gap-5 p-2 w-[36%] max-sm:w-full">
            <div className="flex flex-col gap-3">
              <h1 className="text-xl text-[#B32073] max-sm:text-lg">For Security Business</h1>
              <p>Upskilling of Corporate and Residential Security Staff and Hotel House Keeping Staff in Indian Private Security Sector</p>
              <p>Modules Covered & Topics</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-[#0C0531]">Introduction to Security </h2>
              <p>As per the syllabus for the trade of Security Guard and General Duty Primary Job Responsibilities primarily and with industry leaders yet to be developed to be completed by 01st March 2024 .</p>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-[#0C0531]">1st Aid Training</h1>
              <p>Introduction to 1st Aid Kit and their usage and introduction to 1st aid training in accident-related 1st aid. 2nd Modules will be Advanced 1st Aid for every 100 Learners with good communication skills and understanding .</p>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-[#0C0531]">POSH Training</h1>
              <p>Prevention of Sexual Harassment in Workplace Law of 2013 Training by POSH Certified Trainer for 60 Minutes with assessment .</p>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-[#0C0531]">Grooming with Personal Grooming</h1>
              <p>Effective Communication, & Hygiene Practices for 60 Minutes with Assessment </p>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-[#0C0531]">Etiquettes</h1>
              <p>Communication Etiquettes , Cultural Sensitivity , Conflict Resolution , creating a positive atmosphere , Customer centric approach in challenging situations for 60 Minutes with Assessment.</p>
            </div>
          </div>
          <div>
            <img src="https://img.freepik.com/premium-vector/security-design_24877-33502.jpg?w=740" alt="" className=" object-cover" />
          </div>
        </div>

        <div>
          <div className="relative shadow-xl font-semibold">
            <div className="mt-5">
              <img src="/Banners/Assessment_Banner.jpeg" alt="Library_Banner" className="w-full h-96 object-cover blur-sm opacity-90" />
            </div>
            <div className="justify-center items-center flex absolute top-48 left-[330px] gap-5 w-[62%] flex-col max-sm:top-8 max-sm:w-full max-sm:left-0 max-sm:p-5">
              <h1 className="text-4xl font-bold text-[#0C0531] max-sm:text-lg">Future Expansion Plans</h1>
              <p>In aligning with Government of India 2024 Budget Plans People centric Inclusive development Advaya has exciting things which are lined up in the next year which will be revealed once the 1st phase of the basic training is rolled out successfully in the FM Learning space in aligning with our vision of Innovating FM Education in Bharat .</p>
            </div>

          </div>
        </div>

        <div className="flex justify-center items-center gap-2 h-96 max-sm:w-full max-sm:justify-center max-sm:flex-col">
          <div className="flex justify-center items-center flex-col w-[70%] gap-5 max-sm:w-full max-sm:p-5">
            <h1 className="text-4xl font-bold text-[#0C0531] max-sm:text-lg">Conclusion</h1>
            <p>We have our clear-cut road map defined in terms of the roll out, test, enrolment of trainees and also in terms of the deliverables by aligning with our <span className="text-[#B32073]">FM naipuNya</span> Program goals and objectives and those of the organization for whom the trainings are to be rolled out .</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 h-96 bg-[#FFEDF7] max-sm:w-full max-sm:justify-center max-sm:flex-col">
          <div className="flex justify-center items-center flex-col w-[40%] gap-5 max-sm:w-full max-sm:p-5">
            <h1 className="text-4xl font-bold text-[#0C0531] max-sm:text-lg">Interested ?</h1>
            <p className="text-[#b32072]">In case you wish to learn more about us or interested in knowing more about our offerings please contact Mr. Guru</p>
          </div>
        </div>

        <div className="h-44 relative flex justify-center items-center">
          <div className="absolute flex gap-10 p-10 shadow-xl  top-24 max-sm:top-16 bg-white rounded-lg w-[70%] h-32 justify-around items-center max-sm:w-[95%] max-sm:p-1 max-sm:gap-1">
            <p className="border-e-2 border-black px-10 max-sm:px-2">guru@advayafm.com</p>
            <p>90002 - 01232</p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard