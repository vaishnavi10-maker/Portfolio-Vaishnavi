import React from 'react'

const certifications = [
  {
    title: 'Data Analytics using Python and R from raw data to business stories',
    issuer: 'Indus University',
    date: 'Sept 2024',
    
    link: 'https://drive.google.com/file/d/1V59IWS86zCmi0DUlWcihsY0JZw_wrK1l/view?usp=sharing',
  },
  {
    title: 'Gen AI Academy',
    issuer: 'Google Cloud HacktoSkill',
    date: 'May 2025',
    link: 'https://drive.google.com/file/d/1m8REbLF-Pqa0goC30mKkxLRVS0LJe5Sh/view?usp=sharing',
  },
  {
    title: 'Gen AI Mastermind',
    issuer: 'Outskill',
    date: 'Nov 2023',
    
    link: 'https://drive.google.com/file/d/1soc3ucDJj00v7oNBcyeVijp81-Ti2Idk/view?usp=sharing',
  },
  {
    title: 'Postman API Fundamentals Student Expert',
    issuer: 'Postman',
    date: 'Jun 2025',
     
    link: 'https://api.badgr.io/public/assertions/ynQQhAJmSyWS6KyHzvxBsg',
  },
  {
    title: 'Google Cloud Arcade Facilitator Program `25',
    issuer: 'Google Cloud Arcade',
    date: 'Apr 2025',
     
    link: 'https://drive.google.com/file/d/1NwzThBDB86TZQKZ19InrcscWNC1FOx49/view?usp=sharing',
  },
  {
    title: 'Blockchain Technology and Digital Walllets seminar',
    issuer: 'Lokmanya College',
    date: 'Feb 2025',
    
    link: 'https://drive.google.com/file/d/15EtLEWx4VCyq6XMiH882T_DWQDlvqOC3/view?usp=sharing',
  },
]

const CertificationSection = () => {
  return (
    <section id="certificate" className="py-20 px-4 bg-[#0f0f1a]">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-3">Certifications</h2>
          <p className="text-slate-400 text-sm">Credentials & achievements I've earned</p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-indigo-500" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#1a1a2e] border border-slate-700 rounded-2xl p-6 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-250 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
               
                <span className="text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 rounded-full px-3 py-1">
                  {cert.date}
                </span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-indigo-400 transition-colors">
                {cert.title}
              </h3>
              <p className="text-slate-500 text-sm mb-4">{cert.issuer}</p>
              <div className="flex items-center gap-1 text-indigo-500 text-sm font-medium">
                <span>View Credential</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CertificationSection
