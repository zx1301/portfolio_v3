import React from 'react'
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary fixed-top" >
      <div className="container" >
        <Link className="navbar-brand" smooth={true} to="home" offset={-110} href="/" > Anthony Dohyung Kim </Link>
        < button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>
        < div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav ms-auto" >
            <li className="nav-item active" >
              <Link smooth={true} to="about" offset={-110} className="nav-link" href="#" > About Me < span className="sr-only" > (current) </span></Link >
            </li>
            < li className="nav-item" >
              <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#" > Experience </Link>
            </li>
            < li className="nav-item" >
              <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#" > Projects </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
