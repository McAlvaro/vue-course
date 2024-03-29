<script setup>
defineProps({ percentage: Number })
</script>
<template>
    <h3>Progreso: {{ percentage }}%</h3>
    <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar"
            :aria-valuenow="percentage" aria-valuemin="0" aria-valuemax="100" :style="`width: ${percentage}%;`">
        </div>
    </div>
</template>
