import React from 'react'
import SectionContainer from './section-container'
import './about.css'

function About() {
  return (
    <SectionContainer>
      <div className="col-lg-8 col-lg-offset-2">
        <h2 className="text-center title">About me</h2>
        <p className="about-me">
          A naïve programmer, coding some naïve code.
        </p>
      </div>
    </SectionContainer>
  );
}

export default About;
