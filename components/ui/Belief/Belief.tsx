import { FC } from 'react'
import Image from 'next/image'

import b from './Belief.module.css'

const Belief: FC = () => {
  return (
    <section className={`${b.belief} section`}>
      <div className="inner">
        <div className="flex items-center items-md-column space-around">
          <div className="mb-md-4 order-md-2">
            <h1 className="text-white">
              The <strong>Belief</strong>
            </h1>
            <p className="text-white">
              We believe science should not be confined to the textbook, 
              but brought to live through exhibits. This is why we have 
              over 1000 different exhibits on the many varied subjects of 
              science to explore. Many of these exhibits are designed for 
              you to interact with and play around to see science come to 
              life (apart from the dinosaur exhibits – they only come to 
              life at night when everyone’s gone home).
            </p>
          </div>
          <div>
            <Image 
              src="/belief.jpg"
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

export default Belief