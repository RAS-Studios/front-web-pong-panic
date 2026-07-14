import '../styles/gallery.css'

const images = [
  {
    src: '../src/assets/Aquarium_1.png',
    alt: 'Aquatic Arena',
    label: 'Aquatic Arena',
  },
  {
    src: '../src/assets/Aquarium_3.png',
    alt: 'Aquatic Arena',
    label: 'Aquatic Arena',
  },
  {
    src: '../src/assets/Forest_1.png',
    alt: 'Forest Arena',
    label: 'Forest Arena',
  },
  {
    src: '../src/assets/Screenshot_1315.png',
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