import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slicer/pokemon/thunks";

export const PokemonApp = () => {
  const { pokemons, page, isLoading } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <div>
        <h1>PokemonApp</h1>
        <hr />
        <ul>
          {isLoading && <p>Loading...</p>}
          {pokemons.map((pokemon, index) => (
            <li key={index}>{pokemon.name}</li>
          ))}
        </ul>
        <div className="containerButtons">
          <button onClick={() => dispatch(getPokemons(page))}>Next</button>
        </div>
      </div>
    </>
  );
};
