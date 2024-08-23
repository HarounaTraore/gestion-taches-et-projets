<template>
  <div v-if="tache">
    <h3 class="text-center fw-bold mt-4">Modifier la Tâche</h3>
    <form @submit.prevent="store.editTache(store.tache)">
      <div class="mb-3">
        <label for="nom" class="form-label">Nom</label>
        <input
          type="text"
          id="nom"
          v-model="tacheModifiee.nom"
          class="form-control"
          placeholder="Entrer le nom de la tâche"
          required
        />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea
          id="description"
          v-model="tacheModifiee.description"
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
          v-model="tacheModifiee.dateDebut"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="dateFin" class="form-label">Date de fin</label>
        <input
          type="date"
          id="dateFin"
          v-model="tacheModifiee.dateFin"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="projet" class="form-label">Projet</label>
        <input
          type="text"
          id="projet"
          v-model="tacheModifiee.projet"
          class="form-control"
          placeholder="Entrer le nom du projet associé"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary w-25">Enregistrer</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useGestionStore } from "@/stores/gestion";
import { useRoute, useRouter } from "vue-router";

const store = useGestionStore();
const route = useRoute();
const router = useRouter();

const tache = store.tache;
const tacheModifiee = ref({ ...tache.value });

const modifierTache = () => {
  store.editTache(tacheModifiee.value);
  router.push('/tache'); 
};
</script>

<style scoped>
</style>
