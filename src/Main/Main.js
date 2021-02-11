import React from 'react';
import styles from './Main.module.scss';

const Main = () => {
    return(
        <div className={styles.Main} id="welcome-section">
              <img></img>
              <div className={`${styles.title}`}>
                  <h1 className={`${styles.p1}`}>Welcome</h1>
                  <p className={`${styles.p2}`}>Lets build our next project together...</p>
              </div>
        </div>
    )
}

export default Main;