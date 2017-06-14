import React from 'react'
import SectionContainer from './section-container'
import './skill.css'

function Skill() {
  return (
    <SectionContainer>
      <div className="col-md-12 text-center">
        <h2 className="text-center title">Skills</h2>
        <div className="col-md-4">
          <i className="fa fa-graduation-cap fa-5x"></i>
          <h5>Interests</h5>
          <p className="small">Typography, Programming Languages, Web Development, Otaku Subculture</p>
        </div>
        <div className="col-md-4">
          <i className="fa fa-code fa-5x"></i>
          <h5>Programming</h5>
          <p className="small">Python, Erlang, OCaml, Java, C#, C, Perl, Shell, JavaScript, Swift</p>
        </div>
        <div className="col-md-4">
          <i className="fa fa-cogs fa-5x"></i>
          <h5>Softwares</h5>
          <p className="small">
            <i className="fa fa-apple fa-2x"></i> <i className="fa fa-linux fa-2x"></i>
            <i className="fa fa-windows fa-2x"></i>
            <i className="fa fa-git fa-2x"></i> <span className="latex">L<span className="sup">A</span>T<span className="sub">E</span>X</span><br />
            Bash
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Skill;
