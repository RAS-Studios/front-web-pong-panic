import '../styles/features.css'
import { MdHeadset } from 'react-icons/md'
import { BsLightningFill } from 'react-icons/bs'
import { HiUserGroup } from 'react-icons/hi'
import { IoColorPaletteOutline } from 'react-icons/io5'

const features = [
  {
    icon: <MdHeadset size={28} color="#60a5fa" />,
    color: '#dbeafe',
    title: 'Immersive VR',
    description: 'Step into the game with full room-scale VR. Feel like you\'re really at the table.',
  },
  {
    icon: <BsLightningFill size={28} color="#a78bfa" />,
    color: '#ede9fe',
    title: 'Realistic Physics',
    description: 'Every spin, bounce, and smash feels natural thanks to advanced physics simulation.',
  },
  {
    icon: <HiUserGroup size={28} color="#f472b6" />,
    color: '#fce7f3',
    title: 'Multiplayer',
    description: 'Challenge friends online or practice with AI opponents at any skill level.',
  },
  {
    icon: <IoColorPaletteOutline size={28} color="#34d399" />,
    color: '#d1fae5',
    title: 'Low Poly Pastel World',
    description: 'Play in beautiful, calming environments with a unique artistic style.',
  },
]

export function Features() {
  return (
    <section className="features">
      <h2 className="features-title">Why You'll Love It</h2>
      <p className="features-subtitle">Everything you need for the perfect VR ping-pong experience</p>
      <div className="features-grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <div className="feature-icon" style={{ backgroundColor: feature.color }}>
              {feature.icon}
            </div>
            <h3 className="feature-card-title">{feature.title}</h3>
            <p className="feature-card-desc">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}