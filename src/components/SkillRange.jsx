import React from 'react'
import useUserContext from '../context/userContext'

const SkillRange = (props) => {
    const { color } = useUserContext();
    return (
        <>
            <div className='skillBx'>
                <div className='textBx'>
                    <p>{props.name}</p>
                    <p>{props.range}%</p>
                </div>
                <div className='bgSlider' >
                    <div className='inputSlider' style={{backgroundColor:color, width:`${props.range}%`}}></div>
                </div>
            </div>
        </>
    )
}

export default SkillRange