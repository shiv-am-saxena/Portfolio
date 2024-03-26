/* eslint-disable no-unused-vars */
import React from 'react'
import { DownloadBtn, HeadingComponent } from '../index.js';

import useUserContext from '../../context/userContext'
const About = () => {
	const { color } = useUserContext()
	const data = {
		label: 'About Me',
		heading: 'know me more📃'
	}
	return (
		<>
			<div className='section' id='about'>
				<HeadingComponent data={data} />
				<div className="aboutContent">
					<div className="picDiv">
						<div className="bgCont" style={{ borderColor: color, boxShadow: `10px 5px 75px ${color}` }}>
						</div>
					</div>
					<div className='detailCont'>
						<p>Hey, I am Shivam Saxena. I'm a Front-End Developer, a UI/UX Designer, a Software Engineer and a Programmer who focused on crafting clean and user-friendly experiences, I am passionate about building software that improves the lives of those around me. <br /><br />
							I’m a versatile software developer with expertise in C++ and front-end web development. Proven ability to create efficient and user-friendly applications. Strong problem-solving skills, adept at collaborating in fast-paced environments. Eager to contribute technical proficiency to drive innovation in a dynamic team setting.
						</p>
						<DownloadBtn/>
					</div>
				</div>
			</div>
		</>
	)
}

export default About