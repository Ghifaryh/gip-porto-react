import { TbBrandFiverr } from "react-icons/tb"
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

// Import contactImage from '../assets/contact.png'

export default function Contact() {
  return (
    <section id="Contact">
      <div className="container contact-container">
        <div className="contact-left">
          <h4>Contact</h4>
          <p>I&apos;m not currently busy, so feel free to contact me</p>
          <h5>
            <a href="mailto:mhghifaryy@gmail.com">mhghifaryy@gmail.com</a>
          </h5>
          <p>+62 89607626982</p>
          <p>Bandung, Indonesia</p>

          <div className="social">
            <a
              href="https://www.instagram.com/ghifaryh/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/ghifaryha"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.fiverr.com/rga_team"
              target="_blank"
              rel="noreferrer"
            >
              <TbBrandFiverr />
            </a>
            <a
              href="https://www.linkedin.com/in/ghifaryh/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="contact-right">
            {/* <img src="" alt="contact.png" /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
