import React from 'react';
import styles from './About.module.scss';

const About = () => {
    return(
        <div id={'about'} className={`${styles.About}`}>
              <div>
                  <div className={`${styles.title}`}>About me</div>
                  <p>Hello everyone, and welcome. My name is Duc Le. I study computer programming & Information Technology at Mission College in Santa Clara. After I earned my A.S degree in Information Technology, I decided to pursuit Web-Development as a career. My projects included many front-end & back-end technologies. As my skills continue to grow, more projects will be added & update in the future. Thanks for stopping by, & happy coding.</p>
              </div>
        </div>
    )
}

export default About;