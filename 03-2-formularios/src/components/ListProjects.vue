<script setup>

defineProps(["numberProjects", "projects", "changeState"])
</script>
<template>

    <h2>Total Proyectos: {{ numberProjects }}</h2>
    <div class="table-responsive">
        <table class="table table-dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Proyecto</th>
                    <th>Tipo</th>
                    <th>Prioridad</th>
                    <th>Completado</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(proj, index) in projects" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ proj.proyecto }}</td>
                    <td>{{ proj.actividad }}</td>
                    <td @click="changeState(proj, 'prioridad')" :class="proj.prioridad ? 'bg-success' : 'bg-danger'">
                        {{ proj.prioridad ? "SI" : "NO" }}</td>
                    <td @click="changeState(proj, 'completado')" :class="proj.completado ? 'bg-success' : 'bg-danger'">
                        {{ proj.completado ? "Completo" : "Incompleto" }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
