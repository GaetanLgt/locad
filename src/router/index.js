import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Show from '../views/Show.vue'
import Categorie from '../views/Categorie.vue'
import Utilisateur from '../views/Utilisateur.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/show/:id',
    name: 'Show',
    component: Show
  },
  {
    path: '/categories/:id',
    name: 'Categories',
    component: Categorie
  },
  {
    path: '/utilisateur/:id',
    name: 'Utilisateur',
    component: Utilisateur
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
