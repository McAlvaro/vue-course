<script setup>

defineProps({url: String})
</script>
<template>
    <div class="col">
        <h1>Formularios</h1>
        <img class="h-2" :src="url" alt="">
    </div>
    <hr>
</template>
