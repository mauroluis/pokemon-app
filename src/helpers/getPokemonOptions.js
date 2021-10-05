const getPokemons = () => {
    const pokeArr = Array.from(Array(650));
    return pokeArr.map((_, index) => index + 1);
};

const getPokemonOptions = () => {
    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
    getPokemonNames(mixedPokemons.splice(0, 4));
};

const getPokemonNames = (pokemons = []) => {};

export default getPokemonOptions;
