import React from 'react';
import classes from './Contact.css';

const Contact = () => {
    return(
        <div className={classes.Contact}>
              
              <div className={classes.title}>How would you like to get intouch ?</div>
              <div className={classes.items}>
                  <i className="fas fa-envelope-open-text"></i>
                  <i className="fas fa-sms"></i>
                  <i className="fab fa-github"></i>
                  <i className="far fa-file"></i>
              </div>
             
        </div>
    )
}

export default Contact;