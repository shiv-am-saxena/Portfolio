const Footer = (color) => {
	// const year = new Date().getFullYear();
	return (
		<>
			<div className="footer" style={{ background: color.color }}>
				<p>Made with ❤️ by Shivam © 2020 - {new Date().getFullYear()}</p>
			</div>
		</>
	)
}

export default Footer