import './navbar.css';
import { Link } from "react-router-dom";
import React from 'react';

function Navbar(){
    let url = 'df';
    return(
        <div id='nav'>
            <div id='logo'>
                <img src='/icon/logo.png' alt='Hack club'/>
            </div>
            <div id='list-menu'>
                    <a href={url}>Event</a>
                    <a href={url}>Members</a>
                    <Link to='project'>Project</Link>
                    <a href={url}>Gallery</a>
                    <a href={url}>Join us</a>
            </div>
            <div id='list-contract'>
                <a href={url}><img src='/icon/twitter.png' alt='Twitter'/></a>
                <a href={url}><img src='/icon/github.png' alt='github'/></a>
                <a href={url}><img src='/icon/linkedin.png' alt='linkedin'/></a>
                <a href={url}><img src='/icon/instagram.png' alt='instagram'/></a>
            </div>
        </div>
    );
}

export default Navbar;