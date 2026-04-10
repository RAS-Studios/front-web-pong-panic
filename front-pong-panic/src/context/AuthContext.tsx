import { createContext, useContext, useState, useEffect } from 'react'
import api from '../api/axios'

interface User {
    id: string
    username: string
    email: string
}

interface AuthContextType {
    user: User | null
    login: (email: string, password: string) => Promise<void>
    register: (username: string, email: string, password: string) => Promise<void>
    logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: {children: React.ReactNode}) {
    const [user, setUser] = useState<User | null>(null)
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            api.get('/me')
                .then(response => setUser(response.data))
                .catch(() => {
                    localStorage.removeItem('token')
                    setUser(null)
                })
            }
    }, [])
    
    const login = async (email: string, password: string) => {
        try {
            const response = await api.post('/login', { email, password })
            localStorage.setItem('token', response.data.token)
            setUser(response.data.user)
        } catch (error) {
            console.error('Login failed', error)
        }
    }

    const register = async (username: string, email: string, password: string) => {
        try {
            const response = await api.post('/register', { username, email, password })
        } catch (error) {
            console.error('Registration failed', error)
        }
    }

    const logout = () => {
        localStorage.removeItem('token')
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}