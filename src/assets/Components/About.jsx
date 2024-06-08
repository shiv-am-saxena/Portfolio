import HeadingComponent from "./HeadingComponent";
import DownloadBtn from "./DownloadBtn";
import { useState } from "react";
const About = () => {
    const [color, setcolor] = useState('#44bbff')
    return (
        <div id="about">
            <HeadingComponent props={{ label: "About", heading: "Know me More" }} />
            <div className="aboutContent">
                <div className="about"></div>
                <div className="picDiv">
                    <div className="bgCont" style={{ borderColor: color, boxShadow: `10px 5px 75px ${color}` }}>
                    </div>
                </div>
                <div className='detailCont'>
                    <p>Hey, I am Shivam Saxena. I&apos;m a Front-End Developer, a UI/UX Designer, a Software Engineer and a Programmer who focused on crafting clean and user-friendly experiences, I am passionate about building software that improves the lives of those around me. <br /><br />
                    </p>
                    <p>
                        I&apos;m a versatile software developer with expertise in C++ and front-end web development. Proven ability to create efficient and user-friendly applications. Strong problem-solving skills, adept at collaborating in fast-paced environments. Eager to contribute technical proficiency to drive innovation in a dynamic team setting.
                    </p>
                    <div className='detailChart'>
                        <p style={{ borderColor: color }}><b>Name:</b> Shivam Saxena</p>
                        <p style={{ borderColor: color }}><b>Email:</b> saxenashivam2203@gmail.com</p>
                        <p style={{ borderColor: color }}><b>Age:</b> {new Date().getFullYear() - 2003}</p>
                        <p><b>From:</b> Uttar Pradesh, India</p>
                    </div>
                    <DownloadBtn color={color} />
                </div>
            </div>
            <div className="strip">
                <div className="h-strip">
                    <div className="marquee">
                        <h1>Front-End Web Developer</h1>
                        <img src="/Icons/web-development.png" className="webDev" alt="" />
                    </div>
                    <div className="marquee">
                        <h1>UI/UX Designer</h1>
                        <img src="/Icons/design-idea.png" className="ui" alt="" />
                    </div>
                    <div className="marquee">
                        <h1>Software Developer</h1>
                        <img src="/Icons/app-devolopment.png" alt="" />
                    </div>
                    <div className="marquee">
                        <h1>Programmer</h1>
                        <img src="/Icons/programmer.png" alt="" />
                    </div>
                    <div className="marquee">
                        <h1>Front-End Web Developer</h1>
                        <img src="/Icons/web-development.png" className="webDev" alt="" />
                    </div>
                    <div className="marquee">
                        <h1>UI/UX Designer</h1>
                        <img src="/Icons/design-idea.png" className="ui" alt="" />
                    </div>
                    <div className="marquee">
                        <h1>Software Developer</h1>
                        <img src="/Icons/app-devolopment.png" alt="" />
                    </div>
                    <div className="marquee">
                        <h1>Programmer</h1>
                        <img src="/Icons/programmer.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About