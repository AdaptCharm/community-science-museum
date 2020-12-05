import { FC } from 'react'

import e from './Explore.module.css'

const Explore: FC = () => {
  return (
    <section className={`${e.explore} section`}>
      <div className="inner">
        <h1 className="text-center">
          For <strong>Kids</strong>
        </h1>
        <div className="flex flex-col flex-md-row gap-8 mb-8">
          <div className="card">
            <p>
              Are you a young person looking to learn more about science? 
              Come on down to our museum, there’s plenty to see and do.
            </p>
          </div>
          <div className="card">
            <p>
              We also have the Young Stars club which meets once a week on 
              a Saturday between 10:00 and 13:00 where you’ll get to explore 
              and experiment with our team of experts.
            </p>
          </div>
        </div>


        <div className="flex flex-col flex-md-row gap-8 mb-8">
          <div className="card">
            <p>
              You can learn about Newtonian physics from our bumper swing, 
              or why not travel back in time and meet our resident Woolly 
              Mammoth? Our exhibits are designed to be accessible for 
              interested minds, so make sure you come ready to learn and 
              explore.
            </p>
          </div>
          <div className="card">
            <p>
              During the school holidays we run special holiday clubs where 
              you can join other children your age to go on a journey of 
              discovery. Each holiday we pick a new theme to explore. To find 
              out more about the holiday club and how you can join, send us a 
              message.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Explore