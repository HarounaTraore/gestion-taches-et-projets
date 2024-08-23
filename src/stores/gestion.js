import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useGestionStore = defineStore("gestion", () => {
  const route = useRouter();

  const project = ref({
    id: 0,
    nom: "",
    dateDebut: "",
    dateFin: "",
  });

  const projects = ref([
    {
      id: 1,
      nom: "Developement d'un site web",
      dateDebut: "2024-08-25",
      dateFin: "2024-09-15",
    },
    {
      id: 2,
      nom: "Developement d'une application mobile",
      dateDebut: "2024-08-30",
      dateFin: "2024-09-25",
    },
    {
      id: 3,
      nom: "Developement d'un logiciel",
      dateDebut: "2024-09-25",
      dateFin: "2024-11-15",
    },
  ]);

  const tache = ref({
    id: 0,
    nom: "",
    description: "",
    dateDebut: "",
    dateFin: "",
    projet: "",
  });

  const taches = ref([
    {
      id: 1,
      nom: "Conception UI",
      description: "Création des maquettes pour l'application mobile.",
      dateDebut: "2024-08-26",
      dateFin: "2024-08-30",
      projet: "Developement d'une application mobile",
    },
    {
      id: 2,
      nom: "Implémentation Backend",
      description: "Développement des API pour l'application web.",
      dateDebut: "2024-08-27",
      dateFin: "2024-09-10",
      projet: "Developement d'un site web",
    },
  ]);

  const getProject = (index) => {
    project.value = index;
  };

  const removeProject = (index) => {
    projects.value.splice(index, 1);
  };

  const addProject = (obj) => {
    projects.value.push(obj);
    route.push("/projet");
  };

  const editProject = (obj) => {
    const index = obj.id - 1;
    projects.value[index].nom = obj.nom;
    projects.value[index].dateDebut = obj.dateDebut;
    projects.value[index].dateFin = obj.dateFin;
    route.push("/projet");
  };

  const getTache = (index) => {
    tache.value = index;
  };

  const removeTache = (index) => {
    taches.value.splice(index, 1);
  };

  const addTache = (obj) => {
    taches.value.push(obj);
    route.push("/tache");
  };

  const editTache = (obj) => {
    const index = obj.id - 1;
    taches.value[index].nom = obj.nom;
    taches.value[index].description = obj.description;
    taches.value[index].dateDebut = obj.dateDebut;
    taches.value[index].dateFin = obj.dateFin;
    taches.value[index].projet = obj.projet;
    route.push("/tache");
  };

  return {
    projects,
    project,
    taches,
    tache,
    getProject,
    removeProject,
    addProject,
    editProject,
    getTache,
    removeTache,
    addTache,
    editTache,
  };
});
