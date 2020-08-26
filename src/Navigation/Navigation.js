import React, {Component} from 'react';
import classes from './Navigation.css';

import {HashLink as Link} from 'react-router-hash-link';

class Navigation extends Component{
    
    render(){
        return(
            <div className={classes.Navigation}>
                <div>
                <Link to="../About/About#about" style={{color: "white", textDecoration:"none"}}>About Me</Link>
                <Link to="../Experience/Experience#Experience" style={{color: "white", textDecoration:"none", marginLeft:"6vw", marginRight:"3vw"}}>Experience</Link>
                <Link to="../Projects/Projects#Projects" style={{color: "white", textDecoration:"none", marginRight:"6vw", marginLeft:"3vw"}}>Projects</Link>
                <Link to="../Contact/Contact#Contact" style={{color: "white", textDecoration:"none"}}>Contact</Link>
                </div>
            </div>
        )
    }
}

export default Navigation;