import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Logo } from '@components/ui'
import ArrowLeft from '@components/icons/ArrowLeft'
import ArrowRight from '@components/icons/ArrowRight'
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
  const [mobileNavShown, setMobileNavShown] = useState(false)

  const toggle = () => setMobileNavShown(!mobileNavShown)

  return (
    <div className={n.navbar}>
      <Link href="/">
        <a className="logo" aria-label="Logo">
          <Logo size={8} />
          Community Science Museum
        </a>
      </Link>
      <span className={n.toggle} onClick={toggle}>
        {mobileNavShown == true ? (
          <ArrowLeft />
        ) : (
          <ArrowRight />
        )}
      </span>
      <nav className={`${n.nav} ${mobileNavShown ? n.active : ''}`}>
        <ActiveLink href="/explore" className={n.link}>Explore</ActiveLink>
        <ActiveLink href="/events" className={n.link}>Events</ActiveLink>
        <ActiveLink href="/visit" className={n.link}>Visit</ActiveLink>
        <ActiveLink href="/get-involved" className={n.link}>Get Involved</ActiveLink>
      </nav>
    </div>
  )
}

export default Navbar