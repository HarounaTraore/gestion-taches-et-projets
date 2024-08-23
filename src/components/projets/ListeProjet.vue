<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4 fw-bold">Liste de projets</h2>
    <table class="table table-hover">
      <thead class="table-dark">
        <tr>
          <th>Nom</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(projet, index) in store.projects" :key="index">
          <td>{{ projet.nom }}</td>
          <td class="text-center">
            <button
              class="btn btn-info btn-sm  me-2"
              @click="store.getProject(projet)"
              data-bs-toggle="modal"
              data-bs-target="#voirProjetModal"
            >
              <i class="fas fa-eye"></i>
            </button>
            <button
              class="btn btn-warning btn-sm me-2"
              @click="store.getProject(projet)"
            >
              <RouterLink class="nav-lin" to="/projet/modifier"><i class="fas fa-edit"></i></RouterLink>
            </button>
            <button
              class="btn btn-danger btn-sm"
              @click="store.removeProject(index)"
            >
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <button type="button" class="btn btn-primary mt-4">
      <RouterLink class="nav-link" to="/projet/ajouter"
        >Ajouter un nouveau projet</RouterLink
      >
    </button>

    <div
      class="modal fade"
      id="voirProjetModal"
      tabindex="-1"
      aria-labelledby="voirProjetModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="voirProjetModalTitle">
              Détails du Projet
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p><strong>Id:</strong> {{ store.project.id }}</p>
            <p><strong>Nom:</strong> {{ store.project.nom }}</p>
            <p><strong>Date Debut:</strong> {{ store.project.dateDebut }}</p>
            <p><strong>Date Fin:</strong> {{ store.project.dateFin }}</p>
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
</script>

<style scoped>
i{
  font-size: 12px;
}
</style>