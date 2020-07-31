import React, {Component} from 'react';
import classes  from './Contact.css';

class Contact extends Component {

    setMessage = () => {
         document.getElementById("message").style.display="block";
    };

    render(){
        return(
            <div className={classes.Contact}>
                  
                  <div className={classes.title}>How would you like to get intouch ?</div>
                  <div id="message" className={classes.message}></div>
                  <div className={classes.items}>
                      <i onClick={() => this.setMessage()} className="fas fa-envelope-open-text"></i>
                      <i onClick={() => this.setMessage()} className="fas fa-sms"></i>
                      <i onClick={() => this.setMessage()} className="fab fa-github"></i>
                      <i onClick={() => this.setMessage()} className="far fa-file"></i>
                  </div>
                 
            </div>
        )
    }
}

export default Contact;