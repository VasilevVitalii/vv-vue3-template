<template>
    <div>
        <h1>Demo page #1</h1>
        <DemoComponent1
            :counter="state.counter"
            :demoModel="state.demo"
            @change_counter="
                (value) => {
                    state.counter = value
                }
            "
            @change_demo="
                (value) => {
                    state.demo = value
                }
            "
        ></DemoComponent1>
        <DemoComponent2></DemoComponent2>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import DemoComponent1 from '@/components/DemoComponent1.vue'
    import DemoComponent2 from '@/components/DemoComponent2.vue'
    import { useStore } from 'vuex'

    export default defineComponent({
        name: 'DemoPage1',
        components: {
            DemoComponent1,
            DemoComponent2,
        },
        setup() {
            const { state } = useStore()
            return {
                state,
            }
        },
        computed: {},
        data() {
            return {}
        },
        methods: {},
    })
</script>
