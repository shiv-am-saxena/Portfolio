import { Card, HeadingComponent, SkillRange } from '../index';
const Education = () => {
    const data = {
        label: 'Summary',
        heading: 'Resume 📄'
    }
    return (
        <>
            <div id='education'>
                <HeadingComponent data={data} />
                <div className="summary">
                    <div className='cardContainer'>
                        <div className="education">
                            <h1>MY EDUCATION</h1>
                            <Card time="2019-2022" course="Diploma In Engineering" stream="Computer Science & Engineering" link="https://www.iul.ac.in/" from="Integral University" gpa="Cumulative GPA: 7.74/10" />
                            <Card time="2023-2026" course="Bachelor Of Technology" stream="Computer Science & Engineering" link="https://www.srmu.ac.in/" from="Shri Ramswaroop Memorial University" gpa="Cumulative GPA: 5.96/10" />
                        </div>
                        <div className="courses">
                            <h1>MY COURSES AND CERTIFICATIONS</h1>
                            <Card time="ISSUED AUG 2022" course="Learn C++ Programming - Beginner to Advance" stream="Instructor: Abdul Bari" link="https://www.udemy.com/certificate/UC-bee22390-a4fd-4c2b-b4ff-551389c7c8fd/" from="Udemy" />
                            <Card time="ISSUED AUG 2022" course="Learn JAVA Programming - Beginner to Advance" stream="Instructor: Abdul Bari" link="https://www.udemy.com/certificate/UC-bee22390-a4fd-4c2b-b4ff-551389c7c8fd/" from="Udemy" />
                            <Card time="ISSUED JUNE 2021" course="Python Programming Course - Beginner to Advance" stream="Instructor: LearnVern" link="https://www.learnvern.com/certificate?candidate_id=CAN_13489731&certificate_id=CAN_134897311055971" from="LearnVern" />
                            <Card time="ISSUED MAR 2024" course="The Complete Full Stack JavaScript Course" stream="Instructor: Joseph Delgadillo, Nick Germaine" link="https://www.udemy.com/certificate/UC-4fdb178d-6535-46bc-8845-ede953852e69/" from="Udemy" />
                        </div>
                    </div>
                    <div className="skillCont">
                        <h1>My Skills</h1>
                        <SkillRange name="HTML" range="97"/>
                        <SkillRange name="C++" range="90"/>
                        <SkillRange name="JAVA" range="88"/>
                        <SkillRange name="CSS" range="85"/>
                        <SkillRange name="JavaScript" range="82"/>
                        <SkillRange name="Python" range="76"/>
                        <SkillRange name="Red Teaming" range="70"/>
                        <SkillRange name="Web Application Security" range="60"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education