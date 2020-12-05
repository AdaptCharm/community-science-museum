import { FC } from 'react'
import h from './Hero.module.css'

const Hero: FC = () => {
  return (
    <section className={h.hero}>
      <div className={h.overlay}></div>
      <div className={h.inner}>
        <h1 className="text-white">
          Explore <strong>Together</strong>
        </h1>
        <p className="text-white mb-4">
          Come join us at the Community Science Museum where we’re committed 
          to making science accessible to all.
        </p>
        <p className="text-white">
          Over the course of human history, science has developed from our early 
          understanding of fire, wind, water, and earth to exploring everything 
          from galaxies far away to the very building blocks of life itself.
        </p>
      </div>
    </section>
  )
}

export default Hero