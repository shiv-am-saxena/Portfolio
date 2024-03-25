/* eslint-disable no-unused-vars */
import { About, Skill, Home, Contact, NavBar, Footer } from './components';
import { useEffect, useState } from 'react';
import { ContextProvider } from './context/userContext'
const App = () => {
	const [color, setColor] = useState('#44bbff');
	const [themeMode, setTheme] = useState('dark');
	const [mode, setMode] = useState(false);
	const [colorName, setColorName] = useState('skyblue');

	const lightMode = () => {
		setTheme('light');
		setMode(true)
	}
	const darkMode = () => {
		setTheme('dark');
		setMode(false);
	}
	useEffect(() => {
		const body = document.querySelector("body");
		body.setAttribute('theme', themeMode)
	}, [themeMode])

	return (
		<ContextProvider value={{ themeMode, lightMode, darkMode, color, colorName }}>
			<NavBar />
			{/* <button className='themeBtn' onClick={mode? darkMode:lightMode} >{mode? 'dark':'light'}</button> */}
			<Home/>
			<Footer />
		</ContextProvider>
	)
	// style={{boxShadow: `5px 5px 0px ${color},10px 10px 0px ${color}cc,15px 15px 0 ${color}b3,20px 20px 0 ${color}99,25px 25px 0 ${color}80,30px 30px 0 ${color}66,35px 35px 0 ${color}4d,40px 40px 0 ${color}33,45px 45px 0 ${color}1a;`}}
}

export default App