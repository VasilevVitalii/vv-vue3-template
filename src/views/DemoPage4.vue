<template>
    <div>
        <h1>Demo page #4 with virtual scroll</h1>
        <FeatureSplit style="height: 400px">
            <template v-slot:left-pane>
                <FeatureScroller class="scroll" :itemCount="code.state.bigdata.list.length" :itemHeight="50">
                    <template class="item" v-slot="{ index }">Item number {{ index - 1 }}</template>
                </FeatureScroller>
            </template>
            <template v-slot:right-pane>
                <FeatureScroller class="scroll" :itemCount="code.state.bigdata.list.length" :itemHeight="50">
                    <template class="item" v-slot="{ index }"
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

<style>
    .scroll {
        height: 300px;
        margin: 50px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        border: 2px solid red;
    }
    .item {
        text-align: center;
        height: 40px;
        margin: auto 20px;
        box-sizing: border-box;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }
</style>
