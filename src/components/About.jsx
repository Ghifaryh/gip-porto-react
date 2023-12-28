import TitleOne from '../UI/TitleOne'
import { AboutData } from '../data/Data'

export default function About() {
  return (
    <section id="About">
      {AboutData.map(
        ({ Image, AboutMe, AboutContactText, Email, CV }, index) => {
          return (
            <div className="container about-container" key={index}>
              <div className="about-left">
                <img src="" alt={Image} />
              </div>
              <div className="about-right">
                <TitleOne
                  titleSm={'Let me fuk my self'}
                  title={'About '}
                  titleEx={'Me'}
                />
              </div>
            </div>
          )
        }
      )}
    </section>
  )
}
