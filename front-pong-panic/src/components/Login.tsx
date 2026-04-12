import '../styles/login.css'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Navbar } from './Navbar'


export function Login() {
    const { login } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async () => {
        try {
            await login(email, password)
            navigate('/profile')
        } catch {
            setError('Email or password is incorrect')
        }
    }
    return (
        <div className='auth-container'>
            <Navbar />
            <div className='auth-card'>
                <h2 className='auth-title'>Login</h2>
                <input
                    className='auth-input'
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className='auth-input'
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className='auth-btn' type="button" onClick={handleSubmit}>
                    Login
                </button>
                {error && <p className='auth-error'>{error}</p>}
                <p className='auth-footer'>
                    Don't have an account? <Link to="/register">Register here</Link>
                </p>
            </div>
        </div>
    )
}
