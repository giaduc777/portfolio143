import React, {Component} from 'react';
import classes from './Project.css';
import storeFront from '../assets/storefront2.jpg';

class Project extends Component{

    getUrl = (url) => {

         let list = [
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
             }
         ]

         list.forEach(name => {
             if(Object.keys(name)[0] === url){
                 console.log(name[url])
               window.open(name[url]);
             }
         })

         //window.open(url);
    }

    render(){
        return(
            <div className={classes.Project}>
                <div className={classes.title}>Project</div>
                <div className={classes.container}>
                     <div>
                        <p>Fullstack Application</p>
                        <div onClick={() => this.getUrl("fullstackRestaurant")} className={classes.fastfood}>
                            <img src={storeFront}></img>
                        </div>
                     </div>
    
                     <div>
                        <p>Mountain Travel</p>
                        <div onClick={() => this.getUrl("mountainTravel")} className={classes.fastfood}>
                            <img src={""}></img>
                        </div>
                     </div>
    
                     <div>
                        <p>Technical Documentation</p>
                        <div onClick={() => this.getUrl("technicalDocumentation")} className={classes.fastfood}>
                            <img src={""}></img>
                        </div>
                     </div>
    
                     <div>
                        <p>Product Landing Page</p>
                        <div onClick={() => this.getUrl("productLandingpage")} className={classes.fastfood}>
                            <img src={""}></img>
                        </div>
                     </div>
    
                     <div>
                        <p>Tribute Page</p>
                        <div onClick={() => this.getUrl("tributePage")} className={classes.fastfood}>
                            <img src={""}></img>
                        </div>
                     </div>
                </div>
    
            </div>
        )
    }

    
}

export default Project;