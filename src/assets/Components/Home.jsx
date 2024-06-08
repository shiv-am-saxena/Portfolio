import { useState, useEffect, useRef } from "react";
import DownloadBtn from './DownloadBtn';
import Typed from 'typed.js';
import Code from '../Images/code.png';
const Home = () => {
    const [color, setColor] = useState('#44bbff');
    const type = useRef();
    useEffect(() => {
        const typed = new Typed(type.current, {
            strings: [
                "Front-End Developer.",
                "Software Developer.",
                "UI/UX Designer.",
                "Programmer.",
            ],
            typeSpeed: 60,
            backSpeed: 50,
            shuffle: false,
            smartBackspace: true,
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, [])
    return (
        <div id="home">
            <aside className="home-left">
                <div className="bigBlock">
                    <h1 className="heading">
                        Hey,<br />
                        I am <span className="name" style={{ color: color }}>Shivam Saxena.</span><br />
                        I&apos;m a <span ref={type} />
                    </h1>
                    <p>Welcome to my official portfolio website where I put<br /> all my work related to Front-End and Software <br />Development.</p>
                    <div className="btnBox">
                        <DownloadBtn color={color} />
                    </div>
                </div>
                <div className="smallBlock">
                    <a href="https://www.github.com/shiv-am-saxena/" target="_blank" className="media-link">Github</a>
                    <a href="https://www.linkedin.com/in/shiv-am-saxena" target="_blank" className="media-link">LinkedIn</a>
                    <a href="https://www.twitter.com/shiv_am_saxena/" target="_blank" className="media-link">Twitter</a>
                </div>
                <div className="mediaLink">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </aside>
            <div className="imageBx">
                <img src={Code} alt="Image" style={{ boxShadow: ((screen.width <= 875) ? `5px 5px 0px ${color},10px 10px 0px ${color}cc,15px 15px 0 ${color}b3,20px 20px 0 ${color}99,25px 25px 0 ${color}80` : `5px 5px 0px ${color},10px 10px 0px ${color}cc,15px 15px 0 ${color}b3,20px 20px 0 ${color}99,25px 25px 0 ${color}80,30px 30px 0 ${color}66,35px 35px 0 ${color}4d,40px 40px 0 ${color}33,45px 45px 0 ${color}1a`) }}/>
            </div>
        </div>
    )
}

export default Home