import './Pokemon.css';

const SPRITE_URI = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

function Pokemon(props) {
  let sprite = `${SPRITE_URI}${props.id}.png`;
  return (
    <div className="Pokemon">
      <div className="Pokemon-title">{props.name}</div>
      <img className="Pokemon-image" src={sprite} alt={props.name}/>
      <div className="Pokemon-type">Type: {props.type}</div>
      <div className="Pokemon-exp">EXP: {props.exp}</div>
    </div>
  );
}

export default Pokemon;