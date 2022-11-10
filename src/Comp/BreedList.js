import React, { Component } from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function BreedList ({breed, setBreed}) {
  
    let list = breed?.map(setBreed => {
        return (

        <select>{list}</select>
    )
        }
    )
    }

export default BreedList;
