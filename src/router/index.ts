import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResultsView from '../views/ResultsView.vue'
import groceryList from '../views/groceryList.vue'
import inventory from '../views/inventory.vue'
import savedRecipes from '../views/savedRecipes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/results',
      name: 'results',
      component: ResultsView
    }, 
    {
      path: '/grocery',
      name: 'groceryList',
      component: groceryList
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: inventory
    }, 
    {
      path: '/saved',
      name: 'savedRecipes',
      component: savedRecipes
    }
  ]
})

export default router
