import React, { Component } from 'react';
import './App.css';
import Header from './header';
import BgVideo from './bg_video';
import About from './about';
import Skill from './skill';
import Contact from './contact';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BgVideo />
        <About />
        <Skill />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
