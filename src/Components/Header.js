import '../App.css';
import Meme from '../Images/Troll Face.png'
import React  from 'react';

export default function Header(){
    return(
        <nav className="header">
            <div className="header--left">
            <img src={Meme} alt="" className="header--logo" />
            <p><b>Meme Generator</b></p>
            </div>
            <div className='header--right'>
                <p>React Course - Project 3</p>
            </div>

        </nav>
    )

}