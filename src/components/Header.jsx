import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"
// import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"
import { TbBrandFiverr } from "react-icons/tb"
import TypedText from "../UI/TypedText"

export default function Header() {
  return (
    <header>
      <div className="container header-container">
        <div className="hero">
          {/* <img src="" alt="heroimg" /> */}
          <h2 className="hero-text">
            Hello! I&apos;m <span>Ghifary</span>
          </h2>
        </div>

        <div className="hero-bottom">
          <div className="typer-text">
            <TypedText />
            <br />
            <h5>
              From <span>Indonesia</span>{" "}
            </h5>
          </div>
          <div className="social">
            {/* <a href="" target="_blank">
              <FaFacebook />
            </a> */}
            <a href="https://www.instagram.com/ghifaryh/" target="">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/ghifaryha" target="">
              <FaTwitter />
            </a>
            <a href="https://www.fiverr.com/rga_team" target="">
              <TbBrandFiverr />
            </a>
            {/* <a href="" target="_blank">
              <TbBrandFiverr />
            </a> */}
            <a href="https://www.linkedin.com/in/ghifaryh/" target="">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
