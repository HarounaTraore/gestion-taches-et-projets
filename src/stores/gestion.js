import { defineStore } from "pinia";
import { ref } from "vue";

export const useGestionStore = defineStore("counter", () => {
  const project = ref("");
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

  const getProjet = (index) => {
    project.value = index;
  };

  const removeProject = (index) => {
    console.log(index);
    projects.value.splice(index, 1);
  };

  const addProject = (newProject) => {
    newProject.id == projects.value.length + 1;
    projects.value.push(newProject);
  };

  return {
    projects,
    project,
    getProjet,
    removeProject,
    addProject
  };
});
