<template>
    <h1>¿Quien es este Pokémon?</h1>

    <PokemonImg :pokemonId="3" :showPokemon="true" />

    <PokemonOptions />
</template>

<script>
import PokemonImg from '@/components/PokemonImg.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';
import getPokemonOptions from '@/helpers/getPokemonOptions.js';
export default {
    components: { PokemonImg, PokemonOptions },
};
</script>
