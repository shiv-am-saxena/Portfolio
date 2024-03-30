/* eslint-disable no-unused-vars */
import { About, Skill, Home, Contact, NavBar, Footer, Education } from './components';
import { useEffect, useState } from 'react';
import { ContextProvider } from './context/userContext'
const App = () => {
	const [color, setColor] = useState('#44bbff');
	const [colorName, setColorName] = useState('skyblue');
	return (
		<ContextProvider value={{ color, colorName }}>
			<NavBar />
			{/* <button className='themeBtn' onClick={mode? darkMode:lightMode} >{mode? 'dark':'light'}</button> */}
			<Home/>
			<About/>
			<Skill/>
			<Education/>
			<Contact/>
			<Footer />
		</ContextProvider>
	)
}

export default App