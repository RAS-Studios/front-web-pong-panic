import '../styles/gallery.css'
import Aquarium_1 from '../assets/Aquarium_1.png'
import Aquarium_3 from '../assets/Aquarium_3.png'
import Forest_1 from '../assets/Forest_1.png'
import Screenshot_1315 from '../assets/Screenshot_1315.png'

const images = [
  {
    src: Aquarium_1,
    alt: 'Aquatic Arena',
    label: 'Aquatic Arena',
  },
  {
    src: Aquarium_3,
    alt: 'Aquatic Arena',
    label: 'Aquatic Arena',
  },
  {
    src: Forest_1,
    alt: 'Forest Arena',
    label: 'Forest Arena',
  },
  {
    src: Screenshot_1315,
    alt: 'Forest Arena',
    label: 'Forest Arena',
  }
]

export function Gallery() {
  return (
    <section className="gallery">
      <h2 className="gallery-title">Arena Environments</h2>
      <p className="gallery-subtitle">Explore our unique low poly worlds</p>
      <div className="gallery-grid">
        {images.map((image) => (
          <div className="gallery-card" key={image.alt}>
            <img src={image.src} alt={image.alt} />
            <span className="gallery-label">{image.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
