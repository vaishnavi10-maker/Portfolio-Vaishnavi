import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaEnvelope,FaLinkedin,FaGithub} from 'react-icons/fa';
import profilepic from '../src/assets/profile.jpg';
const Hero = () => {
  return (
  <div className='pt-32'>
    <div id='#' className='flex justify-between items-center max-w-7xl mx-auto flex-wrap pt-0 '>
        <div className='flex-1 min-w-75 mr-8 text-[2.5rem]'>
            <h3 className='text-[2.5rem] mb-4 text-[#dfc1c1]'>HAY! I'M Vaishnavi</h3>
            <h3 className='text-[2.5rem] mb-4 text-[#480ebc]'>I'M A WEB DEVELOPER |</h3>
            <p className='text-[1.2rem] text-[#c0bac4] leading-relaxed'>
          A passionate web developer with a keen interest in creating dynamic and responsive web applications. I love coding and enjoy learning new technologies to enhance my skills.
          I would love to help you guys!!! Let's connect and create something amazing together!
        </p>
        <div className=''>
           
            <TypeAnimation
             sequence={[
                'Web Developer',
                2000,
                'React Enthusiast',
                2000,
                'Frontend Developer',
                2000,
             ]}
             wrapper="span"
             speed={50}
             style={{fontSize:'40px',display:'inline-block',color:'white'}}
             repeat={Infinity}
            />
            

        </div>
        <div className='mt-10 flex gap-10'>
            <a href="mailto:vaishnavi.work3@gmail.com" target="_blank" rel='nooperner noreferrer' className='text-[#f7f1f1] text-[40px] transition-colors duration-300 hover:text-black'><FaEnvelope/></a>
            <a href="https://www.linkedin.com/in/vaishnavi-patil-1b3a0627b" target="_blank" rel="noopener noreferrer" className='text-[#f7f1f1] text-[40px] transition-colors duration-300 hover:text-black'>
          <FaLinkedin /></a>
           <a href="https://github.com/vaishnavi10-maker" target="_blank" rel="noopener noreferrer" className='text-[#f7f1f1] text-[40px] transition-colors duration-300 hover:text-black'>
          <FaGithub />
        </a>
        </div>
        </div>
        <div className='w-100 h-100 rounded-full border-4 border-[#ccc] shrink-0'>
            <img src={profilepic} alt="profile" className='w-full h-full object-cover rounded-full'/>
        </div>
    </div>
  </div>
  )
}

export default Hero