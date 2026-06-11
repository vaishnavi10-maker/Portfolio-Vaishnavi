import React, { useState } from 'react'

const projects = [
  { id: 1, title: 'E-Commerce App', category: 'React', desc: 'Full-stack shopping platform', tech: ['React', 'Node.js', 'MongoDB'] },
  { id: 2, title: 'Portfolio Website', category: 'React', desc: 'Personal portfolio with animations', tech: ['React', 'Tailwind'] },
  { id: 3, title: 'REST API', category: 'Node.js', desc: 'RESTful API with authentication', tech: ['Node.js', 'Express', 'JWT'] },
  { id: 4, title: 'Chat App', category: 'Fullstack', desc: 'Real-time messaging application', tech: ['React', 'Socket.io', 'Node.js'] },
  { id: 5, title: 'Data Dashboard', category: 'React', desc: 'Analytics dashboard with charts', tech: ['React', 'D3.js'] },
  { id: 6, title: 'Auth Service', category: 'Node.js', desc: 'Microservice for user authentication', tech: ['Node.js', 'PostgreSQL'] },
]

const categories = ['All', 'React', 'Node.js', 'Fullstack']

const Projects = () => {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" style={{ padding: '60px 20px', maxWidth: '1300px', margin: '0 auto' }}>
       <div className="text-center mt-12 mb-6">
          <h2 className="text-4xl font-bold text-white mb-3">Projects</h2>
          <p className="text-slate-400 text-s">A selection of things I've built</p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-indigo-500" />
        </div>
      {/* Filter Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '40px', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              padding: '8px 22px',
              borderRadius: '999px',
              border: '2px solid #480ebc',
              background: active === cat ? '#480ebc' : 'transparent',
              color: active === cat ? '#fff' : '#480ebc',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
        {filtered.map(project => (
          <div
            key={project.id}
            style={{
              background: '#1e1e2e',
              borderRadius: '12px',
              padding: '24px',
              border: '1px solid #2e2e3e',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(72,14,188,0.2)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <span style={{ fontSize: '0.75rem', background: '#480ebc', color: '#fff', borderRadius: '999px', padding: '3px 10px' }}>
              {project.category}
            </span>
            <h3 style={{ margin: '14px 0 8px', color: '#e2e8f0' }}>{project.title}</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '16px' }}>{project.desc}</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {project.tech.map(t => (
                <span key={t} style={{ fontSize: '0.75rem', background: '#2e2e3e', color: '#94a3b8', borderRadius: '4px', padding: '3px 8px' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
