import { TbBrandFiverr } from "react-icons/tb"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

// Import contactImage from '../assets/contact.png'

export default function Contact() {
  return (
    <section id="Contact">
      <div className="container contact-container">
        <div className="contact-left">
          <h4>Contact</h4>
          <p>I&apos;m currently busy, tehe pero</p>
          <h5>
            <a href="mailto:mhghifaryy@gmail.com">mhghifaryy@gmail.com</a>
          </h5>
          <p>+62 89607626982</p>
          <p>Bandung, Indonesia</p>

          <div className="social">
            <a href="" target="_blank">
              <FaFacebook />
            </a>
            <a href="" target="_blank">
              <FaInstagram />
            </a>
            <a href="" target="_blank">
              <FaTwitter />
            </a>
            <a href="" target="_blank">
              <TbBrandFiverr />
            </a>
            <a href="" target="_blank">
              <FaLinkedin />
            </a>
          </div>
          <div className="contact-right">
            <img src="" alt="contact.png" />
          </div>
        </div>
      </div>
    </section>
  )
}
