const pokedex = document.getElementById("pokedex");

const fetchPokemon = () => {
  const promises = [];
  for (i = 1; i <= 102; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`
    promises.push(fetch(url).then((res) => res.json()));
  }
  Promise.all(promises).then((results) => {
    const pokemon = results.map((result) => ({
      name: result.name,
      id: result.id,
      image: result.sprites["front_default"],
      types: result.types.map((type) => type.type.name).join(" , "),
    }))
    displayPokemons(pokemon)
  })
}
  const displayPokemons = (pokemon) => {
   console.log(pokemon)
    const pokemonHTMLString = pokemon.map(getPokemon=>`
    <li class='card'>
    <img class='card_image' src="${getPokemon.image}"/>
    <h2 class='card_title'>${getPokemon.id}. ${getPokemon.name}</h2>
    <p class='card_subtitle'>Type: ${getPokemon.types}</p>
    </li>
    `
    ).join('')
    pokedex.innerHTML=pokemonHTMLString
    console.log(pokemonHTMLString)
  }

fetchPokemon();
