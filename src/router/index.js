import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import ListeTache from '@/components/taches/ListeTache.vue'
import ListeProjet from '@/components/projets/ListeProjet.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tache',
      name: 'tache',
      component: ListeTache
    },
    {
      path: '/projet',
      name: 'projet',
      component: ListeProjet
    }
    
  ]
})

export default router
