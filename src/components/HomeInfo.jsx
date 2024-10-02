import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} alt="" className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        // leading-snug tailwind class is used to give a line-height
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>wizardsWeb</span> 👋 
            <br />
            A <span className='font-semibold'> Web Developer Enthusiast. </span> 
            Let&apos;s explore my world of journey together
        </h1>
    ),
    2: (
       <InfoBox 
        text='Worked with many projects and picked up many skills along the way'
        link='/about'
        btnText='learn more'
       />
    ),
    3: (
        <InfoBox 
        text='Led multiple projects to success over the years. Curious about the projects ?'
        link='/projects'
        btnText='Visit my Portfolio'
       />
    ),
    4: (
        <InfoBox 
        text='Need a project done or looking for a dev ? I&apos;m just a few keystrokes away'
        link='/contact'
        btnText='Let&apos;s connect'
       />
    ),
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
