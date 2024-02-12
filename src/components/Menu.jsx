import { CiHome, CiUser } from "react-icons/ci"
import { RiServiceLine } from "react-icons/ri"
import { GoProjectSymlink } from "react-icons/go"
import { GrContact } from "react-icons/gr"

import { useState } from "react"

export default function Menu() {
  const [active, setActive] = useState("#")

  return (
    <div className="menus">
      <a
        href="#"
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
      >
        <CiHome />
      </a>

      <a
        href="#About"
        onClick={() => setActive("#About")}
        className={active === "#About" ? "active" : ""}
      >
        <CiUser />
      </a>

      <a
        href="#Projects"
        onClick={() => setActive("#Projects")}
        className={active === "#Projects" ? "active" : ""}
      >
        <GoProjectSymlink />
      </a>

      <a
        href="#Services"
        onClick={() => setActive("#Services")}
        className={active === "#Services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>

      <a
        href="#Contact"
        onClick={() => setActive("#Contact")}
        className={active === "#Contact" ? "active" : ""}
      >
        <GrContact />
      </a>
    </div>
  )
}
