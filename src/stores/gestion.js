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
    const index = obj.id -1
    projects.value[index].nom = obj.nom
    projects.value[index].dateDebut = obj.dateDebut
    projects.value[index].dateFin = obj.dateFin
    route.push("/projet");
  };
  return {
    projects,
    project,
    getProject,
    removeProject,
    addProject,
    editProject,
  };
});
