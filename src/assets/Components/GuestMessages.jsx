import '../../index.css'
import Navbar from './navbar'
import { useEffect, useState } from 'react';
import axios from 'axios';
const GuestMessages = () => {
    const [data, setData] = useState([])
    let arr = [];
    const fetchMsg = async () => {
        const response = await axios.get('https://portfolio-backend-3wl8.onrender.com/api/v1/message/recieve');
        // console.log(response.data.data)
        arr = response.data.data;
        setData(arr);
    }
    useEffect(() => {
        fetchMsg();
        const divBx = document.querySelector('.messagesBx');
        let clutter = ``;
        data.forEach((e)=>{
            clutter+=`<p>Name: ${e.fullName}<br/>
            Contact no- ${e?.number || null}<br/>
            Email: ${e.email}<br/>
            Message: ${e.message}<br/>
            TimeStamp: ${e?.createdAt || null}<br/>
            <hr/></p>`
        })
        divBx.innerHTML = clutter;
    })

    return (
        <>
            <Navbar />
            <div className="messagesBx">
            </div>
        </>
    )
}
export default GuestMessages