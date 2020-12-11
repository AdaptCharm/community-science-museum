import { FC, useState } from 'react'
import { Router, useRouter } from 'next/router'
import Link from 'next/link'
import { NavbarLogo, NavbarHamburger, NavbarClose } from '@components/icons'
import n from './Navbar.module.css'

interface Props {
  href: string
  className: string
  children: any
}

const ActiveLink: FC<Props> = ({ href, children }) => {
  const { pathname } = useRouter()

  return (
    <Link href={href}>
      <a
        className={`${n.link} ${
          pathname.split('/')[1] === href.split('/')[1] ? n.current : ''
        }`}
      >
        {children}
      </a>
    </Link>
  )
}

const Navbar: FC = () => {
  // Toggle on/off mobile menu.
  const [mobileNavShown, setMobileNavShown] = useState(false)
  const toggle = () => setMobileNavShown(!mobileNavShown)

  // Switch colors of mobile menu overlay based on route.
  const { pathname } = useRouter()
  const overlay = pathname === '/' ? { backgroundColor: 'hsla(0, 0%, 0%, 70%)', color: 'white'} : { backgroundColor: 'hsla(0, 0%, 100%, 0.8)', color: 'hsl(348, 7%, 14%)' }

  // Close mobile menu on route change.
  Router.events.on('routeChangeStart', () => { setMobileNavShown(false) })

  return (
    <div className={n.navbar}>
      <Link href="/">
        <a className="logo" aria-label="Logo">
          <NavbarLogo size={8} />
          <span className="d-md-none">CSM</span>
          <span className="d-none d-md-block">Community Science Museum</span>
        </a>
      </Link>
      <span className={`${n.toggle} ${mobileNavShown ? n.pulseIn : n.pulseOut}`} style={ mobileNavShown ? { position: 'fixed', right: '1.25rem' } : {} } onClick={toggle}>
        {mobileNavShown ? (
          <NavbarClose />
        ) : (
          <NavbarHamburger />
        )}
      </span>
      <nav className={`${n.nav} ${mobileNavShown ? n.active : ''}`} style={ mobileNavShown ? overlay : {} }>
        <ActiveLink href="/explore" className={n.link}>Explore</ActiveLink>
        <ActiveLink href="/events" className={n.link}>Events</ActiveLink>
        <ActiveLink href="/visit" className={n.link}>Visit</ActiveLink>
        <ActiveLink href="/get-involved" className={n.link}>Get Involved</ActiveLink>
      </nav>
    </div>
  )
}

export default Navbar