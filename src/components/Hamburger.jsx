import useUserContext from "../context/userContext"

const Hamburger = () => {
    const {themeMode, color} = useUserContext();
    return (
        <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Menu / Menu_Alt_02">
                <path id="Vector" d="M11 17H19M5 12H19M11 7H19" stroke={(themeMode !== 'light')? 'white' : color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>
    )
}
export default Hamburger