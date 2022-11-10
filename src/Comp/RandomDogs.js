
import axios from "axios";
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';

function RandomDogs ({randomDog, setRandomDog,}) {

function dogPic () {
return (
    <div>
        <form onSubmit={(e) => {e.preventDefault()
            setRandomDog()}}>
            <input onChange={(e) => setInput(e.target.value)}></input>
            <button onClick='submit'>Random Dog</button>
            </form>
        <img src={randomDog}/>
    </div>
    )
}
}
export default RandomDogs;


