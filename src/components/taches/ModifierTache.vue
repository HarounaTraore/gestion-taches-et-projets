<template>
  <div v-if="tache">
    <h3 class="text-center fw-bold mt-4">Modifier la Tâche</h3>
    <form @submit.prevent="store.editTache(store.tache)">
      <div class="mb-3">
        <label for="nom" class="form-label">Nom</label>
        <input
          type="text"
          id="nom"
          v-model="store.tache.nom"
          class="form-control"
          placeholder="Entrer le nom de la tâche"
          required
        />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea
          id="description"
          v-model="store.tache.description"
          class="form-control"
          placeholder="Entrer la description de la tâche"
          required
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="dateDebut" class="form-label">Date de début</label>
        <input
          type="date"
          id="dateDebut"
          v-model="store.tache.dateDebut"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="dateFin" class="form-label">Date de fin</label>
        <input
          type="date"
          id="dateFin"
          v-model="store.tache.dateFin"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <select for="projet" class="form-label" v-model="store.tache.projet" required>
          <option
            v-for="(projet, index) in store.projects"
            :key="index"
            :value="projet.nom"
          >
            {{ projet.nom }}
          </option>
          <option :value="store.tache.projet" selected>{{ store.tache.projet }}</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary w-25">Enregistrer</button>
    </form>
  </div>
</template>

<script setup>
import { useGestionStore } from "@/stores/gestion";

const store = useGestionStore();

const tache = store.tache;
</script>

<style scoped>
</style>
