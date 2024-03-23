import { About, Skill, Home, Contact, NavBar, Footer } from './components';
import { useState } from 'react';
const App = () => {
	const [color, setColor] = useState('#44bbff');
	// const year = new Date().getFullYear();
	return (
		<>
			<NavBar color={color} />
			<Footer color={color}/>
		</>
	)
}

export default App