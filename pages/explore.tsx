import { Layout } from '@components/core'
import { Kids, Teachers, Involved } from '@components/ui'

export default function E() {
  return (
    <>
      <Kids />
      <Teachers />
      <Involved />
    </>
  )
}

E.Layout = Layout