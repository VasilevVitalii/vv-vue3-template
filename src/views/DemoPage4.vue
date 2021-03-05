<template>
    <div>
        <h1>Demo page #4 with virtual scroll</h1>
        <FeatureSplit style="height: 400px">
            <template v-slot:left-pane>
                <div v-for="(item, idx) in code.state.bigdata.list" :key="idx">
                    <FileOutlined /> {{ item.id }} {{ item.name }}
                </div>
            </template>
            <template v-slot:right-pane>
                <div v-for="(item, idx) in code.state.bigdata.list" :key="idx">
                    <FileFilled /> {{ item.id }} {{ item.name }}
                </div>
            </template>
        </FeatureSplit>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import FeatureSplit from '@/feature/FeatureSplit.vue'
    import { code } from '@/code'
    import { FileOutlined, FileFilled } from '@ant-design/icons-vue'

    export default defineComponent({
        name: 'DemoPage4',
        components: {
            FeatureSplit,
            FileOutlined,
            FileFilled,
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
