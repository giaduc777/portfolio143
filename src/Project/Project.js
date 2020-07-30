import React from 'react';
import classes from './Project.css';
import storeFront from '../assets/storefront2.jpg';

const Project = () => {

    const getUrl = () => {
        console.log("polo")
         window.open("https://fullstack-restaurant.herokuapp.com/");
    }

    return(
        <div className={classes.Project}>
            <div className={classes.title}>Project</div>
            <div className={classes.container}>
                 <div>
                    <p>Fullstack Application</p>
                    <div onClick={getUrl} className={classes.fastfood}>
                        <img src={storeFront}></img>
                    </div>
                 </div>

                 <div>
                    <p>App-2</p>
                    <div onClick={getUrl} className={classes.fastfood}>
                        <img src={""}></img>
                    </div>
                 </div>

                 <div>
                    <p>App-3</p>
                    <div onClick={getUrl} className={classes.fastfood}>
                        <img src={""}></img>
                    </div>
                 </div>

                 <div>
                    <p>App-4</p>
                    <div onClick={getUrl} className={classes.fastfood}>
                        <img src={""}></img>
                    </div>
                 </div>

                 <div>
                    <p>App-5</p>
                    <div onClick={getUrl} className={classes.fastfood}>
                        <img src={""}></img>
                    </div>
                 </div>
            </div>

        </div>
    )
}

export default Project;