import React, { useState, useEffect } from "react";
import {Formik, Form, Field} from "formik";
import {Link} from "react-router-dom";
import CharacterCard from './CharacterCard';
import axios from 'axios';

export default function SearchForm() {

const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

useEffect(()=>{
  axios.get("https://rickandmortyapi.com/api/character/")
  .then (response =>{
    const characters = response.data.results.filter(char =>
    char.name.toLowerCase().includes(query.toLowerCase())
    );

    setData (characters);
  });
},[query]);


const handleInputChange = event => {
  setQuery(event.target.value);
};
return (
  <div>
    <form>
      <input
      id="name" type="text" name="textfield" placeholder="Search By Name"
      value={query} onChange={handleInputChange}/>



    <Link to="/"><button>Home</button></Link>
    </form>

    {data.map((char => {
  return(
  <CharacterCard key={char.id} name={char.name} species
   ={char.species} status={char.status}/>)
}
))}

</div>
)} 
