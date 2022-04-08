import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Product from '../views/Product.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    meta:{
      title: 'Accueil'
    }
  },
  {
    name: 'About',
    path: '/about',
    component: About,
    meta:{
      title: 'A propos'
    }
  },
  {
    path: '/product/:name',
    name: 'Product',
    props:true,
    component: Product,
    meta:{
      title: 'produit',
    }
  },
  {
    name:'Notfound',
    path:"/:pathMatch(.*)",
    component: NotFound,
    meta:{
      title: '404 Not found'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  props:true,
})

router.afterEach((from,to) => {
console.log(from,to);
document.title=to.meta.title;
});

export default router
