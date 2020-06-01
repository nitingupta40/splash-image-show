import React from 'react';
import './card-styles.css'

export const Card = (props) => 
{
    return (
        <div className="card-container">
            <img alt="characters" src={props.character.urls.thumb}></img>
            <p>{props.character.description}</p>
        </div>
    );
}