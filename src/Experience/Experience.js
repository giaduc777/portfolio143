import React from 'react';
import classes from './Experience.css';

const Experience = () => {
    return(
        <div className={classes.Experience}>
              <div className={classes.title}>Experience</div>
              <div className={classes.container}>
                        <div className={classes.group}>
                        <i className="fab fa-react"></i>
                        <i className="fab fa-node"></i>
                        </div>
                    
                        <div className={classes.group}>
                        <i className="fab fa-css3-alt"></i>
                        <i className="fab fa-html5"></i>
                        </div>
                    
                        <div className={classes.group}>
                        <i className="fab fa-git"></i>
                        </div>
              </div>
        </div>
    )
}

export default Experience;