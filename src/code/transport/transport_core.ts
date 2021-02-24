/* eslint-disable @typescript-eslint/no-explicit-any*/
import axios from 'axios'

class Result {
    statusCode: number
    error?: Error
    reply?: any

    constructor(statusCode: number, reply: any, error?: Error) {
        this.statusCode = statusCode
        this.error = error
        this.reply = reply
        if (this.statusCode !== 200 && !this.error) {
            this.error = new Error('unknown error')
        }
    }
}

export const transport_core = {
    send_get: async function (suburl: string): Promise<Result> {
        const url = new URL(suburl, process.env.VUE_APP_URL)
        try {
            const raw = await axios.get(url.href)
            return new Result(raw.status, raw.data, undefined)
        } catch (error) {
            const response = error.response ? error.response : {}
            return new Result(response.status, undefined, error)
        }
    },

    send_post: async function (suburl: string, object: unknown): Promise<Result> {
        const url = new URL(suburl, process.env.VUE_APP_URL)
        const object_for_send = typeof object === 'string' ? object : JSON.stringify(object)
        try {
            const raw = await axios.post(url.href, object_for_send)
            return new Result(raw.status, raw.data, undefined)
        } catch (error) {
            const response = error.response ? error.response : {}
            return new Result(response.status, undefined, error)
        }
    },
}
