import React from 'react';
import styles from './Experience.module.scss';

const Experience = () => {
    return(
        <div id="Experience" className={`${styles.Experience}`}>
              <div className={`${styles.title}`}>Experience</div>
              <div className={`${styles.container}`}>
                        <div className={`${styles.group}`}>
                            <i className="fab fa-react"></i>
                            <i className="fab fa-node"></i>
                            <i className="fab fa-css3-alt"></i>
                        </div>
                        <div className={`${styles.group}`}>
                            <i className="fab fa-git"></i>
                            <i className="fab fa-html5"></i>
                        </div>
              </div>
        </div>
    )
}

export default Experience;