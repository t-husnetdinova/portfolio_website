import React from 'react';
import '../../App.css';

function About() {
    return (
        <div class="resume mx-auto">
          <div class=" container mx-auto">
            <h3 class="title">
              A little bit about me...
            </h3>
          </div>
      <div class="card border-light mx-auto">
        <h4>
          I'm an experienced service industry professional, currently a full-time student pursuing a Bachelor's 
          in Computer Science and Engineering with additional coursework in Digital Design at the University 
          of Colorado Denver. Actively looking for opportunities in Web Design and Development.
        </h4>
      </div>
      <br></br>
      <div class="feature row">
        <div class="feature__item column mx-auto">
          <h3 class="section__title">Technical Skills</h3>
          <p>C++</p>
          <p>Python</p>
          <p>Javascript</p>
          <p>HTML</p>
          <p>CSS & Bootstrap</p>
          <p>Website design</p>
          <p>Website development</p>
          <p>Adobe Illustrator</p>
          <p>Adobe InDesign</p>
          <p>Adobe Photoshop</p>
          <p>Troubleshooting</p>
          <p>Built my own gaming PC</p>
        </div>
        <div class="feature__item column mx-auto">
          <h3 class="section__title">Relevant Courses</h3>
          <p>Data Structures</p>
          <p>Discrete Structures</p>
          <p>Algorithms</p>
          <p>OOP</p>
          <p>Web API</p>
          <p>Wed Dev</p>
          <p>Database Systems</p>
          <p>Computer Networks</p>
          <p>Hardware (Arduino)</p>
          <p>Software Engineering</p>
          <p>Digital Design</p>
          <p>Typography Studio</p>
        </div>
        <div class="feature__item column mx-auto">
          <h3 class="section__title">Practical Skills</h3>
          <p>Customer service ninja</p>
          <p>Quick on a computer</p>
          <p>Tenacious learner</p>
          <p>Highly adaptable</p>
          <p>Creative thinker</p>
        </div>
        </div>
        <br></br>
        <div class="feature row">
        <div class="feature__item column mx-auto">
          <h3 class="section__title">Leadership</h3>
          <p>ACM Secretary (2019-2020)</p>
          <p>Mad Greens Shift Lead (2014-2019)</p>
        </div>
        <div class="feature__item column mx-auto">
          <h3 class="section__title">Languages</h3>
          <p>English</p>
          <p>Russian</p>
        </div>
        <div class="feature__item column mx-auto">
          <h3 class="section__title">Awards</h3>
          <p>1st Place in ACM Coding Competition (Spring 2018)</p>
        </div>
      </div>
    </div>
    )
}

export default About