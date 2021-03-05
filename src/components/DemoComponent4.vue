<template>
    <div><FileOutlined /> {{ item.id }} {{ item.name }}</div>
</template>

<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import { TBigData } from '@/code/model/bigdata'
    import { FileOutlined } from '@ant-design/icons-vue'

    export default defineComponent({
        name: 'DemoComponent4',
        components: {
            FileOutlined,
        },
        props: {
            item: {
                type: Object as PropType<TBigData>,
            },
        },
        data() {
            return {}
        },
        methods: {},
    })
</script>
