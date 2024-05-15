<script setup>
import store from '@/store/store';

</script>

<template>
    <div class="about">
        <div style="display: flex; flex-direction: column;">
            <h1>Saldo Actual: $ {{ store.balance }}</h1>
            <div>
                <button @click="store.addBalance">+100</button>
                <button @click='store.subBalance'>-100</button>
            </div>
        </div>
    </div>
</template>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
