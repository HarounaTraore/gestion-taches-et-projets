

 <template>
  <div>
    <h3 class="text-center fw-bold mt-4">Ajouter une nouvelle Tâche</h3>
    <form @submit.prevent="store.addTache(nouvelleTache)">
      <div class="mb-3">
        <label for="nom" class="form-label">Nom</label>
        <input
          type="text"
          class="form-control"
          id="nom"
          placeholder="Entrer le nom de la tâche"
          v-model="nouvelleTache.nom"
          required
        />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea
          class="form-control"
          id="description"
          placeholder="Entrer la description de la tâche"
          v-model="nouvelleTache.description"
          required
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="dateDebut" class="form-label">Date de début</label>
        <input
          type="date"
          class="form-control"
          id="dateDebut"
          v-model="nouvelleTache.dateDebut"
          required
        />
      </div>
      <div class="mb-3">
        <label for="dateFin" class="form-label">Date de fin</label>
        <input
          type="date"
          class="form-control"
          id="dateFin"
          v-model="nouvelleTache.dateFin"
          required
        />
      </div>
      <div class="mb-3">
        <select for="projet" class="form-label" v-model="nouvelleTache.projet">
          <option
            v-for="(projet, index) in store.projects"
            :key="index"
            :value="projet.nom"
          >
            {{ projet.nom }}
          </option>
          <option selected>Choisir le projet</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary w-25">Ajouter</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useGestionStore } from "@/stores/gestion";

const store = useGestionStore();

const nouvelleTache = ref({
  nom: "",
  description: "",
  dateDebut: "",
  dateFin: "",
  projet: "",
});

const ajouterTache = () => {
  store.addTache({ ...nouvelleTache.value });

  nouvelleTache.value = {
    nom: "",
    description: "",
    dateDebut: "",
    dateFin: "",
    projet: "",
  };
};
</script>

<style scoped>
</style>
