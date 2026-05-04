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
    loginWithGoogle: (token: string) => Promise<void>
    loginWithMeta: (token: string) => Promise<void>
    logout: () => void
    isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: {children: React.ReactNode}) {
    const [user, setUser] = useState<User | null>(null)
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'))

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            api.get('users/me')
            .then(response => {
                setUser(response.data)
                setIsAuthenticated(true)
            })
            .catch(() => {
                localStorage.removeItem('token')
                setUser(null)
                setIsAuthenticated(false)
            })
        }
    }, [])
    
    const login = async (email: string, password: string) => {
        const response = await api.post('users/login', { email, password })
        localStorage.setItem('token', response.data.token)
        const profileResponse = await api.get('users/me')
        setUser(profileResponse.data)
        setIsAuthenticated(true)
    }

    const register = async (username: string, email: string, password: string) => {
        await api.post('users/register', { username, email, password })
    }

    const loginWithGoogle = async (token: string) => {
        const response = await api.post('auth/google/callback', { token })
        localStorage.setItem('token', response.data.token)
        const profileResponse = await api.get('users/me')
        setUser(profileResponse.data)
        setIsAuthenticated(true)
    }

    const loginWithMeta = async (token: string) => {
        const response = await api.post('auth/facebook/callback', { token })
        localStorage.setItem('token', response.data.token)
        const profileResponse = await api.get('users/me')
        setUser(profileResponse.data)
        setIsAuthenticated(true)
    }

    const logout = () => {
        localStorage.removeItem('token')
        setUser(null)
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{ user, login, register, loginWithGoogle, loginWithMeta, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}