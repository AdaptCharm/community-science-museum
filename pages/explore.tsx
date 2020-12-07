import { Layout } from '@components/core'
import { Kids, Teachers, Researchers } from '@components/ui'

export default function E() {
  return (
    <>
      <Kids />
      <Teachers />
      <Researchers />
    </>
  )
}

E.Layout = Layout