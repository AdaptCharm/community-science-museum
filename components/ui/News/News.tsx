import { FC } from 'react'
import Image from 'next/image'

const News: FC = () => {
  return (
    <section className="section">
      <div className="inner">
        <h1 className="text-center">
          Special <strong>Events</strong>
        </h1>
        <div className="grid grid-cols-md-3 gap-8">
          <a href="#" className="flex flex-col shadow-small rounded-small weight-400 text-decoration-none">
            <div className="flex-shrink-0">
              <Image 
                src="/lab.jpg"
                alt="Lab"
                width="1280"
                height="851"
                layout="responsive"
                className="rounded-small border-x-0"
              />
            </div>
            <div className="flex flex-col bg-white rounded-small p-6">
              <p className="text-primary-dark text-sm weight-600">
                Article
              </p>
              <p className="mt-2 weight-800">
                Visiting Professor of Aeronautics
              </p>
              <p className="mt-2 max-w-none">
                It is our pleasure to announce that Prof Sheila Widnall 
                from the Massachusetts Institute of Technology will be 
                delivering 3 lectures on the development of aeronautics 
                and where the future lies in this exciting ‘space’.
              </p>
            </div>
          </a>
          <a href="#" className="flex flex-col shadow-small rounded-small weight-400 text-decoration-none">
            <div className="flex-shrink-0">
              <Image 
                src="/entertainment.jpg"
                alt="Entertainment"
                width="1920"
                height="1277"
                layout="responsive"
                className="rounded-small border-x-0"
              />
            </div>
            <div className="flex flex-col bg-white rounded-small p-6">
              <p className="text-primary-dark text-sm weight-600">
                Article
              </p>
              <p className="mt-2 weight-800">
                Night in the Museum
              </p>
              <p className="mt-2 max-w-none">
                Get your family together for an exciting night in the museum 
                as you sleep over beside dinosaurs and science displays. 
                Bring your own sleeping bag and get ready to rough it as we 
                go exploring the wonders of science.
              </p>
            </div>
          </a>
          <a href="#" className="flex flex-col shadow-small rounded-small weight-400 text-decoration-none">
            <div className="flex-shrink-0">
              <Image 
                src="/brain.jpg"
                alt="Brain"
                width="1920"
                height="1272"
                layout="responsive"
                className="rounded-small border-x-0"
              />
            </div>
            <div className="flex flex-col bg-white rounded-small p-6">
              <p className="text-primary-dark text-sm weight-600">
                Article
              </p>
              <p className="mt-2 weight-800">
                Energetica Exhibition on Loan
              </p>
              <p className="mt-2 max-w-none">
                On loan from the NEMO Science Museum in Amsterdam, the 
                Energetica exhibition is coming to the Community Science 
                Museum. It’s a series of installations that allow visitors 
                to experience the power of the elements ...
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default News