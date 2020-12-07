import React, {Component} from 'react';
import styles from './Contact.module.scss';

class Contact extends Component {

    state = {
        message1: false,
        message2: false,
        message3: false,
        message4: false
    }

    disableScroll = () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        window.onscroll = function(){
            window.scrollTo(scrollLeft, scrollTop)
        }
    };

    enableScroll = () => {
        window.onscroll = function() {}
    }

    setMessage1 = () => {
        this.state.message1 ? document.getElementById("message1").style.display = "none" : document.getElementById("message1").style.display = "inline"
        this.state.message1 ? this.setState({message1: false}) : this.setState({message1: true})

        this.state.message1 ? this.props.disableCurtain() : this.props.setCurtain()

        this.state.message1 ? document.getElementById("Contact").classList.replace(`${styles.Contact2} ${styles.Contact}`) : document.getElementById("Contact").classList.replace(`${styles.Contact} ${styles.Contact2}`) 
        this.state.message1 ? this.enableScroll() : this.disableScroll()
    };
    

    setMessage2 = () => {
        this.state.message2 ? document.getElementById("message2").style.display = "none" : document.getElementById("message2").style.display = "block"
        this.state.message2 ? this.setState({message2: false}) : this.setState({message2: true})
  
        this.state.message2 ? this.props.disableCurtain() : this.props.setCurtain()

        this.state.message2 ? document.getElementById("Contact").classList.replace(`${styles.Contact2} ${styles.Contact}`) : document.getElementById("Contact").classList.replace(`${styles.Contact} ${styles.Contact2}`)
        this.state.message2 ? this.enableScroll() : this.disableScroll()
        
    };


    setMessage3 = () => {
        window.open("https://github.com/giaduc777/portfolio3")

    };

    setMessage4 = () => {
        window.open("https://www.linkedin.com/in/duc-le-845517126");
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
            <div id="Contact" className={`${styles.Contact} container-fluid`}>
                <div className={`text-center ${styles.title} pt-2`}>How would you like to get intouch ?</div>
                <div className="row d-flex justify-content-center pt-3 pb-3">
                    <div className="col-3 col-md-2 text-center">
                            <div id="message1" className={`${styles.message1}`}><div className={`${styles.name}`}>Giaduc777@yahoo.com</div></div>
                            <i onClick={messageFunction1} className={`fas fa-envelope-open-text ${styles.items}`}></i>
                    </div>
                    <div className="col-3 col-md-2 text-center">
                            <div id="message2" className={`${styles.message2}`}><div className={`${styles.name}`}>(408) 628-3231</div></div>
                            <i onClick={messageFunction2} className={`fas fa-sms ${styles.items}`}></i>
                    </div>
                    <div className="col-3 col-md-2 text-center">
                            <i onClick={messageFunction3} className={`fab fa-github ${styles.items}`}></i>
                    </div>
                    <div className="col-3 col-md-2 text-center">
                            <i onClick={messageFunction4} className={`fab fa-linkedin ${styles.items}`}></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;