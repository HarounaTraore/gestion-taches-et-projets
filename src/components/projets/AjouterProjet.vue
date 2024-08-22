<template>
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Ajouter un Livre
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Ajouter un nouveau livre
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="group">
            <label for="titre" class="form-label">Titre: </label>
            <input
              type="text"
              name="titre"
              class="form-control"
              placeholder="Titre du livre"
              v-model="nouveauLivre.titre"
              required
            />
          </div>

          <div class="group">
            <label for="auteur" class="form-label">auteur: </label>
            <input
              type="text"
              name="auteur"
              class="form-control"
              placeholder="Hauteur du livre"
              v-model="nouveauLivre.auteur"
              required
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Fermer
          </button>
          <button type="button" class="btn btn-primary" @click="ajouterLivre">
            Ajouter
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits();

const nouveauLivre = ref({
  titre: "",
  auteur: "",
});

const ajouterLivre = () => {
  const livre = {
    ...nouveauLivre.value,
  };

  emit("livre-ajoute", livre);

  nouveauLivre.value = {
    titre: "",
    auteur: "",
  };
};
</script>

<style scoped>
</style>
