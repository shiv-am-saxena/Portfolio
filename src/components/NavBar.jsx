import useUserContext from '../context/userContext';
import { Logo, Hamburger } from './index';
import { useEffect, useState } from 'react';
const NavBar = () => {
	const [show, setShow] = useState();
	const rightMenu = document.querySelector('.rightMenu')
	const { color } = useUserContext();
	const menuShow = () => {
		setTimeout(function () {
			rightMenu.style.display = 'flex';
		}, 10);
		setTimeout(function () {
			rightMenu.style.top = '100%';
		}, 50);
		setTimeout(function () {
			rightMenu.style.opacity = '100%';
		}, 100);
		setShow(false)
	}
	const menuHide = () => {
		setTimeout(function () {
			rightMenu.style.display = 'none';
		}, 100);
		setTimeout(function () {
			rightMenu.style.top = 0;
			rightMenu.style.opacity = 0;
		}, 50);
		setShow(true);
	}
	useEffect(() => {
		if (screen.width <= 875) {
			menuHide();
		}
	}, [setShow])

	return (
		<>
			<nav className="navbar" style={{ borderColor: color}}>
				<div className="svgLogo">
					<Logo color={color} />
				</div>
				<button className='btn' onClick={show ? menuShow : menuHide}><Hamburger /></button>
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