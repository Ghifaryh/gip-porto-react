import TitleOne from "../UI/TitleOne"
import { AboutData } from "../data/Data"
import myphoto from "../assets/me.jpg"

export default function About() {
  return (
    <section id="About">
      {AboutData.map(
        (
          { Image, AboutMe, AboutContactText, Email, CV, Skilsheets },
          index
        ) => {
          return (
            <div className="container about-container" key={index}>
              <div className="about-left">
                <img src={myphoto} alt={Image} />
              </div>
              <div className="about-right">
                <TitleOne
                  titleSm={"Let me introduce myself"}
                  title={"About "}
                  titleEx={"Me"}
                />

                <div className="aboutMe-info">
                  <h5 className="about-small-title">
                    Detail-oriented who is meticulous and passionate about
                    creating user-friendly systems.
                  </h5>
                  <p>{AboutMe}</p>
                </div>

                <div className="aboutMe-contact-info">
                  <h5 className="about-small-title">Contact</h5>
                  <p>{AboutContactText}</p>
                  <a href={`mailto:${Email}`}>{Email}</a>
                </div>

                <div className="about-action-aria">
                  {/* <a href="#Contact" className="btn btn-danger">
                    Hire Me
                  </a> */}
                  <a
                    href={CV}
                    download={CV}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    CV
                  </a>
                  <a
                    href={Skilsheets}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Skillsheets
                  </a>
                </div>
              </div>
            </div>
          )
        }
      )}
    </section>
  )
}
