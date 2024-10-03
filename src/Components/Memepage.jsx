import React from "react"

export default function Memepage(){

    const [memeInput , setMemeInput]  = React.useState({
        topText : "Hello",
        bottomText : "Creators" ,
        image : "http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event){
        const {name ,value} = event.target
        setMemeInput(prevdata => ({
            ...prevdata,
            [name] : value
        }))
    }
    const [memeImage , setMemeImage] = React.useState()

    React.useEffect(() => {
        async function getImage() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            // console.log(data)
            setMemeImage(data.data.memes) 
        }
        getImage()

    },[])

    function handleClick(){
        let random = Math.floor(Math.random()* memeImage.length)
        setMemeInput(prevdata => ({
            ...prevdata,
            image : memeImage[random].url
        }))
        console.log(memeInput.image);
        
    }

    return(
        <div className="content">
            <div className="form">
               <div className="input">
                    <label htmlFor="topText">Top text</label>
                     <input type="text" 
                        id = "topText"
                        name = "topText"
                        onChange = {handleChange}
                        value = {memeInput.topText}
                        />
                        
               </div>
               <div className="input">
                    <label htmlFor="bottomText">Bottom text</label>
                        <input type="text" 
                            id = "bottomText"
                            name = "bottomText"
                            onChange = {handleChange}
                            value = {memeInput.bottomText}
                            />
               </div>
         </div>
         <button onClick = {handleClick}>Get new meme image 🖼</button>
         <div className="meme">
            <img src={memeInput.image} alt="Meme Image" />
            <h1 className="meme--text top" >{memeInput.topText}</h1>
            <h1 className="meme--text bottom"  >{memeInput.bottomText}</h1>
         </div>
        </div>
    )
}