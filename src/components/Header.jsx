import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"
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
        </div>
      </div>
    </header>
  )
}
