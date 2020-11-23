import React from 'react'
import vmlyrLogo from '../assets/images/FINAL_REVERSE.png'
import hourOfCodeLogo from '../assets/images/HourOfCode_logo_RGB.png'
import {Link} from "gatsby";

const Banner = props => (
  <section id="banner">
    <div className="inner">
      <header>
        <div className="vmlyrLogo">
          <img className="half" src={vmlyrLogo} alt="" />
          <h3 className="presents">
            presents
          </h3>
        </div>
        <div className="hourOfCodeLogo">
            <img className="quarter" src={hourOfCodeLogo} alt="" />
        </div>
      </header>
    </div>
  </section>
)

export default Banner
