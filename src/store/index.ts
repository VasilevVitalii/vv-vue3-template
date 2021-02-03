// import { ref } from 'vue'
import { createStore } from 'vuex'
import { Demo } from './model/demo'

const demo = new Demo()

export default createStore({
    state: {
        counter: 1,
        demo: demo,
        // txt: ref(''),
    },
    mutations: {},
    actions: {},
    modules: {},
})
