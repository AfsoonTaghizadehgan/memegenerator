import '../App.css';

import React from 'react'

export default function Meme(){
    const [ memeData, setMemeData]=React.useState({
        memeTop:"",
        memeUrl:"",
        memeBottom:""
    })
    
    const [allMemes, setAllMemes]= React.useState([])

    //function for picking a random meme from allMemes
    function memePick(){
        const memesArrayLength= allMemes.length
        const number= Math.floor(Math.random() * (memesArrayLength+1));
        setMemeData( preveState => ({
            ...preveState,
            memeUrl: allMemes[number].url})
        
        )
    }

   //function for setting texts on the meme, Top and Bottom
    function setText(event){
        setMemeData(prevMemeData =>{
            const {name, value}= event.target
            return{
                ...prevMemeData,
                [name]: value
            }
        })
    }

    //useEffect will add all the memes from the API into the allMemes array
    React.useEffect(()=>{
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])


    return(
        <main className='meme'>
            <div className='meme--form'>
                <input 
                type="text" 
                className="form--input" 
                placeholder='Top Text' 
                onChange={setText} 
                name="memeTop" 
                value={memeData.memeTop}
                />
                <input 
                type="text" 
                className="form--input" 
                placeholder='Bottom Text' 
                onChange={setText} 
                name="memeBottom" 
                value={memeData.memeBottom}
                /> 

                <button className='meme--button' onClick={memePick}>Get a new meme image  🖼</button> 
            </div>
            <div className='meme--package'>
                <h3 className='img--top text'>{memeData.memeTop}</h3>
                <img src={memeData.memeUrl} className='meme--img' alt=""/>
                <h3 className='img--bottom text'>{memeData.memeBottom}</h3>
            </div>
            
        </main>
    )
}