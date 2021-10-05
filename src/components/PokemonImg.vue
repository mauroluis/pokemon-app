<template>
    <div class="pokemon-container">
        <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
            class="hidden-pokemon"
            alt="silueta"
        />
        <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
            class="fade-in"
            alt="silueta"
        />
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.pokemon-container {
    height: 200px;
}
img {
    height: 200px;
    position: absolute;
    right: 32%;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}
</style>
