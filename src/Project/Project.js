import React, {Component} from 'react';
import storeFront from '../assets/storefront2.jpg';
import polo from '../assets/polo.jpg';
import randomQuote from '../assets/randomQuote.jpg';
import techData from '../assets/techData.png';
import tank from '../assets/tank.jpeg';
import styles from './Project.module.scss';

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
                fullstackRestaurant: "https://fastfood14.herokuapp.com/"
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
            <div>
                <div id={"projects"} className={`${styles.Project}`}>
                <div onClick={() => this.closeCurtain()} id="curtain" className={`${styles.curtain}`}></div>
                <div className={`${styles.title}`}>Project</div>
                <a className="project-tile"></a>
                <div className={`${styles.container}`}>
                  <div className={`${styles.box}`}>
                      <div className={`${styles.item}`}>
                        <p>Fullstack Application</p>
                        <div onClick={() => this.getMenu("fullstackRestaurant")} className={`${styles.fastfood}`}>
                            <span id="fullstackRestaurant">
                                <i className="fas fa-comment-alt"></i>
                                <div onClick={() => this.getUrl("application", "fullstackRestaurant")} className={`${styles.application}`}>Application</div>
                                <div onClick={() => this.getUrl("github", "fullstackRestaurant")} className={`${styles.github}`}>Github</div>
                            </span>
                            <div className={`${styles.description}`}>Under Construction</div>
                            <img src={storeFront}></img>
                        </div>
                     </div>

                     <div className={`${styles.item}`}>
                        <p>Tank Destroyer</p>
                        <div onClick={() => this.getMenu("tankJs")} className={`${styles.fastfood}`}>
                            <span id="tankJs">
                                <i className="fas fa-comment-alt"></i>
                                <div onClick={() => this.getUrl("application", "tankJs")} className={`${styles.application}`}>Application</div>
                                <div onClick={() => this.getUrl("github", "tankJs")} className={`${styles.github}`}>Github</div>
                            </span>
                            <img src={tank}></img>
                        </div>
                     </div>

                     <div className={`${styles.item}`}>
                        <p>Random quote</p>
                        <div onClick={() => this.getMenu("randomQuote")} className={`${styles.fastfood}`}>
                            <a id="profile-link" href="https://github.com/freecodecamp" target="_blank"></a>
                            <span id="randomQuote">
                                <i className="fas fa-comment-alt"></i>
                                <div onClick={() => this.getUrl("application", "randomQuote")} className={`${styles.application}`}>Application</div>
                                <div onClick={() => this.getUrl("github", "randomQuote")} className={`${styles.github}`}>Github</div>
                            </span>
                            <img src={randomQuote}></img>
                        </div>
                     </div>
                </div>

                <div className={`${styles.box}`}>
                     <div className={`${styles.item}`}>
                        <p>Technical Documentation</p>
                        <div onClick={() => this.getMenu("technicalDocumentation")} className={`${styles.fastfood}`}>
                            <span id="technicalDocumentation">
                                <i className="fas fa-comment-alt"></i>
                                <div onClick={() => this.getUrl("application", "technicalDocumentation")} className={`${styles.application}`}>Application</div>
                                <div onClick={() => this.getUrl("github", "technicalDocumentation")} className={`${styles.github}`}>Github</div>
                            </span>
                            <img src={techData}></img>
                        </div>
                     </div>
    
                     <div className={`${styles.item}`}>
                        <p>Tribute Page</p>
                        <div onClick={() => this.getMenu("tributePage")} className={`${styles.fastfood}`}>
                            <span id="tributePage">
                                <i className="fas fa-comment-alt"></i>
                                <div onClick={() => this.getUrl("application", "tributePage")} className={`${styles.application}`}>Application</div>
                                <div onClick={() => this.getUrl("github", "tributePage")} className={`${styles.github}`}>Github</div>
                            </span>
                            <img src={polo}></img>
                        </div>
                     </div>
                </div>

                </div>
             </div>
            </div>
        )
    }
}

export default Project;



