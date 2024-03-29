<script setup>
import { computed, ref } from 'vue';
import ProgressBar from './ProgressBar.vue';
import ListProjects from './ListProjects.vue';


var project = ref("");
var priority = ref(false);
var activity = ref("");
var projects = ref([]);

function addUser() {
    const projectObj = {
        proyecto: project.value,
        actividad: activity.value,
        prioridad: priority.value,
        completado: false
    };
    projects.value.push(projectObj);
    console.log("Proyectos: ", projects);

    project.value = "";
    priority.value = false;
    activity.value = "";
}

function changeState(project, attribute) {
    project[attribute] = !project[attribute];
}

const numberProjects = computed(() => {
    return projects.value.length;
});

const percentage = computed(() => {
    const totalCompleted = projects.value
        .reduce((total, item) => total + (item.completado ? 1 : 0), 0);

    return Math.floor(((totalCompleted * 100) / numberProjects.value) * 100) / 100 || 0;
});
</script>
<template>
    <div class="row">
        <div class="col-12 mb-4">
            <ProgressBar :percentage="percentage" />
        </div>
        <div class="col-12 col-md-4">
            <form @submit.prevent="addUser">
                <div class="mb-3">
                    <label class="form-label" for="project">Proyecto: </label>
                    <input class="form-control" id="project" type="text" placeholder="Proyecto" v-model.trim="project"
                        required>
                </div>
                <div class="mb-3">
                    <label class="form-label" for="activity">Actividad: </label>
                    <select id="activity" v-model="activity" class="form-select">
                        <option disabled selected value="">Seleccione un tipo...</option>
                        <option>Aplicacion Web con Vue 3</option>
                        <option>Backend Service con Node.js</option>
                        <option>Aplicacion Movil con React Native</option>
                    </select>
                </div>
                <div class="form-check">
                    <input v-model="priority" class="form-check-input" type="checkbox" value="" id="priority">
                    <label class="form-check-label" for="priority">
                        Urgente
                    </label>
                </div>
                <button class="btn btn-primary" type="submit">Guardar</button>
            </form>

        </div>
        <div class="col-12 col-md-8">
            <ListProjects :numberProjects="numberProjects" :projects="projects" :changeState="changeState" />
        </div>
    </div>
    <hr />
</template>
