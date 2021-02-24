<template>
    <div>
        <h1>Demo page #2</h1>
        <DemoComponent1
            :counter="code.state.counter"
            :demoModel="code.state.demo"
            @change_counter="
                (value) => {
                    code.state.counter = value
                }
            "
            @change_demo="
                (value) => {
                    code.state.demo = value
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
    import { code } from '@/code'

    export default defineComponent({
        name: 'DemoPage2',
        components: {
            DemoComponent1,
            DemoComponent2,
        },
        setup() {
            return {
                code: code,
            }
        },
        computed: {},
        data() {
            return {}
        },
        methods: {},
    })
</script>
