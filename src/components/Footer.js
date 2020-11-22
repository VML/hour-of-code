import React from 'react'

const Footer = props => (
  <footer id="footer">
    <div>
      <div id="socials">
        <div id="vmlyrsocials">
          <p>Visit VMLYR on Social Media</p>
            <div id="icons">
              <a href="https://twitter.com/vmlyr" target="_blank" aria-label="Twitter" className="icon alt fa-twitter">
                <span className="label">Twitter</span>
              </a>
              <a href="https://www.facebook.com/VMLYR/" target="_blank" aria-label="Facebook" className="icon alt fa-facebook">
                <span className="label">Facebook</span>
              </a>
              <a href="https://www.instagram.com/vmlyr/" target="_blank" aria-label="Instagram" className="icon alt fa-instagram">
                <span className="label">Instagram</span>
              </a>
              <a href="https://www.linkedin.com/company/vmlyr" target="_blank" aria-label="LinkedIn" className="icon alt fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </div>
          </div>
      </div>
      <div>
          <div id="codesocials">
          <p>Visit Code.org on Social Media </p>
            <div id="icons">
              <a href="https://twitter.com/codeorg" target="_blank" aria-label="Twitter" className="icon alt fa-twitter">
                <span className="label">Twitter</span>
              </a>
              <a href="https://www.facebook.com/Code.org" target="_blank" aria-label="Facebook" className="icon alt fa-facebook">
                <span className="label">Facebook</span>
              </a>
              <a href="https://www.instagram.com/codeorg/" target="_blank" aria-label="Instagram" className="icon alt fa-instagram">
                <span className="label">Instagram</span>
              </a>
              <a href="https://www.linkedin.com/company/code-org/" target="_blank" aria-label="LinkedIn" className="icon alt fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </div> 
          </div> 
      </div>
    </div>
    <div id="footernote">
      <p>
      “The 'Hour of Code™' is a nationwide initiative by <a href="https://csedweek.org/" target="_blank">Computer Science Education Week</a> 
      and <a href="https://www.code.org" target="_blank">Code.org</a> to introduce millions of students to one hour of computer science 
      and computer programming.”
      </p>
    </div>
  </footer>
)

export default Footer
