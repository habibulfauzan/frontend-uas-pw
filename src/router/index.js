import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BarangView from '../views/BarangView.vue'
import KategoriView from '../views/KategoriView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/barangMasuk',
    name: 'barang',
    component: BarangView
  },
  {
    path: '/kategori',
    name: 'kategori',
    component: KategoriView
  },
  
  {
    path: '/barangKeluar',
    name: 'barangKeluar',
    component: () => import(/* webpackChunkName: "about" */ '../views/BarangKeluarView.vue')
  },
  {
    path: '/listBarang',
    name: 'listBarang',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListBarangView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
