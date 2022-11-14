import React from "react";

const BreedList = ({breeds, getBreeds}) => {
    return (
        <div className="breed-list">
            <h1>Breeds</h1>
            <button onClick= {getBreeds}>Dog Breeds</button>
            <ul>
                {breeds && breeds.map((breedFam, key) => {
                    return (
                        <ul key={key}>
                            <h3>{breedFam[0]}</h3>
                            {breedFam[1].length > 0 && breedFam[1].map((breed, key)=> {
                                return <p key={key}>-{breed}</p>
                            })}
                        </ul>
                    )
                })}
            </ul>
          </div>
    )
}
export default BreedList