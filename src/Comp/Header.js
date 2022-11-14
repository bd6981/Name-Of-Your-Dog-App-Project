import React from "react";

const Header =({setView}) => {
    return (
        <div className="title">
            <div className="links">
                <button onClick={() => {setView('Breed List')}}> Breed List </button>
                <button onClick={() => {setView('Random Pup')}}>Random Pup</button>
            </div>
        </div>
    )
}
export default Header