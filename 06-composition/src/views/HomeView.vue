<script setup>
import { reactive } from 'vue';

const form = reactive({
    name: [],
    level: [""],
    number: 1
})
</script>

<template>
    <main>
        <div>
            <label for="number">Tecnologias</label>
            <input type="number" min="1" max="5" v-model="form.number">
        </div>
        <div v-for="number in form.number" :key="number">
            <input type="text" v-model="form.name[number - 1]">
            <select name="level" v-model="form.level[number - 1]">
                <option value="" disabled>Selecciona un Nivel</option>
                <option value="Basico">Basico</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzado">Avanzado</option>
            </select>
        </div>
    </main>
</template>
<style scoped>
input,
select {
    padding: 5px;
    font-size: 12pt;
    margin: 4px;
}
</style>
