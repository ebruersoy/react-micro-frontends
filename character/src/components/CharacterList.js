import React from "react";
import Character from "./Character";
import "./style.css";

function CharacterList(props) {
  const { loading, characters } = props;

  return characters.length === 0 ? (
    <h4>No Residents!</h4>
  ) : (
    <div className="characterList">
      {characters.map((character, i) => {
        return (
          <Character className="item" key={character.id} character={character}>
            {character.name}
          </Character>
        );
      })}
      {loading && <div>Loading ...</div>}
    </div>
  );
}

export default CharacterList;
