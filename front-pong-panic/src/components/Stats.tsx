import '../styles/stats.css'
import { FaTrophy, FaMedal } from 'react-icons/fa'
import { GiArcheryTarget } from 'react-icons/gi'
import { IoTrendingUp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const stats = [
  {
    icon: <FaTrophy size={28} color="#f59e0b" />,
    color: '#fef3c7',
    value: '1,247',
    label: 'Matches Played',
  },
  {
    icon: <GiArcheryTarget size={28} color="#34d399" />,
    color: '#d1fae5',
    value: '68%',
    label: 'Win Rate',
  },
  {
    icon: <IoTrendingUp size={28} color="#f472b6" />,
    color: '#fce7f3',
    value: '3,450',
    label: 'Skill Rating',
  },
  {
    icon: <FaMedal size={28} color="#60a5fa" />,
    color: '#dbeafe',
    value: '#1',
    label: 'Global Rank',
  },
]

export function Stats() {
  const navigate = useNavigate()
  return (
    <section className="stats">
      <h2 className="stats-title">Track Your Progress</h2>
      <p className="stats-subtitle">Compete with players worldwide and climb the leaderboards</p>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <div className="stat-icon" style={{ backgroundColor: stat.color }}>
              {stat.icon}
            </div>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="stats-banner">
        <div>
          <h3 className="banner-title">Join Weekly Tournaments</h3>
          <p className="banner-desc">Compete for exclusive rewards and showcase your skills</p>
        </div>
        <button className="banner-button" onClick={() => navigate('/leaderboard')}>View Leaderboard</button>
      </div>
    </section>
  )
}