<script setup>
import Formulario from './components/Formulario.vue';
import Header from './components/Header.vue';


const url = "https://cdn.svgporn.com/logos/vue.svg?response-content-disposition=attachment%3Bfilename%3Dvue.svg"
</script>
<template>
    <div class="container">
        <Header :url="url" />
        <Formulario/>
    </div>
</template>
