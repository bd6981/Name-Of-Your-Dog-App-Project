import React, { useState } from "react";

const RandomDogs = ({setRandomDogBreed, getRandoDog, randomDog, }) => {

    const [randomBreedInput, setRandomBreedInput] = useState('')

    const handleChange = (event) => {
        setRandomBreedInput(event.target.value)
    }

    const handleSubmit = () => {
        setRandomDogBreed(randomBreedInput)
        getRandoDog()
    }

    

    return (
        <div className="randomPup">
            <h3>random dog picture</h3>
            <div className="form">
                <input type='text' placeholder="Enter dog breed" onChange={handleChange}></input>
                <button onClick={handleSubmit}>search</button>
            </div>
            {randomDog && <img src={randomDog} alt='dog' ></img>}
        </div>

    )
    }
export default RandomDogs
