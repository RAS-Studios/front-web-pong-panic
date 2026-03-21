import '../styles/gallery.css'

const images = [
  {
    src: '../src/assets/798713.jpg',
    alt: 'Mountain Arena',
    label: 'Mountain Arena',
  },
  {
    src: '../src/assets/798714.jpg',
    alt: 'Crystal City',
    label: 'Crystal City',
  },
  {
    src: '../src/assets/809979.jpg',
    alt: 'Prairie Fields',
    label: 'Prairie Fields',
  },
  {
    src: '../src/assets/1395597.png',
    alt: 'Pastel Geometry',
    label: 'Pastel Geometry',
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