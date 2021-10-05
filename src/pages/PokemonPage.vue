<template>
    <h1>¿Quien es este Pokémon?</h1>

    <PokemonImg :pokemonId="180" :showPokemon="false" />

    <PokemonOptions />
</template>

<script>
import PokemonImg from '@/components/PokemonImg.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';
export default {
    components: { PokemonImg, PokemonOptions },
};
</script>
