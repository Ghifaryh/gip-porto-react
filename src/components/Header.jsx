import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { TbBrandFiverr } from 'react-icons/Tb'
import TypedText from '../UI/TypedText'

export default function Header() {
  return (
    <header>
      <div className="container header-container">
        <div className="hero">
          <img src="" alt="heroimg" />
          <h2 className="hero-text">
            Hello! I&apos;m <span>Ghifary</span>
          </h2>
        </div>

        <div className="hero-bottom">
          <div className="typer-text">
            <TypedText />
            <br />
            <h5>
              From <span>In</span>{' '}
            </h5>
          </div>
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
        </div>
      </div>
    </header>
  )
}
