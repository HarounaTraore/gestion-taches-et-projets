<template>
  <div>
    <h3 class="text-center fw-bold mt-4">Ajouter un nouveau Projet</h3>
    <form @submit.prevent="store.addProject(NewProject)">
      <div class="mb-3">
        <label for="nom" class="form-label">Nom</label>
        <input
          type="text"
          class="form-control"
          id="nom"
          placeholder="Entrer le nom  du projet"
          v-model="NewProject.nom"
          required
        />
      </div>
      <div class="mb-3">
        <label for="dateDebut" class="form-label">Date debut</label>
        <input
          type="date"
          class="form-control"
          id="dateDebut"
          placeholder="Entrer la date du début du projet"
          v-model="NewProject.dateDebut"
          required
        />
      </div>
      <div class="mb-3">
        <label for="dateDebut" class="form-label">Date Fin</label>
        <input
          type="date"
          class="form-control"
          id="dateFin"
          placeholder="Entrer la date de fin du projet"
          v-model="NewProject.dateFin"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary w-25">Ajouter</button>
    </form>
  </div>
</template>
  
<script setup>
import { useGestionStore } from "@/stores/gestion";
import { ref } from "vue";
const store = useGestionStore();

const NewProject = ref({
  id: store.projects.length + 1,
  nom: "",
  dateDebut: "",
  dateFin: "",
});
</script>

<style scoped>
</style>
