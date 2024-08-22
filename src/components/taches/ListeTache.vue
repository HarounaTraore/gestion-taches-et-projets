<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Liste des membres</h2>
    <table class="table table-hover">
      <thead class="table-dark">
        <tr>
          <th>Nom</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="membre in membres" :key="membre.id">
          <td>{{ membre.nom }}</td>
          <td class="text-center">
            <button
              class="btn btn-info btn-sm me-2"
              @click="voirDetails(membre)"
              data-bs-toggle="modal"
              data-bs-target="#voirMembreModal"
            >
              <i class="fas fa-eye"></i>
            </button>
            <button
              class="btn btn-warning btn-sm me-2"
              @click="ouvrirEdition(membre)"
              data-bs-toggle="modal"
              data-bs-target="#editerMembreModal"
            >
              <i class="fas fa-edit"></i>
            </button>
            <button
              class="btn btn-danger btn-sm"
              @click="supprimerMembre(membre.id)"
            >
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <button
      type="button"
      class="btn btn-primary mt-4"
      data-bs-toggle="modal"
      data-bs-target="#ajoutMembreModal"
    >
      Ajouter un membre
    </button>

    <div
      class="modal fade"
      id="ajoutMembreModal"
      tabindex="-1"
      aria-labelledby="ajoutMembreModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ajoutMembreModalTitle">
              Modifier les informations du membre
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <AjouterMembre @membre-ajoute="ajouterMembreAListe" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="editerMembreModal"
      tabindex="-1"
      aria-labelledby="editerMembreModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editerMembreModalTitle">
              Modifier le Membre
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <ModifierMembre
              v-if="membreAEditer"
              :membre="membreAEditer"
              @membre-modifie="mettreAJourMembre"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="voirMembreModal"
      tabindex="-1"
      aria-labelledby="voirMembreModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="voirMembreModalTitle">
              Détails du Membre
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p><strong>Id:</strong> {{ membreSelectionne?.id }}</p>
            <p><strong>Nom:</strong> {{ membreSelectionne?.nom }}</p>
            <p><strong>Email:</strong> {{ membreSelectionne?.email }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AjouterMembre from "./AjouterTache.vue";
import ModifierMembre from "./ModifierTache.vue";

const membres = ref([
  { id: 1, nom: "Membre 1", email: "email1@example.com" },
  { id: 2, nom: "Membre 2", email: "email2@example.com" },
  { id: 3, nom: "Membre 3", email: "email3@example.com" },
]);

const membreSelectionne = ref(null);
const membreAEditer = ref(null);

const voirDetails = (membre) => {
  membreSelectionne.value = membre;
};

const ouvrirEdition = (membre) => {
  membreAEditer.value = { ...membre };
};

const supprimerMembre = (id) => {
  membres.value = membres.value.filter((membre) => membre.id !== id);
};

const ajouterMembreAListe = (nouveauMembre) => {
  nouveauMembre.id = membres.value.length + 1;
  membres.value.push(nouveauMembre);
};

const mettreAJourMembre = (membreModifie) => {
  const index = membres.value.findIndex(
    (membre) => membre.id === membreModifie.id
  );
  if (index !== -1) {
    membres.value[index] = { ...membreModifie };
  }
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
