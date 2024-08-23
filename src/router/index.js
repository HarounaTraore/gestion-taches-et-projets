import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import ListeTache from "@/components/taches/ListeTache.vue";
import ListeProjet from "@/components/projets/ListeProjet.vue";
import AjouterProjet from "@/components/projets/AjouterProjet.vue";
import ModifierProjet from "@/components/projets/ModifierProjet.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/tache",
      component: ListeTache,
    },
    {
      path: "/projet",
      component: ListeProjet,
    },
    {
      path: "/projet/ajouter",
      component: AjouterProjet,
    },
    {
      path: "/projet/modifier",
      component: ModifierProjet
    }
  ],
});

export default router;
