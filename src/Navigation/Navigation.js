import React, {Component} from 'react';
import styles from './Navigation.module.scss';
import { HashLink } from 'react-router-hash-link';

class Navigation extends Component{
    
    render(){
        return(
            <div className={styles.Navigation}>
                <div>
                <HashLink to="#about" style={{color: "white", textDecoration:"none"}}>About Me</HashLink>
                <HashLink to="#Experience" style={{color: "white", textDecoration:"none", marginLeft:"6vw", marginRight:"3vw"}}>Experience</HashLink>
                <HashLink to="#Projects" style={{color: "white", textDecoration:"none", marginRight:"6vw", marginLeft:"3vw"}}>Projects</HashLink>
                <HashLink to="#Contact" style={{color: "white", textDecoration:"none"}}>Contact</HashLink>
                </div>
            </div>
        )
    }
}

export default Navigation;