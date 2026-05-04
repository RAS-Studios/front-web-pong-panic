import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import '../styles/navbar.css'

export function Navbar() {
    const { user, logout, isAuthenticated } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return (
        <nav className="navbar">
            <div className="navbar-actions">
            <button className='navbar-btn' onClick={() => navigate('/')}>
                <span>Home</span>
            </button>
            </div>
            <div className="navbar-actions">
                {isAuthenticated ? (
                    <>
                        <button className='navbar-btn' onClick={() => navigate('/profile')}>
                            <FaUser size={18}/> {user?.username}
                        </button>
                        <button className='navbar-btn navbar-btn-outline' onClick={handleLogout}>
                            <TbLogout size={18}/> Logout
                        </button>
                    </>
                ) : (
                        <button className='navbar-btn' onClick={() => navigate('/login')}>
                            <FaUser size={18} /> 
                            <span>Account</span>
                        </button>
                )}
            </div>
        </nav>
    )
}