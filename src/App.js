import React, { Component } from 'react';
import classes from './App.css';
import Navigation from './Navigation/Navigation';
import About from './About/About';
import Project from './Project/Project';
import Main from './Main/Main';
import Experience from './Experience/Experience';
import Contact from './Contact/Contact';


class App extends Component {

  setCurtain = () => {
      this.setState({curtainStatus: true})
      //document.getElementById("app").style.position="absolute"
     // document.getElementById("app").style.overflow="hidden"
  }

    render() {

        return (
          <div id="app" className={classes.App}>
           
            <Navigation />
            <Main />
            <About />
            <Experience />
            <Project setCurtain={this.setCurtain}/>
            <Contact />
            
          </div>
        );
    }
}

export default App;
