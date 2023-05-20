import { useState, useEffect, useReducer } from "react";
import "./Characters.css";

const API = import.meta.env.VITE_API;

// inicializar favoritos vacio
const initialState = {
  favorites: [],
};

// agregar afavoritos
const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoritesReducer, initialState); // favoritos

  useEffect(() => {
    fetch(`${API}/character/`)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  // afregar favorito handle
  const handleFavorite = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  return (
    <>
      <div>
        {favorites.favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.name}</li>
        ))}
      </div>

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
            <button type="button" onClick={() => handleFavorite(character)}>
              Add to favorite
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Characters;
