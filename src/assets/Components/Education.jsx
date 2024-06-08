import Card from './Card';
import HeadingComponent from './HeadingComponent';
const Education = () => {
    const data = {
        label: 'Summary',
        heading: 'Resume 📄'
    }
    return (
        <>
            <div id='education'>
                <HeadingComponent props={data} />
                <div className="summary">
                    <div className='cardContainer'>
                        <div className="education">
                            <h1>MY EDUCATION</h1>
                            <Card props={{ time: "2023-2026", course: "Bachelor Of Technology", stream: "Computer Science & Engineering", link: "https://www.srmu.ac.in/", from: "Shri Ramswaroop Memorial University", gpa: "Cumulative GPA: 5.96/10" }} />
                            <Card props={{ time: "2019-2022", course: "Diploma In Engineering", stream: "Computer Science & Engineering", link: "https://www.iul.ac.in/", from: "Integral University", gpa: "Cumulative GPA: 7.74/10" }} />
                            <Card props={{ time: "2018-2019", course: `High School`, stream: "Board: Central Board Of Secondary Education", link: "http://www.rlb14in.com/", from: "Rani Laxmi Bai Memorial Senior Secondary School", gpa: "Cumulative GPA: 7.1/10" }} />
                        </div>
                        <div className="courses">
                            <h1>MY COURSES AND CERTIFICATIONS</h1>
                            <Card props={{ time: "ISSUED MAY 2024", course: "Programming Foundations With Python", stream: "Instructor: NxtWave", link: "https://certificates.ccbp.in/academy/programming-foundations-with-python?id=KRYGWWLLDZ", from: "NxtWave" }} />
                            <Card props={{ time: "ISSUED JUN 2023", course: "Build Your Own Responsive Website", stream: "Instructor: NxtWave", link: "https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=UPWXNNUYZQ/", from: "NxtWave" }} />
                            <Card props={{ time: "ISSUED MAR 2023", course: "Build Your Own Static Website", stream: "Instructor: NxtWave", link: "https://certificates.ccbp.in/academy/static-website?id=FDAQDOQKFD", from: "NxtWave" }} />
                            <Card props={{ time: "ISSUED AUG 2022", course: "Learn C++ Programming - Beginner to Advance", stream: "Instructor: Abdul Bari", link: "https://www.udemy.com/certificate/UC-bee22390-a4fd-4c2b-b4ff-551389c7c8fd/", from: "Udemy" }} />
                            <Card props={{ time: "ISSUED JUN 2021", course: "Python Programming Course - Beginner to Advance", stream: "Instructor: LearnVern", link: "https://www.learnvern.com/certificate?candidate_id=CAN_13489731&certificate_id=CAN_134897311055971", from: "LearnVern" }} />
                            <Card props={{ time: "ISSUED MAR 2024", course: "The Complete Full Stack JavaScript Course", stream: "Instructor: Joseph Delgadillo, Nick Germaine", link: "https://www.udemy.com/certificate/UC-4fdb178d-6535-46bc-8845-ede953852e69/", from: "Udemy" }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education