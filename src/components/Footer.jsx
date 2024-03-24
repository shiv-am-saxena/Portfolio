import useUserContext from "../context/userContext"

const Footer = () => {
	const {color} = useUserContext();
	return (
		<>
			<div className="footer" style={{ background: color }}>
				<p>Made with ❤️ by Shivam Saxena © 2020 - {new Date().getFullYear()}</p>
			</div>
		</>
	)
}

export default Footer