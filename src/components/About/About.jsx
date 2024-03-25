/* eslint-disable no-unused-vars */
import React from 'react'
import HeadingComponent from '../HeadingComponent'

const About = () => {
  const data ={
    label: 'About Me',
    heading: 'know me more📃'
  }
  return (
    <>
      <div className='section' id='about'>
        <HeadingComponent data={data} />
      </div>
    </>
  )
}

export default About