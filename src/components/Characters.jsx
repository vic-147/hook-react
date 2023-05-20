import { useState, useEffect } from "react";
import "./Characters.css";

const API = import.meta.env.VITE_API;

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`${API}/character/`)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="Characters">
      {characters.map((character) => (
        <div className="character" key={character.id}>
          <figure>
            <img src={character.image} alt="character.name" />
          </figure>
          <h2>{character.name}</h2>
          <div className="detail">
            <p>Status: {character.status}</p>
            <p>Specie: {character.species}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
