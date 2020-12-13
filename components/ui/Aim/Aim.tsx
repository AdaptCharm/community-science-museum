import { FC } from 'react'
import Image from 'next/image'

const Aim: FC = () => {
  return (
    <section className="section bg-black">
      <div className="inner">
        <div className="flex flex-col flex-md-row items-center space-around">
          <div className="mb-20 mb-md-none">
            <h2 className="text-white">
              Our <strong>Aim</strong>
            </h2>
            <p className="text-white">
              The aim of our museum is to create a space where everyone can 
              experience the wonders of our discoveries and perhaps even ignite 
              a lifelong passion to continue the exploration of the world around us.
            </p>
          </div>
          <div className="flex">
            <Image 
              src="/aim.jpg"
              alt="Our aim"
              width={308}
              height={207}
              className="border rounded-smallest"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aim