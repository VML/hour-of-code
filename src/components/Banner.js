import React from 'react'
import vmlyrLogo from '../assets/images/FINAL_REVERSE.png'
import hourOfCodeLogo from '../assets/images/HourOfCode_logo_RGB.png'
import {Link} from "gatsby";

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <div className="vmlyrLogo">
          <img className="quarter" src={vmlyrLogo} alt="" />
          <h3>presents</h3>
        </div>
        <div className="hourOfCodeLogo">
          <Link to="https://hourofcode.com/us" className="image">
            <img className="quarter" src={hourOfCodeLogo} alt="" />
          </Link>
        </div>
      </header>
    </div>
  </section>
)

export default Banner
