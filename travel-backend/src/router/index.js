import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/home.vue'
import Layout from '../components/Layout.vue'
import LoginInfo from '../views/SystemView/AdminManager/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      component: Layout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: "/admin",
          name: 'Admin',
          component: () =>import("../views/SystemView/AdminManager/admin.vue")
        },
        {
          path: "/role",
          name: 'Role',
          component: () =>import("../views/SystemView/RoleManger/role.vue")
        },
        {
          path: "/permission",
          name: 'Permission',
          component: () =>import("../views/SystemView/PermissionManager/permission.vue")
        },
        {
          path: "/product",
          name: 'Product',
          component: () =>import("../views/ProductView/product.vue")
        },
        {
            path: "/productType",
            name: 'ProductType',
            component: () =>import("../views/ProductView/productType.vue")
          },
      ]
    },
    {
      path: '/login',
      name: 'LoginInfo',
      component:LoginInfo
    }
  ]
})

export default router
