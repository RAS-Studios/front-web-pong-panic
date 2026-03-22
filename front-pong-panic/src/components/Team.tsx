import '../styles/team.css'
import av from '../assets/av.jpg'
import rb from '../assets/rb.png'
import sn from '../assets/sn.jpg'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const members = [
  {
    name: 'Alexandre VANNEUVILLE',
    role: 'VR Gameplay Developer',
    src: av,
    linkIn: 'https://www.linkedin.com/in/alexandre-vanneuville/',
    linkGit: 'https://github.com/jarebYT'
  },
  {
    name: 'Raphaël BEDLEEM',
    role: 'VR Gameplay Developer',
    src: rb,
    linkIn: 'https://www.linkedin.com/in/rapha%C3%ABl-bedleem-93312418a/',
    linkGit: 'https://github.com/Nokx04'

  },
  {
    name: 'Sonny NAIDJA',
    role: 'UI/UX Designer & Web Developer',
    src: sn,
    linkIn: 'https://www.linkedin.com/in/sonny-naidja/',
    linkGit: 'https://github.com/NASonny'
  },
]

export function Team() {
  return (
    <section className="team">
      <h2 className="team-title">Meet The Team</h2>
      <p className="team-subtitle">We're passionate about creating fun, accessible VR experiences for everyone</p>
      <div className="team-grid">
        {members.map((member) => (
          <div className="team-card" key={member.name}>
            <div className="team-avatar-wrapper">
              <img src={member.src} alt={member.name} className="team-avatar" />
            </div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <div className="team-links">
              <a href={member.linkIn} target="_blank" rel="noreferrer">
                <FaLinkedin size={24} color="#0A66C2" />
              </a>
              <a href={member.linkGit} target="_blank" rel="noreferrer">
                <FaGithub size={24} color="#2d3748" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}