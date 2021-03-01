<template>
    <div>
        <h1>Demo page #2 with horizontal split</h1>
        <FeatureSplit style="height: 400px" :horizontal="true">
            <template v-slot:left-pane>
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
            </template>
            <template v-slot:right-pane>
                <DemoComponent2></DemoComponent2>
            </template>
        </FeatureSplit>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import FeatureSplit from '@/feature/FeatureSplit.vue'
    import DemoComponent1 from '@/components/DemoComponent1.vue'
    import DemoComponent2 from '@/components/DemoComponent2.vue'
    import { code } from '@/code'

    export default defineComponent({
        name: 'DemoPage2',
        components: {
            FeatureSplit,
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
