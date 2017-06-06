import React from 'react'
import './about.css'

function About() {
  return (
    <section id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                    <h2 className="text-center title">About me</h2>
                    <p className="about-me">
                      A naïve programmer, coding some naïve code.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default About;
