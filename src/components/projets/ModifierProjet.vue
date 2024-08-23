<template>
  <div>
    <h3 class="text-center fw-bold mt-4">Modifier le Projet</h3>
    <form @submit.prevent="store.editProject(store.project)">
      <div class="mb-3">
        <label for="nom" class="form-label">Nom</label>
        <input
          type="text"
          class="form-control"
          id="nom"
          placeholder="Entrer le nom  du projet"
          v-model="store.project.nom"
          required
        />
      </div>
      <div class="mb-3">
        <label for="dateDebut" class="form-label">Date début</label>
        <input
          type="date"
          class="form-control"
          id="dateDebut"
          placeholder="Entrer la date du début du projet"
          v-model="store.project.dateDebut"
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
          v-model="store.project.dateFin"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary w-25">Ajouter</button>
    </form>
  </div>
</template>
    
  <script setup>
import { useGestionStore } from "@/stores/gestion";
const store = useGestionStore();
</script>
  
  <style scoped>
</style>
  