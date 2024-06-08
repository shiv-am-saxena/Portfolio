/* eslint-disable react/prop-types */
import resume from '../../../public/Shivam_Saxena.pdf';
const DownloadBtn = (props) => {
    const { color } = props;
    return (
      <a href={resume} id='downloadBtn' style={{ borderColor:color}} download="resume-shivam-saxena.pdf">Download CV</a>
    )
  }
  
export default DownloadBtn