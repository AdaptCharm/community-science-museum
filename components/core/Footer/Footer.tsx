import { FC } from 'react'
import { Logo } from '@components/ui'
import f from './Footer.module.css'

const Footer: FC = () => {
  return (
    <footer className={f.footer}>
      <div className={f.overlay}></div>
      <div className={f.inner}>
        <div className={f.content}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={f.link}
            href="/contact"
          >
            Contact
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={f.link}
            href="/about"
          >
            About
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={f.link}
            href="/privacy-policy"
          >
            Privacy Policy
          </a>
        </div>
        <a href="/" className="logo" aria-label="Logo">
          <Logo size={8} />
          Community Science Museum
        </a>
      </div>
    </footer>
  )
}

export default Footer