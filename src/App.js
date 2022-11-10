
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BreedList from './Comp/BreedList';
import RandomDogs from './components/RandomDogs';
import {useParams} from 'react-router-dom';

function App() {

  const [randomDog, setRandomDog] = useState()
  useEffect = () => {
  axios
  .get(`https://dog.ceo/api/breeds/images/random`)
    .then(res => setRandomDog(res.data))
  .then (err => console.log(err))

 }
const [breed, setBreed] = useState()
useEffect = () =>{
    axios
    .get(`https://dog.ceo/api/breeds/list`)
    .then(res => setBreed(res.data))
    .then (err => console.log(err))

}



  return (
    <div>
      <RandomDogs randomDog={randomDog} setRandomDog={setRandomDog} />
      <BreedList breed={breed} setBreed={setBreed}/>
    </div>
  );
}

export default App;



// https://www.youtube.com/watch?v=4oCVDkb_EIs






// https://dog.ceo/api/breeds/list/all
// https://www.youtube.com/watch?v=KQOtXYC0We8}




 


 
