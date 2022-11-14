import axios from "axios";
import React, { useState, useEffect } from "react";
import BreedList from "./Comp/BreedList";
import Header from "./Comp/Header";
import RandomDogs from "./Comp/RandomDogs";

  function App() {
    const [randomDog, setRandomDog] = useState()
    const [breeds, setBreeds] = useState('')
    const [randomDogBreed, setRandomDogBreed] = useState()
    const [currrentView, setCurrentView] =useState()

   
    const getBreeds = () => {
      axios.get('https://dog.ceo/api/breeds/list/all')
      .then(res => (Object.entries(res.data.message)))
      .then(res => setBreeds(res))
    }
    useEffect(() => {
      getRandoDog()
    }, [randomDogBreed])

    const getRandoDog = () => {
      randomDogBreed &&
      axios.get(`https://dog.ceo/api/breed/${randomDogBreed}/images/random`)
      .then(res => setRandomDog(res.data.message))
      .catch(err => alert('Breed Not Available. Please try again.'))
    }
    const setView = str => {
      setCurrentView(str)
    }

    return (
      <div className="App">
        <Header setView={setView}/>
        {currrentView === 'Random Pup' ? 
        <RandomDogs randomDogBreed={randomDogBreed} randomDog={randomDog} getRandoDog={getRandoDog} setRandomDogBreed ={setRandomDogBreed}/> : 
        <BreedList breeds={breeds} getBreeds={getBreeds}/>}
      </div>
    )
}
  export default App
 
 