
import './project.css';
import { Link } from "react-router-dom";
import React from 'react';


function Project(){
    return(
        <div id='index_home'>
            <div id='main_bg'>
                <img src ='/img/project page/main_project_bg.png' alt='main_bg'/>
            </div>
            <div id='content1'>
                <div id='main_text'>
                    <h2>Project</h2>
                </div>
                <div id='main_p'>
                    <div id='box_p'>
                        <p>A nonprofit network of high school coding clubs and makers around the world, for the students, by the students.</p>
                    </div>
                </div>
                <div id='Our_vision_btn'>
                    <div id='box_our_vision_btn'>
                        <Link to='/'>Our Vision<img src='/icon/Vector.png' alt='vecter'/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;