import { Layout } from '@components/core'
import { Hero, Aim, Belief } from '@components/ui'

export default function Home() {
  return (
    <>
      <Hero />
      <Aim />
      <Belief />
    </>
  )
}

Home.Layout = Layout