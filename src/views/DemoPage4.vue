<template>
    <div>
        <h1>Demo page #4 with virtual scroll</h1>
        <FeatureSplit style="height: 400px">
            <template v-slot:left-pane>
                <div v-for="(item, idx) in code.state.bigdata.list" :key="idx">
                    <DemoComponent4 :item="item"></DemoComponent4>
                </div>
            </template>
            <template v-slot:right-pane>
                <div v-for="(item, idx) in code.state.bigdata.list" :key="idx">
                    <DemoComponent4 :item="item"></DemoComponent4>
                </div>
            </template>
        </FeatureSplit>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import FeatureSplit from '@/feature/FeatureSplit.vue'
    import { code } from '@/code'
    import DemoComponent4 from '@/components/DemoComponent4.vue'

    export default defineComponent({
        name: 'DemoPage4',
        components: {
            FeatureSplit,
            DemoComponent4,
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
