import { FC } from 'react'
import { FooterLogo } from '@components/icons'
import f from './Footer.module.css'

const Footer: FC = () => {
  return (
    <footer className={f.footer}>
      <div className={f.overlay}></div>
      <div className="inner">
        <div className={f.section}>
          <h2 className="text-white">
            Internships
          </h2>
          <p className="text-white mb-4">
            Are you interested in working in a museum? Do you enjoy 
            the fun and excitement of sharing the wonders of nature 
            with people?
          </p>
          <p className="text-white mb-4">
            Well you could be just the right person to enjoy an 
            internship at the museum.
          </p>
          <a
            className="button light"
            href="/visit"
          >
            Visit Now
          </a>
        </div>
        <div className={f.section}>
          <div className={f.nav}>
            <a
              className="link text-white"
              href="/"
            >
              Home
            </a>
            <a
              className="link text-white"
              href="/events"
            >
              Special Events
            </a>
            <a
              className="link text-white"
              href="/get-involved"
            >
              Get Involved
            </a>
          </div>
          <a href="/" className="logo text-white" aria-label="Logo">
            <FooterLogo size={8} />
            Community Science Museum
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer