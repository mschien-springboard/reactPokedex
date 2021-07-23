// import axios from 'axios';

// const rng = () => { 
//   // There are 898 possible pokemon ids
//   const randPokeID = Math.floor(Math.random() * 898) + 1;
//   return randPokeID;
// };

// async function generatePokemonProps() {
//   const API_URI = `https://pokeapi.co/api/v2/pokemon`;
//   let pokeProps = [];
//   let promises = [];
//   for (let i = 0; i >= 8; i++) {
//     promises.push(
//       axios.get(`${API_URI}/${rng()}`)
//         .then(resp => {
//           console.log(resp.data);
//           pokeProps.push(resp.data);
//         }
//         )
//     );
//   };

//   Promise.all(promises)
//     .then(() => {
//       console.log(pokeProps);
//       return pokeProps;
//     });
// };

// async function generatePokemonProps() {
//   const API_URI = `https://pokeapi.co/api/v2/pokemon`;
//   let pokeProps = {pokemon: []};
//   const resp = await axios.get(`${API_URI}/${rng()}`)
//   .then(resp => pokeProps.pokemon.push(resp.data));
  // const pokeResp = {id: 1, name: "test", type:"grass", base_experience:"100"};
  // const pokeResp = resp.data;
  // console.log(resp);
//   console.log(pokeProps);
//   return pokeProps;
// };

// export { rng, generatePokemonProps };