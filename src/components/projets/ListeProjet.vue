<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Liste des Livres</h2>
    <table class="table table-hover">
      <thead class="table-dark">
        <tr>
          <th>Titre</th>
          <th>Auteur</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="livre in livres" :key="livre.id">
          <td>{{ livre.titre }}</td>
          <td>{{ livre.auteur }}</td>
          <td class="text-center">
            <button
              class="btn btn-info btn-sm me-2"
              @click="voirDetails(livre)"
              data-bs-toggle="modal"
              data-bs-target="#voirLivreModal"
            >
              <i class="fas fa-eye"></i>
            </button>
            <button
              class="btn btn-warning btn-sm me-2"
              @click="ouvrirEdition(livre)"
              data-bs-toggle="modal"
              data-bs-target="#editerLivreModal"
            >
              <i class="fas fa-edit"></i>
            </button>
            <button
              class="btn btn-danger btn-sm"
              @click="supprimerLivre(livre.id)"
            >
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <AjouterLivre @livre-ajoute="ajouterLivreAListe" />

    <!-- Modal pour voir les détails d'un livre -->
    <div
      class="modal fade"
      id="voirLivreModal"
      tabindex="-1"
      aria-labelledby="voirLivreModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="voirLivreModalTitle">
              Détails du Livre
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p><strong>Id:</strong> {{ livreSelectionne?.id }}</p>
            <p><strong>Titre:</strong> {{ livreSelectionne?.titre }}</p>
            <p><strong>Auteur:</strong> {{ livreSelectionne?.auteur }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal pour éditer un livre -->
    <div
      class="modal fade"
      id="editerLivreModal"
      tabindex="-1"
      aria-labelledby="editerLivreModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <ModifierLivre
              :livre="livreAEditer"
              @livre-modifie="mettreAJourLivre"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AjouterLivre from "./AjouterProjet.vue";
import ModifierLivre from "./ModifierProjet.vue";

const livres = ref([
  { id: 1, titre: "Livre 1", auteur: "Auteur 1" },
  { id: 2, titre: "Livre 2", auteur: "Auteur 2" },
]);

const livreSelectionne = ref(null);
const livreAEditer = ref(null);

const voirDetails = (livre) => {
  livreSelectionne.value = livre;
};

const ouvrirEdition = (livre) => {
  livreAEditer.value = { ...livre }; // Passer une copie du livre pour l'édition
};

const supprimerLivre = (id) => {
  livres.value = livres.value.filter((livre) => livre.id !== id);
};

const ajouterLivreAListe = (nouveauLivre) => {
  if (nouveauLivre.auteur && nouveauLivre.titre) {
    nouveauLivre.id = livres.value.length + 1;
    livres.value.push(nouveauLivre);
  }
};

const mettreAJourLivre = (livreModifie) => {
  const index = livres.value.findIndex((livre) => livre.id === livreModifie.id);
  if (index !== -1) {
    livres.value[index] = { ...livreModifie };
  }
  livreAEditer.value = null;
  // Fermer le modal
  const modal = new bootstrap.Modal(
    document.getElementById("editerLivreModal")
  );
  modal.hide();
};
</script>

<style scoped>
h2 {
  color: #495057;
}

.table-hover tbody tr:hover {
  background-color: #f1f1f1;
}

.btn {
  font-size: 0.875rem;
}

.modal-content {
  border-radius: 0.5rem;
}

.modal-header {
  background-color: #f8f9fa;
}

.modal-title {
  color: #343a40;
}
</style>
