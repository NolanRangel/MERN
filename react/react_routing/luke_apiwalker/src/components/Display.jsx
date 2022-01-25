import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios'

const Display = (props) => {
    // console.log(props.children);
    const { select, num } = useParams();
    const [starwarsData, setStarWarsData] = useState([])
    const [errImg, setErrImg] = useState("")
    const history = useHistory()
    console.log(select);
    console.log(num);

    const API = `https://swapi.dev/api/${select}/${num}`


    
    useEffect (() => {
        axios.get(API)
        .then(response => {
            console.log(response.data);
            setStarWarsData(response.data);
            
        })
        .catch(function (error) {
            // console.log(error);
            setErrImg('http://www.quickmeme.com/img/ee/eea1e93546608fbb4e238bff8393da3105dfe414cb0a99f7f2af84f49401539b.jpg')
            // setErrImg("")
        })
    }, [select, num])


    return(

        <div>
            {select === 'people' &&<h2>Name: {starwarsData.name}</h2>}
            {select === 'people' &&<p>Height: {starwarsData.height}</p>}
            {select === 'people' &&<p>Mass: {starwarsData.mass}</p>}
            {select === 'people' &&<p>Hair Color: {starwarsData.hair_color}</p>}
            {select === 'people' &&<p>Skin Color: {starwarsData.skin_color}</p>}

            {select === 'planets' &&<h2>Name: {starwarsData.name}</h2>}
            {select === 'planets' &&<p>Climate: {starwarsData.climate}</p>}
            {select === 'planets' &&<p>Terraine: {starwarsData.terrain}</p>}
            {select === 'planets' &&<p>Surface Water: {starwarsData.surface_water}</p>}
            {select === 'planets' &&<p>Population: {starwarsData.population}</p>}

            {errImg &&<img src={errImg} alt="Obi-Wan"></img>}
        </div>
    )
}
export default Display;







// Pokemon+Postman

// get request #1
// https://pokeapi.co/api/v2/pokemon

// get request #2
// https://pokeapi.co/api/v2/pokemon/4

// get request #3
// https://pokeapi.co/api/v2/pokemon/snorlax

// get request #4
// https://pokeapi.co/api/v2/

// get request #5
// https://pokeapi.co/api/v2/type/rock/