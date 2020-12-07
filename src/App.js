import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import About from './About/About';
import Project from './Project/Project';
import Main from './Main/Main';
import Experience from './Experience/Experience';
import Contact from './Contact/Contact';
import Curtain from './Curtain/Curtain';
import styles from './App.module.scss';

class App extends Component {

  state = {
    curtainState: false
  }

  setCurtain = () => {
       this.setState({curtainState: true})
  }

  disableCurtain = () => {
    this.setState({curtainState: false})
}
   
    render() {
      
       let curtain;

       if(this.state.curtainState){
         curtain = <Curtain />
       }
     
        return (
          <div id="app" className={`${styles.App}`}>
             {curtain}
            <Navigation />
            <Main />
            <About />
            <Experience />
            <Project />
            <Contact setCurtain={this.setCurtain} disableCurtain={this.disableCurtain} />
            
          </div>
        );
    }
}

export default App;
