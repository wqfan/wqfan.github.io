import React from 'react'
import SectionContainer from './section-container'
import './contact.css'

function Contact() {
  return (
    <SectionContainer>
      <div className="col-lg-12 text-center">
        <h2 className="text-center title">Contact</h2>
        <div className="col-lg-offset-1 col-lg-2 text-center">
          <a href="https://github.com/wqfan"><i className="fa fa-github fa-4x"></i><br /><p className="text-uppercase">GitHub</p></a>
        </div>
        <div className="col-lg-2 text-center">
          <a href="https://www.linkedin.com/in/wqfan/"><i className="fa fa-linkedin fa-4x"></i><br /><p className="text-uppercase">LinkedIn</p></a>
        </div>
        <div className="col-lg-2 text-center">
          <a href="mailto:qingfan@jhu.edu"><i className="fa fa-envelope fa-4x"></i><br /><p className="text-uppercase">Email</p></a>
        </div>
        <div className="col-lg-2 text-center">
          <a href="https://twitter.com/wqfan5"><i className="fa fa-twitter fa-4x"></i><br /><p className="text-uppercase">Twitter</p></a>
        </div>
        <div className="col-lg-2 text-center">
          <a href="https://www.instagram.com/qingfan.wu/"><i className="fa fa-instagram fa-4x"></i><br /><p className="text-uppercase">Instagram</p></a>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Contact;
