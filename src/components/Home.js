import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./Card";
import PokemonNavbar from "./PokemonNavbar";
import SearchBar from "./SearchBar";

const Home = () => {
  const [pokemons, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        setPokemon(response.data.results);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  return (
    <div>
      <PokemonNavbar />
      <SearchBar style={{ display: "flex", justifyContent: "center" }} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}>
        {pokemons.map((pokemon, i) => (
          <Card
            key={i}
            name={pokemon.name}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.url.split("/")[6]
            }.png`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
