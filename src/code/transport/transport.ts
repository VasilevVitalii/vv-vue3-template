import { transport_core } from './transport_core'

export const transport = {
    jsonplaceholder_typicode_com_get_good: async function (): Promise<unknown | Error> {
        const res = await transport_core.send_get('posts')
        return res
    },

    jsonplaceholder_typicode_com_get_bad: async function (): Promise<unknown | Error> {
        const res = await transport_core.send_get('postsBAD')
        return res
    },

    jsonplaceholder_typicode_com_post_good: async function (object_for_post: unknown): Promise<unknown | Error> {
        const res = await transport_core.send_post('posts', object_for_post)
        return res
    },

    jsonplaceholder_typicode_com_post_bad: async function (object_for_post: unknown): Promise<unknown | Error> {
        const res = await transport_core.send_post('postsBAD', object_for_post)
        return res
    },
}

// let url = good ? 'posts' : 'postsBAD'
// if (method === 'get') {
//     let res = await axiosSwap.send(url)
//     this.reply = JSON.stringify(res, null, 4)
// }
// if (method === 'post') {
//     let object_for_post = {
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }
//     let res = await axiosSwap.post(url, object_for_post)
//     this.reply = JSON.stringify(res, null, 4)
// }
