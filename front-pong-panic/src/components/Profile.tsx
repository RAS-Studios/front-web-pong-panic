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

interface MatchPlayer {
    userId: string
    username: string
    stats: {
        total_wins: number
        total_games: number
        rating: number
    }
}

interface MatchHistory {
    _id: string
    players: MatchPlayer[]
    sets: { team1: number; team2: number }[]
    winner: string
    duration: number
    createdAt: string
}

export function Profile() {
    const navigate = useNavigate()
    const [profile, setProfile] = useState<UserProfile | null>(null)
    const [history, setHistory] = useState<MatchHistory[]>([])

    const winRate = profile && profile.stats.total_games > 0 ? 
    Math.round((profile.stats.total_wins / profile.stats.total_games) * 100) : 0
    
    const createAtDate = profile ? new Date(profile.createdAt) : null
    const formattedDate = createAtDate ? createAtDate.toLocaleDateString() : ''

    useEffect(() => {
        api.get('users/me')
        .then(response => {
            setProfile(response.data)
            return api.get(`matches/history/${response.data._id}`)
        })
        .then(response => setHistory(response.data))
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
            <div className="profile-history">
                    <h3>Match History</h3>
                    {history.length === 0 ? (
                        <p>Aucun match joué pour l'instant</p>
                    ) : (
                        <div className="history-list">
                            {history.map((match) => {
                                const myIndex = match.players.findIndex(p => p.userId.toString() === profile._id.toString())
                                const isWinner = match.winner.toString() === profile._id.toString()
                                const opponent = match.players.find(p => p.userId.toString() !== profile._id.toString())
                                const date = new Date(match.createdAt).toLocaleDateString()
                                return (
                                    <div key={match._id} className={`history-item ${isWinner ? 'win' : 'loss'}`}>
                                        <span className={`result-badge ${isWinner ? 'win' : 'loss'}`}>
                                            {isWinner ? 'WIN' : 'LOSS'}
                                        </span>
                                        <span className="opponent">vs {opponent?.username}</span>
                                        <span className="sets">
                                            {match.sets.map((s, i) => {
                                                const wonSet = myIndex === 0 ? s.team1 > s.team2 : s.team2 > s.team1
                                                return (
                                                    <div key={i} className="set-bubble" data-tooltip={`${s.team1} - ${s.team2}`} style={{
                                                        width: '18px',
                                                        height: '18px',
                                                        borderRadius: '50%',
                                                        background: wonSet ? '#34d399' : '#f87171'
                                                    }} />
                                                )
                                            })}
                                            <span className="set-score">
                                                {match.sets.filter((s) => myIndex === 0 ? s.team1 > s.team2 : s.team2 > s.team1).length}
                                                {' - '}
                                                {match.sets.filter((s) => myIndex === 0 ? s.team2 > s.team1 : s.team1 > s.team2).length}
                                            </span>
                                        </span>
                                        <span className="date">{date}</span>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}