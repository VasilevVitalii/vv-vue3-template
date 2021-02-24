// import { ref } from 'vue'

import { createStore } from 'vuex'
import { Demo } from './model/demo'
import { transport } from './transport/transport'
import { goto } from './router'

const demo = new Demo()
const vuex = createStore({
    state: {
        counter: 1,
        demo: demo,
        // txt: ref(''),
    },
})

export const code = {
    state: vuex.state,
    transport: transport,
    router: goto,
}
