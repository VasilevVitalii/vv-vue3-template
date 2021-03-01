<template>
    <div>
        <h2>Demo component #2 (vuex)</h2>
        <div>counter {{ code.state.counter }}</div>
        <a-button type="primary" @click="code.state.counter++"> increment counter </a-button>
        <a-input v-model:value="code.state.demo.text" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import { code } from '@/code'

    export default defineComponent({
        name: 'DemoComponent2',
        setup() {
            return {
                code: code,
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
