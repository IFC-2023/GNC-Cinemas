import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import('../views/Cadastro.vue')
    },
    {
      path: '/minha-conta',
      name: 'minha-conta',
      component: () => import('../views/MinhaConta.vue')
    },
    {
      path: '/minha-conta/meus-pedidos',
      name: 'meus-pedidos',
      component: () => import('../views/MeusPedidos.vue')
    },
    {
      path: '/minha-conta/dados-pessoais',
      name: 'dados-pessoais',
      component: () => import('../views/MeusDadosPessoais.vue')
    },
    {
      path: '/tela-filme',
      name: 'tela-filme',
      component: () => import('../views/TelaFilme.vue')
    },
    {
      path: '/pagamento',
      name: 'pagamento',
      component: () => import('../views/Pagamento.vue')
    }
  ]
})

export default router