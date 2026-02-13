import { useState } from "react"
import Header from "../Header"
import BuilderForm from "./BuilderForm"
import ResumePreview from "./ResumePreview/preview"
import TearmsAndConditionsPopup from "./TearmsAndConditionsPopup"


const ResumeBuilder = () => {

    // important >>
    const [resumeData, setResumeData] = useState({
        // PERSONAL >>
        personal:{
            fullName:"",
            phone:"",
            email:"",
            urlType:"Linkedin",
            url:""
        },

        // EDUCATION >>
        education:{
            graduation:{
                college:"",
                branch:"",
                location:"",
                cgpa:0,
                enrollmentDate:"",
                completionDate:""
            },

        },

        // SKILLS >>
        skills:{
            technical:[],
            tools:[],
            cloud:[]
        },

        // SOFTSKILLS >>
        softSkills:[],

        // EXPERIENCE >>
        experience:
            {
                company:"",
                experienceType:"",
                role:"",
                startDate:"",
                endDate:"",
                description:"",
                isExperience:false,
        },

        // PROJECT >>
        project:{
                title:"",
                link:"",
                explanation:"",
                techStack:[],
                isHaveProject:false
        }
        
    })

    const [showPopup, setShowPopup] = useState(true); // tearms and conditions popup

    const handleAgree = () => {
        setShowPopup(false);
    };

    return (
        <>
        <Header/>
        <div className="min-h-screen w-screen bg-emerald-100 py-14 md:py-20 flex flex-col justify-start items-center">
     
        {/* Tearms and conditions  */}
        {showPopup && <TearmsAndConditionsPopup handleAgree={handleAgree}/>}

            {/* Content */}
            <div className="w-full md:w-[95%] flex flex-col md:flex-row justify-center md:justify-center items-start mx-5 md:my-10 oveflow-hidden">
            <BuilderForm resumeData={resumeData} setResumeData={setResumeData}/>
            <ResumePreview resumeData={resumeData}/>
            </div>
        </div>
        </>
    )
}

export default ResumeBuilder