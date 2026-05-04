import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export function AuthSuccess() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    useEffect(() => {
        const token = searchParams.get('token')
        const userId = searchParams.get('userId')
        const username = searchParams.get('username')
        const email = searchParams.get('email')

        if (token) {
            // Stocker le token en localStorage
            localStorage.setItem('token', token)
            
            // Optionnel: stocker les données utilisateur si besoin
            if (userId && username && email) {
                localStorage.setItem('user', JSON.stringify({
                    id: userId,
                    username,
                    email
                }))
            }

            // Rediriger vers le profil après un court délai
            setTimeout(() => {
                navigate('/profile')
            }, 500)
        } else {
            // Pas de token, retour à la connexion
            navigate('/login')
        }
    }, [searchParams, navigate])

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: '#eef0f8',
            flexDirection: 'column',
            gap: '20px'
        }}>
            <div style={{ fontSize: '24px', fontWeight: '600', color: '#2d3748' }}>
                Connexion en cours...
            </div>
            <div style={{
                width: '40px',
                height: '40px',
                border: '4px solid #e2e8f0',
                borderTop: '4px solid #a78bfa',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
            }} />
            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    )
}
