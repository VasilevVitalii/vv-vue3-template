<template>
    <div>
        <h1>Demo page #4 with virtual scroll</h1>
        <FeatureSplit style="height: 400px">
            <template v-slot:left-pane>
                <FeatureScroller :itemCount="code.state.bigdata.list.length">
                    <template v-slot="{ index }">Item number {{ index - 1 }}</template>
                </FeatureScroller>
            </template>
            <template v-slot:right-pane>
                <FeatureScroller :itemCount="code.state.bigdata.list.length">
                    <template v-slot="{ index }"
                        ><DemoComponent4 :item="code.state.bigdata.list[index - 1]"></DemoComponent4
                    ></template>
                </FeatureScroller>
            </template>
        </FeatureSplit>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import FeatureSplit from '@/feature/FeatureSplit.vue'
    import { code } from '@/code'
    import DemoComponent4 from '@/components/DemoComponent4.vue'
    import FeatureScroller from '@/feature/FeatureScroller.vue'

    export default defineComponent({
        name: 'DemoPage4',
        components: {
            FeatureSplit,
            DemoComponent4,
            FeatureScroller,
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
