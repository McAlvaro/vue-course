<script setup>
import { ref } from 'vue';

const msg = "Hola desde vue 3";
const html = "<h3>Esto es un h3</h3>"
const edad = ref(18);
const clicks = ref(0);
const url = "https://cdn.svgporn.com/logos/vue.svg?response-content-disposition=attachment%3Bfilename%3Dvue.svg";

const keyboards = ["Corne Keyboard", "Soffle Keyboard", "Lily58 Keyboard"];

function add() {
    edad.value++;
}

function dis() {
    edad.value--;
}

function click() {
    clicks.value++;
}
</script>
<template>
    <div>
        <h1>Directivas</h1>
        <hr />
        <span v-text="msg"></span>
        <br>
        <span>{{ msg }}</span>
        <div v-html="html"></div>
        <hr>
        <h3>Tu edad es: {{ edad }}</h3>
        <h4 v-if="edad >= 18 && edad > 0 && edad < 100">Eres Mayor de edad</h4>
        <h4 v-else-if="edad < 18 && edad > 0 && edad < 100">Eres menor de edad</h4>
        <h4 v-else>Edad Invalida</h4>

        <div>
            <button @click="add">Add</button>
            <button @click="dis">Dis</button>
        </div>

        <hr>
        <ul>
            <li v-for="(keyboard, index) in keyboards" :key="index">{{ keyboard }} - {{ index }}</li>
        </ul>
        <hr>
        <div @click="click" class="contador">
            Clicks: {{ clicks }}
        </div>

        <br>
        <div>
            <img :src="url" alt="">
        </div>
    </div>
</template>
<style scoped>
div {
    text-align: center;
    margin: 0px 2rem;
}

.contador {
    height: 50px;
    background: orange;
}
</style>
