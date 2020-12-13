import { Layout } from '@components/core'

export default function Visit() {
  return (
    <section className="section">
      <div className="inner">
        <div className="text-center mb-20">
          <h1>
            Location
          </h1>
          <p className="max-w-none">
            The museum is located at Queen Euphemia's gate 6.
          </p>
        </div>
        <div className="grid grid-cols-md-2 gap-16">
          <div className="flex flex-col">
            <h1 className="text-center">Admission</h1>
            <div className="shadow-medium rounded-small bg-white p-6">
              <p className="max-w-none">
                The entrance is free for all.
              </p>
              <p className="max-w-none mt-2">
                There are guided tours of the museum that leave 
                every hour. These tours are 70 NOK per person and 
                include a handy printed guide of the museum.
              </p>
              <p className="max-w-none mt-2">
                If you would like to organise a guided tour for your 
                group of 6 or more people, please contact us to 
                arrange the tour.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-center">Hours</h1>
            <div className="shadow-medium rounded-small bg-white p-6">
              <ul className="text-center list-style-none">
                <li>
                  Monday: Closed
                </li>
                <li>
                  Tuesday: 10:00 – 16:00
                </li>
                <li>
                  Wednesday: 10:00 – 16:00
                </li>
                <li>
                  Thursday: 10:00 – 16:00
                </li>
                <li>
                  Friday: 10:00 – 19:00
                </li>
                <li>
                  Saturday: 9:00 – 16:00
                </li>
                <li>
                  Sunday: 9:00 – 13:00
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-center">Accessibility</h1>
            <div className="shadow-medium rounded-small bg-white p-6">
              <p className="max-w-none">
                The museum has wheelchair accessibility ramps. 
                It also has audio guides and braille display signs 
                for the visually impaired.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col">
            <h1 className="text-center">Food &amp; drinks</h1>
            <div className="shadow-medium rounded-small bg-white p-6">
              <p className="max-w-none">
                There is a café attached to the museum where you 
                can get light lunches, soft drinks, coffee, snacks 
                and more.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-center">Shop</h1>
            <div className="shadow-medium rounded-small bg-white p-6">
              <p className="max-w-none">
                Our shop offers a range of memorabilia from the museum 
                as well as great gifts and activity packs that allow 
                you to continue to explore science even after you’ve 
                left the museum.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

Visit.Layout = Layout