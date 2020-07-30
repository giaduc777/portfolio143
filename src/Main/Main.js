import React from 'react';
import classes from './Main.css';
import mountain from '../assets/mountain.jpg';

const Main = () => {
    return(
        <div className={classes.Main}>
              <img></img>
              <div className={classes.title}>
                  <p className={classes.p1}>Welcome</p>
                  <p className={classes.p2}>Lets build our next project together...</p>
              </div>
        </div>
    )
}

export default Main;