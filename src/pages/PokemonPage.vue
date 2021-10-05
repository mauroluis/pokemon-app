<template>
    <h1>¿Quien es este Pokémon?</h1>

    <PokemonImg :pokemonId="180" :showPokemon="true" />

    <PokemonOptions />
</template>

<script>
import PokemonImg from '@/components/PokemonImg.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';
import getPokemonOptions from '@helpers/getPokemonOptions';
export default {
    components: { PokemonImg, PokemonOptions },
};
</script>
