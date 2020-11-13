import React, {Component} from 'react';
import './Navigation.scss';
import { HashLink } from 'react-router-hash-link';

class Navigation extends Component{
    
    render(){
        return(
            <div className="Navigation">
                <div>
                <HashLink to="../About/About#about" style={{color: "white", textDecoration:"none"}}>About Melllll</HashLink>
                <HashLink to="../Experience/Experience#Experience" style={{color: "white", textDecoration:"none", marginLeft:"6vw", marginRight:"3vw"}}>Experience</HashLink>
                <HashLink to="../Projects/Projects#Projects" style={{color: "white", textDecoration:"none", marginRight:"6vw", marginLeft:"3vw"}}>Projects</HashLink>
                <HashLink to="../Contact/Contact#Contact" style={{color: "white", textDecoration:"none"}}>Contact</HashLink>
                </div>
            </div>
        )
    }
}

export default Navigation;