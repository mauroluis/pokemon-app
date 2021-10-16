<template>
    <h1 v-if="!pokemon">Cargando...</h1>
    <div v-else>
        <h1>¿Quien es este Pokémon?</h1>

        <PokemonImg :pokemon-id="pokemon.id" :show-pokemon="showPokemon" />
        <!-- Cuando se haga click podemos "escucharlo" poniendo @ y el nombre que le dimos al metodo $emit() -->
        <PokemonOptions
            :pokemons="pokemonArr"
            @selectionPokemon="checkAnswer"
        />
        <!-- se pueden usar templates como fragments en react -->
        <template v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>

            <button @click="newGame">Nuevo Juego</button>
        </template>
    </div>
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
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: '',
        };
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions();

            const rndInt = Math.floor(Math.random() * 4);
            //mandamos el rndInt como prop al array asi pokemon es cargado con alguno de los elementos del array
            this.pokemon = this.pokemonArr[rndInt];
        },
        checkAnswer(selectedId) {
            this.showPokemon = true;
            this.showAnswer = true;
            selectedId === this.pokemon.id
                ? (this.message = `¡Exacto! El pokemon es: ${this.pokemon.name}`)
                : (this.message = `Lo siento, el pokemon es ${this.pokemon.name}`);
        },
        newGame() {
            this.showPokemon = false;
            this.showAnswer = false;
            this.pokemonArr = [];
            this.pokemon = null;
            this.mixPokemonArray();
        },
    },
    //llamando a mounted lifecycle hook (metodo que se llama 1 sola vez en cada recarga)
    mounted() {
        this.mixPokemonArray();
    },
};
</script>
