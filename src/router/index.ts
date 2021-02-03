import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DemoPage1 from '../views/DemoPage1.vue'
import DemoPage2 from '../views/DemoPage2.vue'
// access to vues store
// import store from '../store/index'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/demo1',
        name: 'DemoPage1',
        component: DemoPage1,
    },
    {
        path: '/demo2',
        name: 'DemoPage2',
        component: DemoPage2,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach((to, from, next) => {
    // access to vues store
    // console.log(store.state)
    if (to.name === 'DemoPage1' || to.name === 'DemoPage2') {
        next()
    } else {
        next({ name: 'DemoPage1' })
    }
})

export default router
