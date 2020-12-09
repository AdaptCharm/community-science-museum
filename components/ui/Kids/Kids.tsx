import { FC } from 'react'

const Kids: FC = () => {
  return (
    <section className="section">
      <div className="inner">
        <h1 className="text-center">
          For <strong>Kids</strong>
        </h1>
        <div className="grid grid-cols-md-2 gap-4">
          <div className="flex flex-col shadow-medium rounded-small bg-white p-6">
            <p className="max-w-none">
              Are you a young person looking to learn more about science? 
              Come on down to our museum, there’s plenty to see and do.
            </p>
          </div>

          <div className="flex flex-col shadow-medium rounded-small bg-white p-6">
            <p className="max-w-none">
              We also have the Young Stars club which meets once a week on 
              a Saturday between 10:00 and 13:00 where you’ll get to explore 
              and experiment with our team of experts.
            </p>
          </div>

          <div className="flex flex-col shadow-medium rounded-small bg-white p-6">
            <p className="max-w-none">
              You can learn about Newtonian physics from our bumper swing, 
              or why not travel back in time and meet our resident Woolly 
              Mammoth? Our exhibits are designed to be accessible for 
              interested minds, so make sure you come ready to learn and 
              explore.
            </p>
          </div>

          <div className="flex flex-col shadow-medium rounded-small bg-white p-6">
            <p className="max-w-none">
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

export default Kids