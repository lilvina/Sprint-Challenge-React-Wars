import React from 'react';

const CharacterLists = props => {
  return (
    <div className="starwars-list-container">
      {props.characters.map(character => {
        return (
          <div className={`starwar-list ${character.name}`} key={character.name}>
            <h3>{character.name}</h3>
            <p><strong>Born:</strong>{character.birth_year}</p>
          </div>
        )
      })}
    </div>
  )
}

export default CharacterLists;
