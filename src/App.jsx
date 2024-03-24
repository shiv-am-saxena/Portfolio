import { About, Skill, Home, Contact, NavBar, Footer } from './components';
import { useEffect, useState } from 'react';
import { ContextProvider } from './context/userContext'
const App = () => {
	const [color, setColor] = useState('#44bbff');
	const [themeMode, setTheme] = useState('dark');
	const [mode, setMode] = useState(false);

	const lightMode = () =>{
		setTheme('light');
		setMode(true)
	}
	const darkMode = () =>{
		setTheme('dark');
		setMode(false);
	}
	useEffect(() => {
		const body = document.querySelector("body");
		body.setAttribute('theme', themeMode)
	}, [themeMode])
	
	return (
		<ContextProvider value={{themeMode, lightMode, darkMode, color}}>
			<NavBar/>
			{/* <button className='themeBtn' onClick={mode? darkMode:lightMode} >{mode? 'dark':'light'}</button> */}
			<div></div>
			<Footer/>
		</ContextProvider>
	)
}

export default App