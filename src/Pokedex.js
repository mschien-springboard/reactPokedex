import Pokemon from "./Pokemon";
// import { generatePokemonProps } from './helpers';
import "./Pokedex.css";


function Pokedex(props) {
  return (
    <div className="Pokedex">
      <h2 className="Pokedex-title">Pokedex</h2>
      <div className="Pokedex-Pokemon">
        {props.pokemon.map(p => (
          <Pokemon
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />))}
      </div>
    </div>
  );
};

Pokedex.defaultProps = {
  pokemon: [
    { id: 1, name: "Bulbasaur", type: "grass", base_experience: 64 },
    { id: 2, name: "Ivysaur", type: "grass", base_experience: 142 },
    { id: 3, name: "Venusaur", type: "grass", base_experience: 236 },
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 5, name: "Charmeloen", type: "fire", base_experience: 142 },
    { id: 6, name: "Charizard", type: "fire", base_experience: 240 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 8, name: "Wartortle", type: "water", base_experience: 142 }
  ]
};

// Attempt to generate 8 pokemon as default props dynamically
// Pokedex.defaultProps = generatePokemonProps();
// console.log(Pokedex.defaultProps);

export default Pokedex;