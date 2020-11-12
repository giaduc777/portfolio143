import React, {Component} from 'react';
import storeFront from '../assets/storefront2.jpg';
import polo from '../assets/polo.jpg';
import randomQuote from '../assets/randomQuote.jpg';
import techData from '../assets/techData.png';
import tank from '../assets/tank.jpeg';
import './Project.scss';

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
        document.getElementById(url).style.display = "block";
        document.getElementById("curtain").style.display = "block";
        this.disableScroll()

    };

    getUrl = (type, url) => {

        let application = [
            {
                fullstackRestaurant: "https://fullstack-restaurant.herokuapp.com/"
            },
            {
                technicalDocumentation: "https://giaduc777.github.io/Technical-doc/"
            },
            {
                tributePage: "https://giaduc777.github.io/Tribute-page/"
            },
            {
                randomQuote: "https://randomquote14.herokuapp.com/"
            },
            {
                tankJs: "https://tankjs.herokuapp.com/"
            }
        ];

        let github = [
            {
                fullstackRestaurant: "https://github.com/giaduc777/fullstack-restaurant"
            },
            {
                technicalDocumentation: "https://github.com/giaduc777/Technical-doc"
            },
            {
                tributePage: "https://github.com/giaduc777/Tribute-page"
            },
            {
                randomQuote: "https://github.com/giaduc777/randomquote"
            },
            {
                tankJs: "https://github.com/giaduc777/TankJs"
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
            <div id={"Projects"} className="Project">
                <div onClick={() => this.closeCurtain()} id="curtain" className="curtain"></div>
                <div className="title">Project</div>

                <div className="container">
                     
                  <div className="box">
                      <div className="item">
                        <p>Fullstack Application</p>
                        <div onClick={() => this.getMenu("fullstackRestaurant")} className="fastfood">
                            <span id="fullstackRestaurant">
                                <i className="fas fa-comment-alt"></i>
                                <div onClick={() => this.getUrl("application", "fullstackRestaurant")} className="application">Application</div>
                                <div onClick={() => this.getUrl("github", "fullstackRestaurant")} className="github">Github</div>
                            </span>
                            <div className="description">Under Construction</div>
                            <img src={storeFront}></img>
                        </div>
                     </div>

                     <div className="item">
                        <p>Tank Destroyer</p>
                        <div onClick={() => this.getMenu("tankJs")} className="fastfood">
                            <span id="tankJs">
                                <i className="fas fa-comment-alt"></i>
                                <div onClick={() => this.getUrl("application", "tankJs")} className="application">Application</div>
                                <div onClick={() => this.getUrl("github", "tankJs")} className="github">Github</div>
                            </span>
                            <img src={tank}></img>
                        </div>
                     </div>


                     <div className="item">
                        <p>Random quote</p>
                        <div onClick={() => this.getMenu("randomQuote")} className="fastfood">
                            <span id="randomQuote">
                                <i className="fas fa-comment-alt"></i>
                                <div onClick={() => this.getUrl("application", "randomQuote")} className="application">Application</div>
                                <div onClick={() => this.getUrl("github", "randomQuote")} className="github">Github</div>
                            </span>
                            <img src={randomQuote}></img>
                        </div>
                     </div>
                </div>

                <div className="box">
                     <div className="item">
                        <p>Technical Documentation</p>
                        <div onClick={() => this.getMenu("technicalDocumentation")} className="fastfood">
                            <span id="technicalDocumentation">
                                <i className="fas fa-comment-alt"></i>
                                <div onClick={() => this.getUrl("application", "technicalDocumentation")} className="application">Application</div>
                                <div onClick={() => this.getUrl("github", "technicalDocumentation")} className="github">Github</div>
                            </span>
                            <img src={techData}></img>
                        </div>
                     </div>
    
                     <div className="item">
                        <p>Tribute Page</p>
                        <div onClick={() => this.getMenu("tributePage")} className="fastfood">
                            <span id="tributePage">
                                <i className="fas fa-comment-alt"></i>
                                <div onClick={() => this.getUrl("application", "tributePage")} className="application">Application</div>
                                <div onClick={() => this.getUrl("github", "tributePage")} className="github">Github</div>
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



