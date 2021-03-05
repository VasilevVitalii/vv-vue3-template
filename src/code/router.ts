import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DemoPage1 from '../views/DemoPage1.vue'
import DemoPage2 from '../views/DemoPage2.vue'
import DemoPage3 from '../views/DemoPage3.vue'
import DemoPage4 from '../views/DemoPage4.vue'

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
    {
        path: '/demo3',
        name: 'DemoPage3',
        component: DemoPage3,
    },
    {
        path: '/demo4',
        name: 'DemoPage4',
        component: DemoPage4,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach((to, from, next) => {
    // access to vues store
    // console.log(store.state)
    if (to.name === 'DemoPage1' || to.name === 'DemoPage2' || to.name === 'DemoPage3' || to.name === 'DemoPage4') {
        next()
    } else {
        next({ name: 'DemoPage1' })
    }
})

export default router

function goto_core(path: string) {
    if (router.currentRoute.value.path !== path) {
        router.push({ path: path })
    }
}

export const goto = {
    GotoDemo1: function (): void {
        goto_core('/demo1')
    },
    GotoDemo2: function (): void {
        goto_core('/demo2')
    },
    GotoDemo3: function (): void {
        goto_core('/demo3')
    },
    GotoDemo4: function (): void {
        goto_core('/demo4')
    },
}
