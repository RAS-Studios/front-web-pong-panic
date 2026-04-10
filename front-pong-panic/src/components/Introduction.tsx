import '../styles/introduction.css'
import { Navbar } from './Navbar'

export function Introduction() {
  return (
    <section className="introduction">
      <Navbar />
      <h1 className='title-int'>Pong Panic VR</h1>
      <h4 className='subtitle-int'>The ultimate VR ping-pong experience with low poly style</h4>
      <button className='button-play'>Play on Meta Quest</button>
    </section>
  )
}