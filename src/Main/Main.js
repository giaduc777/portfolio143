import React from 'react';
import styles from './Main.module.scss';

const Main = () => {
    return(
        <div className={styles.Main}>
              <img></img>
              <div className={`${styles.title}`}>
                  <p className={`${styles.p1}`}>Welcome</p>
                  <p className={`${styles.p2}`}>Lets build our next project together...</p>
              </div>
        </div>
    )
}

export default Main;