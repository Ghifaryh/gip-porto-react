export default function Nav() {
  return (
    <nav>
      <div className="container nav-container">
        <a href="" className="logo">
          <img src="" alt="Logo" />
        </a>

        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
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
