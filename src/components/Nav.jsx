import { useState } from "react"
import mylogo from "../assets/GH-logo-2-trnpt.png"

export default function Nav() {
  const [active, setActive] = useState("#")

  return (
    <nav>
      <div className="container nav-container">
        <a href="" className="logo">
          <img src={mylogo} alt="Logo" />
        </a>

        <ul className="nav-links">
          <li>
            <a
              href="#"
              onClick={() => setActive("#")}
              className={active === "#" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#About"
              onClick={() => setActive("#About")}
              className={active === "#About" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              onClick={() => setActive("#Projects")}
              className={active === "#Projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Services"
              onClick={() => setActive("#Services")}
              className={active === "#Services" ? "active" : ""}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              onClick={() => setActive("#Contact")}
              className={active === "#Contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
        </ul>

        <h4 className="name">
          Muhammad Haydar <br />
          Al-<span className="">Ghifary</span>
        </h4>
      </div>
    </nav>
  )
}
