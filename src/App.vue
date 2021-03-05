<template>
    <div>
        <router-link to="/demo1">DemoPage1</router-link>
        |
        <router-link to="/demo2">DemoPage2</router-link>
        |
        <router-link to="/demo3">DemoPage3(axios)</router-link>
        |
        <router-link to="/demo4">DemoPage4(virtual scroll)</router-link>
    </div>
    <a-button @click="code.router.GotoDemo1()">GotoDemo1 outside fouter link</a-button>
    <a-button @click="code.router.GotoDemo2()">GotoDemo2 outside fouter link</a-button>
    <a-button @click="code.router.GotoDemo3()">GotoDemo3 outside fouter link</a-button>
    <a-button @click="code.router.GotoDemo4()">GotoDemo4 outside fouter link</a-button>
    <router-view style="margin: 10px" />
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import { code } from '@/code'

    export default defineComponent({
        name: 'App',
        setup() {
            return {
                code: code,
            }
        },
    })
</script>
