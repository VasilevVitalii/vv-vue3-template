import axios from 'axios'

class Result {
    suburl: string
    method: string
    statusCode: number
    error?: string
    response: any
    reply: any

    constructor(suburl: string, method: string, statusCode: number, response: any, reply: any, error?: string) {
        this.suburl = suburl
        this.method = method
        this.statusCode = statusCode
        this.error = error
        this.response = response
        this.reply = reply
        if (this.statusCode !== 200 && !this.error) {
            this.error = 'unknown error'
        }
        if (this.error && this.error.length > 0 && this.error.substring(0, 6).toLowerCase() === 'error:') {
            this.error = this.error.substring(7, this.error.length).trim()
        }
    }
}

const axiosSwap = {
    send: async function (suburl: string): Promise<Result> {
        const url = new URL(suburl, process.env.VUE_APP_URL)
        try {
            const raw = await axios.get(url.href)
            return new Result(suburl, 'GET', raw.status, null, raw.data, undefined)
        } catch (error) {
            const response = error.response ? error.response : {}
            return new Result(suburl, 'GET', response.status, {}, response.data, error.toString())
        }
    },

    post: async function (suburl: string, object: unknown): Promise<Result> {
        const url = new URL(suburl, process.env.VUE_APP_URL)
        const object_for_send = typeof object === 'string' ? object : JSON.stringify(object)
        try {
            const raw = await axios.post(url.href, object_for_send)
            return new Result(suburl, 'GET', raw.status, object, raw.data, undefined)
        } catch (error) {
            const response = error.response ? error.response : {}
            return new Result(suburl, 'GET', response.status, object, response.data, error.toString())
        }
    },
}

export default axiosSwap
