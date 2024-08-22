<template>
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Modifier le Livre</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
    <div class="modal-body">
      <div class="mb-3">
        <label for="titre" class="form-label">Titre</label>
        <input
          type="text"
          id="titre"
          class="form-control"
          placeholder="Titre du livre"
          v-model="livreModifie.titre"
          required
        />
      </div>
      <div class="mb-3">
        <label for="auteur" class="form-label">Auteur</label>
        <input
          type="text"
          id="auteur"
          class="form-control"
          placeholder="Auteur du livre"
          v-model="livreModifie.auteur"
          required
        />
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
        Fermer
      </button>
      <button type="button" class="btn btn-primary" @click="modifierLivre">
        Enregistrer
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  livre: Object,
});

const livreModifie = ref({ ...props.livre });

// Réagir aux changements dans les props
watch(
  () => props.livre,
  (nouveauLivre) => {
    livreModifie.value = { ...nouveauLivre };
  },
  { deep: true }
);

const emit = defineEmits(["livre-modifie"]);

const modifierLivre = () => {
  emit("livre-modifie", { ...livreModifie.value });
};
</script>

<style scoped>
/* Ajoutez des styles si nécessaire */
</style>
