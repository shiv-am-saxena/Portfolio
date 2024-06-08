import { useState } from 'react';
import HeadingComp from './HeadingComponent';


const Skill = () => {
    // eslint-disable-next-line no-unused-vars
    const [color, setcolor] = useState('#44bbff');


    return (
        <>
            <div id="skill">
                <HeadingComp props={{ label: "My Skill set", heading: 'Platforms⚒️' }} />
                <div className="h-scroll">
                    <div className="wideBx">
                        <div className="slide web">
                            <h1 >Web <span style={{ color: color }}>Technologies</span></h1>
                            <div className="imgCont">
                                <div className="imgBx">
                                    <img src="/Icons/html.png" alt="" />
                                </div>
                                <div className="imgBx">
                                    <img src="/Icons/css.png" alt="" />
                                </div>
                                <div className="imgBx">
                                    <img src="/Icons/javascript.png" alt="" />
                                </div>
                                <div className="imgBx">
                                    <img src="/Icons/mongo-db.png" alt="" />
                                </div>
                                <div className="imgBx">
                                    <img className='express' src="/Icons/express.png" alt="" />
                                </div>
                                <div className="imgBx">
                                    <img src="/Icons/react.png" alt="" />
                                </div>
                                <div className="imgBx">
                                    <img src="/Icons/nodejs.png" alt="" />
                                </div>
                                <div className="imgBx">
                                    <img src="/Icons/jquery.png" alt="" />
                                </div>
                                <div className="imgBx">
                                    <img src="/Icons/tailwind.png" alt="" />
                                </div>
                                <div className="imgBx">
                                    <img src="/Icons/bootstrap-framework-logo.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="slide programming">
                            <h1>Programming <span style={{ color: color }}>Languages</span></h1>
                            <div className="imgCont">
                                <div className="imgBx">
                                    <img src="/Icons/c-plus-plus.png" alt="" />
                                </div>
                                <div className="imgBx">
                                    <img src="/Icons/python.png" alt="" />
                                </div>
                                <div className="imgBx">
                                    <img src="/Icons/java.png" alt="" />
                                </div>
                            </div>
                            <h1>Other <span style={{ color: color }}>Softwares</span></h1>
                            <div className="imgCont">
                                <div className="imgBx">
                                    <img className='figma' src="/Icons/figma.png" alt="" />
                                </div>
                                <div className="imgBx">
                                    <img src="/Icons/linux.png" alt="" />
                                </div>
                                <div className="imgBx">
                                    <img src="/Icons/windows.png" alt="" />
                                </div>
                                <div className="imgBx">
                                    <img src="/Icons/visual-studio-code.png" alt="" />
                                </div>
                                <div className="imgBx">
                                    <img src="/Icons/git.png" alt="" />
                                </div>
                                <div className="imgBx">
                                    <img src="/Icons/github.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill;