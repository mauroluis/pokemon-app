<template>
    <div class="options-container">
        <!-- $emit es el metodo del objeto Vue que sirve para "emitir" valores. lleva un elemento obligatorio que es el nombre del "evento" a disparar y el segundo sirve para mandar datos (opcional) que en esta ocasion envía el ID del pokemon -->
        <ul>
            <li
                v-for="pokemon in pokemons"
                :key="pokemon.id"
                @click="$emit('selectionPokemon', pokemon.id)"
            >
                {{ pokemon.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        pokemons: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    justify-content: center;
}
</style>
