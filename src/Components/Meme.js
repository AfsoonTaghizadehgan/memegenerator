import '../App.css';
import Data from '../memesData.js'
import React from 'react'

export default function Meme(){
    const [ memeData, setMemeData]=React.useState({
        memeTop:"",
        memeUrl:"",
        memeBottom:""
    })

    const [allMemeImages, setAllMemeImages]= React.useState(Data)


    function memePick(){
        const memesArrayLength= allMemeImages.data.memes.length
        const number= Math.floor(Math.random() * (memesArrayLength+1));
        setMemeData( preveState => ({
            ...preveState,
            memeUrl: allMemeImages.data.memes[number].url})
        
        )
    }
   
    return(
        <main className='meme'>
            <div className='meme--form'>
                <input type="text" className="form--input" placeholder='Top Text' />
                <input type="text" className="form--input" placeholder='Bottom Text'/> 
                <button className='meme--button' type="button" onClick={memePick}>Get a new meme image  🖼</button> 
            </div>
            <div className='meme--package'>
                <h3 className='img--top'>{memeData.memeTop}</h3>
                <img src={memeData.memeUrl} className='meme--img' alt=""/>
                <h3 className='img--bottom'>{memeData.memeBottom}</h3>
            </div>
            
        </main>
    )
}