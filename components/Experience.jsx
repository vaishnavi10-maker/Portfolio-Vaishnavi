import React from 'react'
import cert1 from '../src/assets/2c.png'
import cert2 from '../src/assets/1c.png'

const experiences = [
  {
    id:1,
    title: 'Full Stack Developer Intern',
    company: 'Kattalyx Labs Pvt. Ltd.',
    duration: 'January 2024 - March 2024',
    description: 'Worked on developing a web application for a startup company about educational website. created interactive and user-friendly interfaces using React.js, JavaScript, Tailwind CSS, and REST APIs. Collaborated with cross-functional teams to design and implement frontend features, improve user experience, and ensure seamless integration between frontend and backend systems. Enhanced authentication mechanisms through JWT-based user sessions and contributed to notification systems for real-time user updates. Participated in API optimization and performance improvement initiatives, helping reduce response times and improve overall platform efficiency. Gained hands-on experience in software development lifecycle practices, version control, debugging, testing, and agile development methodologies while working on real-world solutions.',
    img: cert1,
    link: 'https://drive.google.com/file/d/1ti3QHvI9nzmBnJ9b2nZDJ5Wt5pdQ-NUC/view?usp=sharing',
  },
  {
    id:2,
    title: 'Software Development Engineer Intern',
    company: 'BlueStock Fin',      
    duration: 'August 2025 - September 2025',
    description: 'Worked as a Software Development Engineer Intern at Bluestock Fintech, contributing to the development and enhancement of a stock market analysis platform. Developed responsive and user-friendly web applications using React.js, JavaScript, Tailwind CSS, and REST APIs. Collaborated with cross-functional teams to design and implement frontend features, improve user experience, and ensure seamless integration between frontend and backend systems. Enhanced authentication mechanisms through JWT-based user sessions and contributed to notification systems for real-time user updates. Participated in API optimization and performance improvement initiatives, helping reduce response times and improve overall platform efficiency. Gained hands-on experience in software development lifecycle practices, version control, debugging, testing, and agile development methodologies while working on real-world fintech solutions.',
    img: cert2,
    link: 'https://drive.google.com/file/d/1RP6Wo_mgsXV88L5AyWBZ66QqLm2OcEEh/view?usp=sharing',
  },
]

const Experience = () => {
  const [active,setActive] = React.useState(1);
  const currentExperience=experiences.find((exp)=>exp.id===active);
  return (
    
      <section id='experience' className="min-h-screen bg-black text-white  ">
         <div className="text-center mt-12">
          <h2 className="text-4xl font-bold text-white mb-3">Experience</h2>
          <p className="text-slate-400 text-sm">My professional journey and roles</p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-indigo-500" />
        </div>
        
        <div className='   flex justify-center items-center'>
        <div className="w-[90%] max-w-6xl  ">

        {/* Tabs */}
        <div className="flex justify-center gap-5 mb-8 sticky top-0 z-10 bg-black py-4">

          {experiences.map(exp => (
            <button
              key={exp.id}
              onClick={() => setActive(exp.id)}
              className={`px-6 py-2 rounded-full transition-all

              ${
                active === exp.id
                  ? "bg-zinc-800"
                  : "bg-transparent"
              }
            `}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Main Card */}

        <div className="relative border border-zinc-800 rounded-3xl p-16">

          {/* Dots Background */}
          <div className="absolute inset-0 opacity-60 bg-[radial-gradient(#444_1px,transparent_1px)] bg-size-[20px_20px]" />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div className="flex flex-col h-full">

              <h2 className="text-4xl font-bold mb-4">
                {currentExperience.company}
              </h2>

              <div className="overflow-y-scroll max-h-64 pr-3 scrollbar-think scrollbar-thumb-zinc-400 scrollbar-track-zinc-900">
                <p className="text-zinc-300 leading-10 text-xl">
                  {currentExperience.description}
                </p>
              </div>

            </div>

            {/* Right */}
            <div className="flex justify-center">

              <a href={currentExperience.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <img src={currentExperience.img} alt={currentExperience.company} className="w-2xl h-full object-cover rounded-lg hover:opacity-80 transition-opacity duration-200" />
              </a>

              {/* <div className="absolute bottom-4 left-1/2 transform translate-x-1/2 bg-zinc-800 px-4 py-2 rounded-full text-sm">
                {currentExperience.title}
              </div> */}

            </div>

          </div>
        </div>

      </div>
</div>
    </section>

  )
}

export default Experience