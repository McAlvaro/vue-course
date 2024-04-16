<script setup>
import { RouterLink, RouterView } from 'vue-router';


</script>
<template>
    <div class="flex">
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/gifs">Gifs</RouterLink>
        </nav>
        <RouterView />
    </div>
</template>

