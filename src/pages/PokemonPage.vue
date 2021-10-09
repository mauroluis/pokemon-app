<template>
    <h1>¿Quien es este Pokémon?</h1>

    <PokemonImg :pokemonId="3" :showPokemon="true" />

    <PokemonOptions :pokemons="pokemonArr" />
</template>

<script>
import PokemonImg from '@/components/PokemonImg.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';
import getPokemonOptions from '@/helpers/getPokemonOptions.js';

export default {
    components: { PokemonImg, PokemonOptions },
    //data siempre retorna un objeto
    data() {
        return {
            pokemonArr: [],
        };
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions();
        },
    },
    //llamando a mounted lifecycle hook (metodo que se llama 1 sola vez)
    mounted() {
        this.mixPokemonArray();
    },
};
</script>
