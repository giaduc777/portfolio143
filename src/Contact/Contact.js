import React, {Component} from 'react';
import classes  from './Contact.css';

class Contact extends Component {

    state = {
        message1: false,
        message2: false,
        message3: false,
        message4: false
    }

    setMessage1 = () => {
        this.state.message1 ? document.getElementById("message1").style.display = "none" : document.getElementById("message1").style.display = "block"
        this.state.message1 ? this.setState({message1: false}) : this.setState({message1: true})
        
    };

    setMessage2 = () => {
        this.state.message2 ? document.getElementById("message2").style.display = "none" : document.getElementById("message2").style.display = "block"
        this.state.message2 ? this.setState({message2: false}) : this.setState({message2: true})
    };


    setMessage3 = () => {
        this.state.message3 ? document.getElementById("message3").style.display = "none" : document.getElementById("message3").style.display = "block"
        this.state.message3 ? this.setState({message3: false}) : this.setState({message3: true})
    };

    setMessage4 = () => {
        this.state.message4 ? document.getElementById("message4").style.display = "none" : document.getElementById("message4").style.display = "block"
        this.state.message4 ? this.setState({message4: false}) : this.setState({message4: true})
    };


    render(){
       let messageFunction1 = () => this.setMessage1();
       let messageFunction2 = () => this.setMessage2();
       let messageFunction3 = () => this.setMessage3();
       let messageFunction4 = () => this.setMessage4();

       if(this.state.message1){
            messageFunction2 = null;
            messageFunction3 = null;
            messageFunction4 = null;
       }
       else if(this.state.message2){
            messageFunction1 = null;
            messageFunction3 = null;
            messageFunction4 = null;
       }
       else if(this.state.message3){
            messageFunction1 = null;
            messageFunction2 = null;
            messageFunction4 = null;
       }
       else if(this.state.message4){
            messageFunction1 = null;
            messageFunction2 = null;
            messageFunction3 = null;
       }

        return(
            <div className={classes.Contact}>
                  
                  <div className={classes.title}>How would you like to get intouch ?</div>
                  
                  <div className={classes.items}>
        
                      <div className={classes.block}>
                            <div id="message1" className={classes.message1}></div>
                            <i onClick={messageFunction1} className="fas fa-envelope-open-text"></i>
                      </div>
                    
                      <div className={classes.block}>
                            <div id="message2" className={classes.message2}></div>
                            <i onClick={messageFunction2} className="fas fa-sms"></i>
                      </div>

                      <div className={classes.block}>
                            <div id="message3" className={classes.message3}></div>
                            <i onClick={messageFunction3} className="fab fa-github"></i>
                      </div>
                     
                      <div className={classes.block}>
                            <div id="message4" className={classes.message4}></div>
                            <i onClick={messageFunction4} className="far fa-file"></i>
                      </div>
                      
                  </div>
            </div>
        )
    }
}

export default Contact;