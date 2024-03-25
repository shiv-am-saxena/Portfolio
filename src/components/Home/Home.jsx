import useUserContext from '../../context/userContext'
import codePic from '../../assets/Images/code.png';
import Typed from 'typed.js';
import { useRef, useEffect } from 'react';
import DownloadBtn from '../DownloadBtn';
const Home = () => {
	const { color } = useUserContext();
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
			smartBackspace: false,
			loop: true,
		});
		return () => {
			typed.destroy();
		};
	}, [])
	

	return (
		<div className='section' id='home'>
			<div className="leftHome">
				<div className='leftBox'>
					<h1>Hey,<br />
						I am
						<span style={{ color: color }}> Shivam Saxena.
						</span><br />
						I'm a <span ref={type}/>
					</h1>
					<p className='sum'>Welcome to my official Portfolio website where I put<br /> all my work related to Frontend and Software<br /> Development</p>
					<DownloadBtn/>
				</div>
			</div>
			<div className="rightHome">
				<img src={codePic} alt="Information about me" style={{ boxShadow: `5px 5px 0px ${color},10px 10px 0px ${color}cc,15px 15px 0 ${color}b3,20px 20px 0 ${color}99,25px 25px 0 ${color}80,30px 30px 0 ${color}66,35px 35px 0 ${color}4d,40px 40px 0 ${color}33,45px 45px 0 ${color}1a` }} />
			</div>
		</div>
	)
}

export default Home