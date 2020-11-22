import {Link} from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import Banner from '../components/Banner'
import Layout from '../components/layout'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="VMLY&amp;R Presents: Hour of Code"
          meta={[
            {name: 'description', content: 'Sample'},
            {name: 'keywords', content: 'sample, something'},
          ]}
        ></Helmet>

        <Banner/>
        <div id="main">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h2>Welcome Coders!</h2>
              </header>
              <p>
                This year, during Computer Science Education Week (December 7-13), we will be hosting a
                virtual<a href="https://hourofcode.com/us">Hour of Code</a>™
                event for children in grades 6-12th grade.
              </p>
              <p>
                Our goal is to inspire curious minds to take the first steps in
                discovering how computer science impacts the world around us. We want to encourage and
                inspire diversity in
                technology by welcoming diverse people and experiences, empowering attendees, and
                promoting accessibility to learning resources that will aid in continued learning and
                discovery.
              </p>
              <div className="content">
                <div className="video">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/qYZF6oIZtfc"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                  </iframe>
                </div>
                <div className="cta">
                  <ul className="actions">
                    <li>
                      <a href="https://forms.gle/86Dh3ZxkMiQa4uwGA" target="_blank" name="Apply now" className="button next scrolly">
                        Apply now!
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section id="two" className="tiles">
            <article style={{backgroundImage: `url(${pic01})`}}>
              <header className="major">
                <h3>Aliquam</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
            </article>
            <article style={{backgroundImage: `url(${pic02})`}}>
              <header className="major">
                <h3>Two sessions available</h3>
                <p>
                  Friday, December 11th:
                  <b>6:30pm to 8:30pm</b>
                </p>
                <p>
                  Saturday, December 12th:
                  <b>10am to 12pm</b>
                </p>
              </header>
            </article>
            <article style={{backgroundImage: `url(${pic03})`}}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h3>Magna</h3>
                  <p>Lorem etiam nullam</p>
                </header>
              </Link>
            </article>
            <article style={{backgroundImage: `url(${pic04})`}}>
              <header className="major">
                <h3>Questions?</h3>
                <p>Contact Liz Wait -</p>
                <p>
                  <a href="mailto:elizabeth.wait@vmlyr.com?Subject=VMLYR%Hour%of%Code%Inquiry"
                     target="_blank">elizabeth.wait@vmlyr.com
                  </a>
                </p>
              </header>
            </article>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
