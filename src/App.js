import React, { Component } from 'react';
import classes from './App.css';
import Navigation from './Navigation/Navigation';
import About from './About/About';
import Project from './Project/Project';
import Main from './Main/Main';
import Experience from './Experience/Experience';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
         <Navigation />
         <Main />
         <About />
         <Experience />
         <Project />
         <Contact />
         <Footer />
      </div>
    );
  }
}

export default App;
