import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Contacts from '../views/Contacts'
import Brands from '../views/Brands'
import Brand from '../views/Brand'
import Products from '../views/Products'
import ProductInfo from '../views/ProductInfo'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',    
    component: About
  },
  {
    path: '/contacts',
    name: 'Contacts',    
    component: Contacts
  },
  {
    path: '/brands',
    name: 'Brands',    
    component: Brands
  },
  {
    path: '/brands/:brand',
    name: 'Brand',    
    component: Brand
  },
  {
    path: '/brands/:brand/:product_type',
    name: 'Products',    
    component: Products
  },
  {
    path: '/brands/:brand/:product_type/:id',
    name: 'ProductInfo',    
    component: ProductInfo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
