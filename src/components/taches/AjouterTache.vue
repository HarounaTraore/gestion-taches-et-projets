<template>
  <div>
    <h3>Ajouter un nouveau Membre</h3>
    <form @submit.prevent="ajouterMembre">
      <div class="mb-3">
        <label for="nom" class="form-label">Nom</label>
        <input
          type="text"
          class="form-control"
          id="nom"
          v-model="nouveauMembre.nom"
          required
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="nouveauMembre.email"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Ajouter</button>
    </form>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["membre-ajoute"]);

const nouveauMembre = ref({
  nom: "",
  email: "",
});

const ajouterMembre = () => {
  const membre = {
    ...nouveauMembre.value,
  };

  emit("membre-ajoute", membre);

  nouveauMembre.value = {
    nom: "",
    email: "",
  };
};
</script>


