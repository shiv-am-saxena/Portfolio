import { useState } from "react"

const Footer = () => {
	const [color, setcolor] = useState('#44bbff')
	return (
		<>
			<div className="footer" style={{ background: color }}>
				<p>Made with ❤️ by Shivam Saxena © 2020 - {new Date().getFullYear()}</p>
			</div>
		</>
	)
}

export default Footer