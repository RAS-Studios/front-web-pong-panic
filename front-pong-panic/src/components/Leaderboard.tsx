import '../styles/leaderboard.css'
import { Navbar } from './Navbar';
import { useEffect, useState } from 'react'
import api from '../api/axios'
import { useNavigate } from 'react-router-dom'

interface LeaderboardEntry {
    _id: string
    username: string
    stats: {
        total_wins: number
        total_games: number
        rating: number
    }
}

export function Leaderboard() {
    const navigate = useNavigate()
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])

    useEffect(() => {
        api.get('matches/leaderboard')
        .then(response => setLeaderboard(response.data))
        .catch(() => {
            navigate('/')
        })
    }, [navigate])

    return (
        <div className='leaderboard-container'>
        <Navbar />
        <h2 className='leaderboard-title'>Leaderboard</h2>
        <table className='leaderboard-table'>
        <thead>
            <tr>
                <th>Rank</th>
                <th>Username</th>
                <th>Wins</th>
                <th>Total Games</th>
                <th>Rating</th>
            </tr>
        </thead>
        <tbody>
            {leaderboard.map((entry, index) => (
            <tr key={entry._id}>
                <td>{index + 1}</td>
                <td>{entry.username}</td>
                <td>{entry.stats.total_wins}</td>
                <td>{entry.stats.total_games}</td>
                <td>{entry.stats.rating}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    )
}