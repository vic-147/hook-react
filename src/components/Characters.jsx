import { useState, useReducer, useMemo, useRef, useCallback } from "react";
import Search from "./Search";
import useCharacters from "../hooks/useCharacter";
import "./Characters.css";

const API = import.meta.env.VITE_API;

// inicializar favoritos vacio - reducer
const initialState = {
  favorites: [],
};

// agregar afavoritos - reducer
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
  const [favorites, dispatch] = useReducer(favoritesReducer, initialState); // favoritos - reducer
  const [search, setSearch] = useState(""); // hacer busquedas - memo
  const searchInput = useRef(null); // - useRef

  // custom hook
  const characters = useCharacters(API);

  // afregar favorito handle - reducer
  const handleFavorite = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  // evento de busqueda - memo
  // const handleSearch = () => {
  //   setSearch(searchInput.current.value);
  // };

  // mismmo evento de busqueda pero ahora con - useColback
  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []); // callback

  // filtardo de busqueda
  // const filteredUser = characters.filter((user) => {
  //   return user.name.toLowerCase().includes(serach.toLowerCase());
  // });

  // filtardo de busqueda usando memoizcion - memo
  const filteredUser = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <>
      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />

      <div className="favorite">
        {favorites.favorites.map((favorite) => (
          <img key={favorite.id} src={favorite.image} />
        ))}
      </div>

      <div className="Characters">
        {filteredUser.map((character) => (
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
