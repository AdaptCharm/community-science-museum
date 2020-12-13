import { Layout } from '@components/core'

export default function GetInvolved() {
  return (
    <>
      <section className="section">
        <div className="inner">
          <h2 className="text-center">
            Support
          </h2>
          <div className="flex flex-col items-center">
            <p>
              There are various ways you can support the museum. 
              Donations are very welcome and are an important way 
              we keep this museum open and accessible to the whole 
              community.
            </p>
            <p className="mt-4">
              You can also support us by donating items of interest 
              to the museum’s collections. If you have some item or 
              collection that you think others would enjoy, please 
              let us know by contacting our Collections Department 
              and they will be able to assist you.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="inner">
          <h2 className="text-center">
            Volunteer
          </h2>
          <div className="flex flex-col items-center">
            <p>
              A number of people volunteer their time and effort 
              to keep the displays in good order and ready for 
              visitors to come and enjoy. Volunteering has its 
              perks including getting to see behind the scenes 
              of a working museum, access to staff-only lectures, 
              and a monthly lunch where all staff and volunteers 
              come together to discuss ideas for future exhibits 
              and strategies for the museum.
            </p>
            <p className="mt-4">
              You can help volunteer in a number of different 
              spheres. Please contact us if you’d like to find out 
              more about how you can get involved.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

GetInvolved.Layout = Layout