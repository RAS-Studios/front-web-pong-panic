import '../styles/profile.css';
import { Navbar } from './Navbar';
import { useEffect, useState } from 'react'
import api from '../api/axios'
import { FaTrophy, FaMedal } from 'react-icons/fa'
import { IoTrendingUp } from 'react-icons/io5'
import { GiArcheryTarget } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'



interface UserProfile {
        username: string
        email: string
        _id: number
        createdAt: string
        stats: {
            total_wins: number
            total_games: number
            rating: number
        }
    }

export function Profile() {
    const navigate = useNavigate()

    const [profile, setProfile] = useState<UserProfile | null>(null)

    const winRate = profile && profile.stats.total_games > 0 ? 
    Math.round((profile.stats.total_wins / profile.stats.total_games) * 100) : 0
    
    const createAtDate = profile ? new Date(profile.createdAt) : null
    const formattedDate = createAtDate ? createAtDate.toLocaleDateString() : ''

    useEffect(() => {
        api.get('users/me')
        .then(response => setProfile(response.data))
        .catch(() => {
            navigate('/login')
        })
    }, [navigate])

    if (!profile) return <p>Chargement...</p>
    
    const stats = [
    {
        icon: <FaTrophy size={28} color="#f59e0b" />,
        color: '#fef3c7',
        value: profile.stats.total_games,
        label: 'Matches Played',
    },
    {
        icon: <GiArcheryTarget size={28} color="#34d399" />,
        color: '#d1fae5',
        value: `${winRate}%`,
        label: 'Win Rate',
    },
    {
        icon: <IoTrendingUp size={28} color="#f472b6" />,
        color: '#fce7f3',
        value: profile.stats.rating,
        label: 'Rating',
    },
    {
        icon: <FaMedal size={28} color="#60a5fa" />,
        color: '#dbeafe',
        value: profile.stats.total_wins,
        label: 'Wins',
    },
    ]
    return (
        <div className="profile-container">
            <Navbar />
            <div className="profile-card">
            <div className="profile-header">
                <div className="profile-avatar">{profile.username.charAt(0).toUpperCase()}</div>
                <h2>Welcome to your profile, {profile.username}!</h2>
                <p>{profile.email}</p>
                <p>Member since {formattedDate}</p>
            </div>
            <div className="profile-stats">
                <h3>Your Stats</h3>
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
            </div>
        </div>
    </div>
    )
}