import '../App.css';
import Data from '../memesData.js'
import React from 'react'

export default function Meme(){
    const [ memeUrl, setMemeUrl]=React.useState()

    function memePick(){
        const memesArrayLength= Data.data.memes.length
        const number= Math.floor(Math.random() * (memesArrayLength+1));
        setMemeUrl(Data.data.memes[number].url)
        console.log(memeUrl)
    }
   
    return(
        <main className='meme'>
            <form className='meme--form'>
                <input type="text" className="form--input" placeholder='Top Text'/>
                <input type="text" className="form--input" placeholder='Bottom Text'/> 
                <button className='meme--button' type="button" onClick={memePick}>Get a new meme image  🖼</button>
                <img src={memeUrl} className='meme--img'/>
            </form>
           
        </main>
    )
}