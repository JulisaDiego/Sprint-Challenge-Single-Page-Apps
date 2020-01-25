import React from "react";
import {Link} from 'react-router-dom';
import CharacterList from "./CharacterList";




export default function CharacterCard(props, image) {
  return(

      <div className="wrapper">
        <div className="char-card">
            <h2>{props.name}</h2>
    

        <div className="species">
          <p>Species: {props.species}</p>
        </div>

        <div className="status">
          <p>Status: {props.status}</p>
        </div>

      </div>

    </div>
  );

  }
