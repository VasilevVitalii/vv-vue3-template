<template>
    <div>
        <h1>Demo page #1</h1>
        <DemoComponent1></DemoComponent1>
        <DemoComponent2></DemoComponent2>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import DemoComponent1 from '@/components/DemoComponent1.vue'
    import DemoComponent2 from '@/components/DemoComponent2.vue'

    export default defineComponent({
        name: 'Main',
        components: {
            DemoComponent1,
            DemoComponent2,
        },
    })
</script>
