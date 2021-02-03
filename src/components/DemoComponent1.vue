<template>
    <div>
        <h1>Demo component #1 (props), counter {{ counter }}</h1>
        <a-button type="primary" @click="$emit('change_counter', counter + 1)"> increment counter </a-button>
        <a-input v-model:value="text" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'DemoComponent1',
        props: {
            counter: Number,
            demoModel: Object,
        },
        computed: {
            text: {
                get: function (): string {
                    return this.demoModel ? this.demoModel.text : ''
                },
                set: function (value: string) {
                    this.$emit('change_demo', { ...this.demoModel, text: value })
                },
            },
        },
        data() {
            return {}
        },
        methods: {},
    })
</script>
