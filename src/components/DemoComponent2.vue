<template>
    <div>
        <h1>Demo component #2 (store), counter {{ state.counter }}</h1>
        <a-button type="primary" @click="state.counter++"> increment counter </a-button>
        <a-input v-model:value="state.demo.text" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import store from '@/store'

    export default defineComponent({
        name: 'DemoComponent2',
        setup() {
            return {
                state: store.state,
            }
        },
        props: {},
        computed: {},
        data() {
            return {}
        },
        methods: {},
    })
</script>
