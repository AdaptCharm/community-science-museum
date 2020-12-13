import { FC } from 'react'
import Image from 'next/image'

const Belief: FC = () => {
  return (
    <section className="section bg-black">
      <div className="inner">
        <div className="flex flex-col flex-md-row items-center space-around">
          <div className="mb-20 mb-md-none order-md-2">
            <h2 className="text-white">
              The <strong>Belief</strong>
            </h2>
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
          <div className="flex">
            <Image 
              src="/belief.jpg"
              alt="The belief"
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