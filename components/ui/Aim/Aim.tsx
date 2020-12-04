import { FC } from 'react'
import Image from 'next/image'

import a from './Aim.module.css'

const Aim: FC = () => {
  return (
    <section className={`${a.aim} section`}>
      <div className="inner">
        <div className="flex items-center items-md-column space-around">
          <div className="mb-md-4">
            <h1 className="text-white">
              Our <strong>Aim</strong>
            </h1>
            <p className="text-white">
              The aim of our museum is to create a space where everyone can 
              experience the wonders of our discoveries and perhaps even ignite 
              a lifelong passion to continue the exploration of the world around us.
            </p>
          </div>
          <div>
            <Image 
              src="/aim.jpg"
              width="243"
              height="270"
              className="border rounded-smallest"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aim