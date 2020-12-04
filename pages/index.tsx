import { Layout } from '@components/core'
import { Hero, Aim } from '@components/ui'

export default function Home() {
  return (
    <>
      <Hero />
      <Aim />
    </>
  )
}

Home.Layout = Layout