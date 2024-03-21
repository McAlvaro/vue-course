<script setup>
import Grid from './Grid.vue';


defineProps({ url: String, title: String });

</script>
<template>
    <Grid>
        <img :src="url" alt="Vue.js">
        <h1>{{ title }}</h1>
        <a :href="url" target="_blank">Visitar</a>
    </Grid>
</template>
<style scoped>

img {
    width: 10rem;
    height: 10rem;
}

a {
    text-decoration: none;
    background: #35495e;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 5px;
}
</style>
