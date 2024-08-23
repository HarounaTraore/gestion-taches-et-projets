<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Liste des Tâches</h2>
    <table class="table table-hover">
      <thead class="table-dark">
        <tr>
          <th>Nom</th>
          <th>Projet</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tache, index) in taches" :key="index">
          <td>{{ tache.nom }}</td>
          <td>{{ tache.projet }}</td>
          <td class="text-center">
            <button
              class="btn btn-info btn-sm me-2"
              @click="store.getTache(tache)"
              data-bs-toggle="modal"
              data-bs-target="#voirTacheModal"
            >
              <i class="fas fa-eye"></i>
            </button>
            <button
              class="btn btn-warning btn-sm me-2"
              @click="store.getTache(tache)"
            >
              <RouterLink to="/tache/modifier">
                <i class="fas fa-edit"></i>
              </RouterLink>
            </button>
            <button
              class="btn btn-danger btn-sm"
              @click="store.removeTache(index)"
            >
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <RouterLink class="btn btn-primary mt-4" to="/tache/ajouter">
      Ajouter une Tâche
    </RouterLink>

    <!-- Modal pour afficher les détails de la tâche -->
    <div
      class="modal fade"
      id="voirTacheModal"
      tabindex="-1"
      aria-labelledby="voirTacheModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="voirTacheModalTitle">Détails de la Tâche</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p><strong>Id:</strong> {{ store.tache.id }}</p>
            <p><strong>Nom:</strong> {{ store.tache.nom }}</p>
            <p><strong>Projet:</strong> {{ store.tache.projet }}</p>
            <p><strong>Date Debut:</strong> {{ store.tache.dateDebut }}</p>
            <p><strong>Date Fin:</strong> {{ store.tache.dateFin }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGestionStore } from "@/stores/gestion";
import { RouterLink } from "vue-router";

const store = useGestionStore();
const taches = store.taches;
</script>

<style scoped>
i {
  font-size: 12px;
}
</style>
