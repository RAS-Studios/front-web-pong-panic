import '../styles/download.css'
import { FiDownload, FiArrowRight } from 'react-icons/fi'

export function Download() {
  return (
    <section className="download">
      <span className="download-emoji">🏓</span>
      <h2 className="download-title">Ready to Play?</h2>
      <p className="download-subtitle">
        Download Pong Panic VR now and start your journey to becoming a ping-pong champion in virtual reality!
      </p>
      <a href="https://www.meta.com/fr-fr/experiences/" target="_blank" rel="noreferrer" className="download-button">
        <FiDownload size={20} />
        <span>Download on Meta Quest</span>
        <FiArrowRight size={20} />
      </a>
      <p className="download-note">Free to download • Requires Meta Quest 2 or newer</p>
      <footer className="download-footer">© 2026 RAS-Studio</footer>
    </section>
  )
}