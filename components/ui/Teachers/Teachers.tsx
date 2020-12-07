import { FC } from 'react'

const Teachers: FC = () => {
  return (
    <section className="section bg-white">
      <div className="inner">
        <h1 className="text-center">
          For <strong>Teachers</strong>
        </h1>
        <div className="flex flex-col items-center gap-8 mb-8">
          <div className="card">
            <p>
              As a community-driven museum, we want to work with schools 
              to create places of learning and exploring. Our team are on 
              hand to give your students guided tours of the museum, teach 
              them in our learning laboratory, and provide great video 
              presentations that will excite and inspire them.
            </p>
          </div>
          <div className="card">
            <p>
              Please get in touch with us here to find out more about our 
              facilities and to arrange a time to bring your students through 
              for a visit.
            </p>
          </div>
        </div>    
      </div>
    </section>
  )
}

export default Teachers