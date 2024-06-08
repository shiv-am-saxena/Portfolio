/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
const Card = ({props}) => {
    const [color, setcolor] = useState('#44bbff');
    const { time, course, stream, link, gpa, from} = props;
    return (
        <>
            <div className='card' style={{ borderColor: color, boxShadow: ` 0px 4px 100px 2px ${color}33` }}>
                <p style={{backgroundColor: `${color}cc`}}>{time}</p>
                <h1>{course}</h1>
                <h2>{stream}</h2>
                <a href={link} target='_blank'>{from} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="external-link-alt"><path fill={color} d="M18,10.82a1,1,0,0,0-1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8A1,1,0,0,1,5,7h7.18a1,1,0,0,0,0-2H5A3,3,0,0,0,2,8V19a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V11.82A1,1,0,0,0,18,10.82Zm3.92-8.2a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H15a1,1,0,0,0,0,2h3.59L8.29,14.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V9a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z"></path></svg> </a>
                <p>{gpa}</p>
            </div>
        </>
    )
}

export default Card