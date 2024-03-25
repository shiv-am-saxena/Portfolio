// import React from 'react'
import resume from '../assets/Images/Shivam_Saxena.pdf';
import useUserContext from '../context/userContext';
const DownloadBtn = () => {
  const { colorName } = useUserContext();
  return (
    <a href={resume} className='dwnBtn' color={colorName} download="resume-shivam-saxena.pdf">Download CV</a>
  )
}

export default DownloadBtn