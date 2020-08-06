import React, {Component} from 'react';
import classes from './Project.css';
import storeFront from '../assets/storefront2.jpg';
import polo from '../assets/polo.jpg';
import mountainTravel from '../assets/mountainTravel.jpg';
import flyFishing from '../assets/flyFishing.jpg';
import randomQuote from '../assets/randomQuote.jpg';
import techData from '../assets/techData.png';

class Project extends Component{

    state = {
        project: null
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

    getMenu = (url) => {
        this.setState({project: url});
        document.getElementById(url).style.display = "block"
        document.getElementById("curtain").style.display = "block"
        //this.props.setCurtain();
        this.disableScroll()

    };

    getUrl = (type, url) => {

        let application = [
            {
                fullstackRestaurant: "https://fullstack-restaurant.herokuapp.com/"
            },
            {
                mountainTravel: "https://giaduc777.github.io/Mountain-travel-10/"
            },
            {
                technicalDocumentation: "https://giaduc777.github.io/Technical-doc/"
            },
            {
                productLandingpage: "https://giaduc777.github.io/Product-landing-page/"
            },
            {
                tributePage: "https://giaduc777.github.io/Tribute-page/"
            },
            {
                randomQuote: "https://randomquote14.herokuapp.com/"
            }
        ];

        let github = [
            {
                fullstackRestaurant: "https://github.com/giaduc777/fullstack-restaurant"
            },
            {
                mountainTravel: "https://github.com/giaduc777/Mountain-travel-10"
            },
            {
                technicalDocumentation: "https://github.com/giaduc777/Technical-doc"
            },
            {
                productLandingpage: "https://github.com/giaduc777/Product-landing-page"
            },
            {
                tributePage: "https://github.com/giaduc777/Tribute-page"
            },
            {
                randomQuote: "https://github.com/giaduc777/randomquote"
            }
        ];

        if(type === "application"){
            application.forEach(name => {
                if(Object.keys(name)[0] === url){
                    window.open(name[url]);
                    window.location.reload();
                }
            })
        }
        else if(type === "github"){
            github.forEach(name => {
                if(Object.keys(name)[0] === url){
                    window.open(name[url]);
                    window.location.reload();
                }
            })
        }

    };

    closeCurtain = () => {
        document.getElementById(this.state.project).style.display = "none";
        document.getElementById("curtain").style.display = "none";
        this.enableScroll()
    };

    render(){
        return(
            <div id={"Projects"} className={classes.Project}>
                <div onClick={() => this.closeCurtain()} id="curtain" className={classes.curtain}></div>
                <div className={classes.title}>Project</div>

                <div className={classes.container}>
                     
                  <div className={classes.box}>
                      <div className={classes.item}>
                        <p>Fullstack Application</p>
                        <div onClick={() => this.getMenu("fullstackRestaurant")} className={classes.fastfood}>
                            <span id="fullstackRestaurant">
                                <i className="fas fa-comment-alt"></i>
                                <div onClick={() => this.getUrl("application", "fullstackRestaurant")} className={classes.application}>Application</div>
                                <div onClick={() => this.getUrl("github", "fullstackRestaurant")} className={classes.github}>Github</div>
                            </span>
                            <img src={storeFront}></img>
                        </div>
                     </div>

                     <div className={classes.item}>
                        <p>Random quote</p>
                        <div onClick={() => this.getMenu("randomQuote")} className={classes.fastfood}>
                            <span id="randomQuote">
                                <i className="fas fa-comment-alt"></i>
                                <div onClick={() => this.getUrl("application", "randomQuote")} className={classes.application}>Application</div>
                                <div onClick={() => this.getUrl("github", "randomQuote")} className={classes.github}>Github</div>
                            </span>
                            <img src={randomQuote}></img>
                        </div>
                     </div>
    
                     <div className={classes.item}>
                        <p>Mountain Travel</p>
                        <div onClick={() => this.getMenu("mountainTravel")} className={classes.fastfood}>
                            <span id="mountainTravel">
                                <i className="fas fa-comment-alt"></i>
                                <div onClick={() => this.getUrl("application", "mountainTravel")} className={classes.application}>Application</div>
                                <div onClick={() => this.getUrl("github", "mountainTravel")} className={classes.github}>Github</div>
                            </span>
                            <img src={mountainTravel}></img>
                        </div>
                     </div>
                </div>



                <div className={classes.box}>
                                
    
                     <div className={classes.item}>
                        <p>Technical Documentation</p>
                        <div onClick={() => this.getMenu("technicalDocumentation")} className={classes.fastfood}>
                            <span id="technicalDocumentation">
                                <i className="fas fa-comment-alt"></i>
                                <div onClick={() => this.getUrl("application", "technicalDocumentation")} className={classes.application}>Application</div>
                                <div onClick={() => this.getUrl("github", "technicalDocumentation")} className={classes.github}>Github</div>
                            </span>
                            <img src={techData}></img>
                        </div>
                     </div>
    
                     <div className={classes.item}>
                        <p>Product Landing Page</p>
                        <div onClick={() => this.getMenu("productLandingpage")} className={classes.fastfood}>
                            <span id="productLandingpage">
                                <i className="fas fa-comment-alt"></i>
                                <div onClick={() => this.getUrl("application", "productLandingpage")} className={classes.application}>Application</div>
                                <div onClick={() => this.getUrl("github", "productLandingpage")} className={classes.github}>Github</div>
                            </span>
                            <img src={flyFishing}></img>
                        </div>
                     </div>
    
                     <div className={classes.item}>
                        <p>Tribute Page</p>
                        <div onClick={() => this.getMenu("tributePage")} className={classes.fastfood}>
                            <span id="tributePage">
                                <i className="fas fa-comment-alt"></i>
                                <div onClick={() => this.getUrl("application", "tributePage")} className={classes.application}>Application</div>
                                <div onClick={() => this.getUrl("github", "tributePage")} className={classes.github}>Github</div>
                            </span>
                            <img src={polo}></img>
                        </div>
                     </div>
                </div>


                </div>
    
            </div>
        )
    }

    
}

export default Project;