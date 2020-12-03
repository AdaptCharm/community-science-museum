import { FC } from 'react'
import { useRouter } from 'next/router'
import { Navbar, Footer } from '@components/core'
import l from './Layout.module.css'

const Layout: FC = ({ children }) => {
  const { pathname } = useRouter()

  const navStyle = pathname === '/' ? { backgroundColor: 'transparent', color: 'white', textShadow: '1px 1px 1px black'} : { backgroundColor: 'white', color: 'hsl(348, 7%, 14%)' }

  return (
    <>
      <header className={l.layout} style={navStyle}>
        <div className={l.inner}>
          <Navbar />
        </div>
      </header>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout