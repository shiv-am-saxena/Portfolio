import { useState } from "react"
import { Link } from "react-router-dom"
const Footer = () => {
	const [color, setcolor] = useState('#44bbff')
	return (
		<>
			<div className="footer" style={{ background: color }}>
				<p>Made with <Link to="/message">❤️</Link> by Shivam Saxena © 2020 - {new Date().getFullYear()}</p>
			</div>
		</>
	)
}

export default Footer