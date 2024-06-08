/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import Logo from './Logo';
import Hamburger from "./Hamburger";
const navbar = () => {
	const [color, setcolor] = useState("#44bbff");
	const [show, setShow] = useState();
	const navMenu = document.querySelector('.nav-menu');
	const menuShow = () => {
		setTimeout(function () {
			navMenu.style.display = 'flex';
		}, 10);
		setTimeout(function () {
			navMenu.style.top = '100%';
		}, 50);
		setTimeout(function () {
			navMenu.style.opacity = '100%';
		}, 100);
		setShow(false)
	}
	const menuHide = () => {
		setTimeout(function () {
			navMenu.style.display = 'none';
		}, 100);
		setTimeout(function () {
			navMenu.style.top = 0;
			navMenu.style.opacity = 0;
		}, 50);
		setShow(true);
	}
	useEffect(() => {
		if (screen.width <= 875) {
			menuHide();
		}
	}, [setShow])

	return (
		<nav id="navbar" style={{ borderColor: color }}>
			<div className="logo">
				<Logo color={color} />
				<button className='btn' onClick={show ? menuShow : menuHide}><Hamburger /></button>
			</div>
			<div className="nav-menu">
				<li className="nav-link"><a href="#">Home</a></li>
				<li className="nav-link"><a href="#">About</a></li>
				<li className="nav-link"><a href="#">Contact</a></li>
				<li className="nav-link"><a href="#">Hire Me</a></li>
			</div>
		</nav>
	)
}

export default navbar