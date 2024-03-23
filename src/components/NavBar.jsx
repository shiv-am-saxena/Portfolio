import { Logo, Hamburger } from './index';
import { useState } from 'react';
const NavBar = (color) => {
	// const [color, setColor] = useState('#44bbff');
	const [show, setShow] = useState(false);
	const rightMenu = document.querySelector('.rightMenu')
	const menuShow = () => {
		setTimeout(function () {
			rightMenu.style.display = 'flex';
		}, 0);
		setTimeout(function () {
			rightMenu.style.top = '100%';
			rightMenu.style.opacity = '100%';
		}, 50);
		setTimeout(function () {
			rightMenu.style.opacity = '100%';
		}, 100);
	}
	const menuHide = () => {
		rightMenu.style.display = 'none';
		rightMenu.style.top = '0';
		rightMenu.style.opacity = '0';
	}

	return (
		<>
			<nav className="navbar" style={{ borderColor: color.color }}>
				<div className="svgLogo">
					<Logo color={color.color} />
				</div>
				<button className='btn' onClick={() => { setShow((prev)=>(!prev)); show ? menuShow() : menuHide()}}><Hamburger color={'white'} /></button>
				<div className="rightMenu">
					<li><a href="#">Home</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Contact</a></li>
					<li><a href="#">Hire Me</a></li>
				</div>
			</nav>
		</>
	)
}

export default NavBar