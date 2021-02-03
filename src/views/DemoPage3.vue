<template>
    <div>
        <h1>Demo page #3 (axios)</h1>
        <h3>send requests to {{ url_info }} (url in .env files)</h3>
        <a-button-group>
            <a-button type="primary" @click="send('get', true)">GET: send good request</a-button>
            <a-button type="primary" @click="send('post', true)">POST: send good request</a-button>
        </a-button-group>
        <a-button-group style="margin: 0px 0px 0px 10px">
            <a-button type="danger" @click="send('get', false)">GET: send bad request</a-button>
            <a-button type="danger" @click="send('post', false)">POST: send bad request</a-button>
        </a-button-group>
        <a-textarea v-model:value="reply" placeholder="reply" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import axiosSwap from '../axios'

    export default defineComponent({
        name: 'DemoPage3',
        components: {},
        setup() {
            return {
                url_info: process.env.VUE_APP_URL,
            }
        },
        computed: {},
        data() {
            return {
                reply: '',
            }
        },
        methods: {
            async send(method: string, good: boolean) {
                let url = good ? 'posts' : 'postsBAD'
                if (method === 'get') {
                    let res = await axiosSwap.send(url)
                    this.reply = JSON.stringify(res, null, 4)
                }
                if (method === 'post') {
                    let object_for_post = {
                        title: 'foo',
                        body: 'bar',
                        userId: 1,
                    }
                    let res = await axiosSwap.post(url, object_for_post)
                    this.reply = JSON.stringify(res, null, 4)
                }
            },
        },
    })
</script>
