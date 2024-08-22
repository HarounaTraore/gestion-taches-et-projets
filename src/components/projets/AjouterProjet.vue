<template>
    <div>
      <h3>Ajouter un nouveau Projet</h3>
      <form @submit.prevent="addProject">
        <div class="mb-3">
          <label for="nom" class="form-label">Nom</label>
          <input
            type="text"
            class="form-control"
            id="nom"
            required
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"

            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Ajouter</button>
      </form>
    </div>
  </template>
  
<script setup>
  import { useGestionStore } from '@/stores/gestion';
  const store = useGestionStore()
</script>

<style scoped>
</style>
