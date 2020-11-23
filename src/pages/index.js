import {Link} from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
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
                This year, during <a href="https://csedweek.org/" target="_blank">Computer Science Education Week</a> (December 7-13), <a href="https://vmlyr.com" target="_blank">VMLY&amp;R</a> will 
                be hosting a virtual <a href="https://hourofcode.com/us" target="_blank">Hour of Code</a>™ event for students in grades 6-12th.
              </p>
              <p>
                Our goal is to inspire curious minds to take the first steps in
                discovering how computer science impacts the world around us. We want to encourage andinspire diversity in
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
                        Sign up now!
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
              <h3>Two sessions available</h3>
                <ul>
                  <li>Friday, December 11th
                      <b> 6:30pm to 8:30pm</b>
                  </li>
                  <li>Saturday, December 12th
                  <b> 10am to 12pm</b></li>
                </ul>
              </header>
            </article>
            <article style={{backgroundImage: `url(${pic02})`}}>
              <header className="major">
                <h3 id="schedule">Schedule</h3>
                <ul>
                  <li>Opening Presentation by VMLY&amp;R</li>
                  <li>Break into groups: <b>1 hour coding session!</b></li>
                  <li>Short break</li>
                  <li>Closing and “Ask a dev session” Q&amp;A</li>
                </ul>
              </header>
            </article>
            <article style={{backgroundImage: `url(${pic03})`}}>
                <header className="major">
                  <h3>Activity List + Connecting to Event</h3>
                  <p>Coming soon!</p>
                  <p>We will post this the day before the event.</p>
                </header>
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
          <section id="three">
            <div className="inner">
              <header className="major">
                <h2 id="faqheader">FAQs</h2>
              </header>
              <div>
                <h4>
                  Who will be mentoring this event?
                </h4>
                <p>
                  VMLY&amp;R employess will be our awesome mentors! Huge thanks to them for their help!
                </p>
                <h4>
                  Does my child need coding experience to participate?
                </h4>
                <p>
                  No coding experience is required. We encourage any child who is curious about coding to attend! 
                  If your child does have coding experience, that is totally fine too. 
                </p>
                <h4>
                  Is the event only one hour long?
                </h4>
                <p>
                  Please expect this event to last an estimated two hours. We will have a short opening and closing presentation. 
                  Please see our <a href="#schedule">schedule</a> for more details.
                </p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
