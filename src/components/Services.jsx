import TitleOne from "../UI/TitleOne"
import { ServicesData } from "../data/Data"

// import servicesShape from '../assets/shapes.svg'

export default function Services() {
  return (
    <section id="Services">
      <div className="container services-container">
        <TitleOne
          titleEx={"Services"}
          titleSm={"What I will do for you"}
          className={"services-title"}
        />

        <div className="services-articles">
          {ServicesData.services.map((ser, index) => (
            <article key={index} className="service-article">
              <div className="service-icon">
                <ser.icon />
              </div>
              <small>{ser.proCount}</small>
              <h5>{ser.name}</h5>
              <p>{ser.textInfo}</p>
            </article>
          ))}
        </div>

        <div className="services-shape">
          <img src="" alt="services-shape" />
        </div>
      </div>
    </section>
  )
}
