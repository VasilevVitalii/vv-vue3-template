export interface IDemo {
    text: string
}

export class Demo implements IDemo {
    text: string

    constructor() {
        this.text = 'demo text'
    }
}
