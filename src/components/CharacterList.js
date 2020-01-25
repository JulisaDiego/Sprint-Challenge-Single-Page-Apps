import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const [char, setChar] = useState();

  useEffect(() => {
    const id = props.match.params.id;
    
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        setChar(response.data);
      })

  .catch(error => {
    console.log(error);
  });

},[props.match.params.id]);

if(!char) {
  return <div>Loading Info...</div>
}

return(
  <CharacterCard CharacterCard={char} />
)
}


export default CharacterList;