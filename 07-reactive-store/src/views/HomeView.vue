<script setup>
import { reactive } from 'vue';


const person = reactive({
    name: "Alvaro"
});
</script>

<template>
  <main>
        <div>
            <h1>Hola {{person.name}}</h1>
            <input type="text" v-model="person.name">
        </div>
  </main>
</template>
