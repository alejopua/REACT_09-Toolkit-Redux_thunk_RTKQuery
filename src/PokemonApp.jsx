import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "./store/slicer/pokemon/thunks";

export const PokemonApp = () => {
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
          <li>hola</li>
          <li>hola</li>
          <li>hola</li>
        </ul>
      </div>
    </>
  );
};
