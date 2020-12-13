import { FC } from 'react'

const Teachers: FC = () => {
  return (
    <section className="section">
      <div className="inner">
        <h2 className="text-center">
          For <strong>Teachers</strong>
        </h2>
        <div className="flex flex-col items-center">
          <p>
            As a community-driven museum, we want to work with schools 
            to create places of learning and exploring. Our team are on 
            hand to give your students guided tours of the museum, teach 
            them in our learning laboratory, and provide great video 
            presentations that will excite and inspire them.
          </p>
          <p className="mt-4">
            Please get in touch with us below to find out more about our 
            facilities and to arrange a time to bring your students through 
            for a visit.
          </p>
          <a
            className="button dark mt-4"
            href="/visit"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Teachers