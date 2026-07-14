import '../styles/register.css'
import { Navbar } from './Navbar'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export function Register() {
    const { register } = useAuth()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async () => {
        try {
            if (password !== confirmPassword) {
                setError('Passwords do not match')
                return
            }
            await register(username, email, password)
            navigate('/login')
        } catch {
            setError('Registration failed')
        }
    }

    return (
        <div className="register-container">
            <Navbar />
            <div className="register-card">
                <h2>Register</h2>
                <input 
                    type="text" 
                    className="register-input" 
                    placeholder="Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    className="register-input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="register-input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="register-input"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button className='register-btn' type="button" onClick={handleSubmit}>
                    Register
                </button>
                {error && <p className='register-error'>{error}</p>}
                <p className='register-footer'>
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
            </div>
        </div>
    )
}
