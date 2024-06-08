import axios from "axios";
import HeadingComponent from "./HeadingComponent";
import { useState } from "react";
const Contact = () => {

    const [credentials, setCredentials] = useState({ fullName:'',number:'', email: '', message: '' });
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    const sendResponse = async (e) => {
        e.preventDefault();
        const response = await axios.post('https://portfolio-backend-3wl8.onrender.com/api/v1/message/send', credentials);
        console.log(response);
        setTimeout(()=>{
            location.reload();
        }, 1000);
    }

    return (
        <div id="contact">
            <HeadingComponent props={{ label: "Contact", heading: 'Get in touch' }} />
            <div className="contactBx>">
                <div className="contactForm">
                    <form onSubmit={sendResponse}>
                        <h1>Send a message</h1>
                        <div className="wrapper">
                            <div className="inputBx">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="fullName" onChange={handleChange} />
                            </div>
                            <div className="inputBx">
                                <label htmlFor="number">Contact No:</label>
                                <input type="text" id="number" name="number" onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="inputBx">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" onChange={handleChange}/>
                        </div>
                        <div className="inputBx">
                            <label htmlFor="message">Message:</label>
                            <textarea name="message" rows={5} id="message" onChange={handleChange}></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact