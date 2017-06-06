import React from 'react'
import './header.css'
function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <span className="name text-uppercase">Qingfan Wu</span>

                <h3 className="intro-text">Master's Student in Computer Science <br />at <a href="https://www.jhu.edu"><span className="first-char">J</span>ohns <span className="first-char">H</span>opkins University</a></h3>
            </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
