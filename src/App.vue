<template>
    <div>
        <router-link to="/demo1">DemoPage1</router-link>
        |
        <router-link to="/demo2">DemoPage2</router-link>
        |
        <router-link to="/demo3">DemoPage3(axios)</router-link>
    </div>
    <router-view style="margin: 10px" />
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'App',
    })
</script>
