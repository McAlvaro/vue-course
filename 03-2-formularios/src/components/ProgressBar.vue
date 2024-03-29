<script setup>
defineProps([ "percentage", "cleanProjects" ])
</script>
<template>
    <div class="row">
        <div class="col-6">
            <h3>Progreso: {{ percentage }}%</h3>
        </div>
        <div class="col-6 text-end">
            <button @click="cleanProjects" class="btn btn-danger">Limpiar Proyectos</button>
        </div>
    </div>
    <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar"
            :aria-valuenow="percentage" aria-valuemin="0" aria-valuemax="100" :style="`width: ${percentage}%;`">
        </div>
    </div>
</template>
