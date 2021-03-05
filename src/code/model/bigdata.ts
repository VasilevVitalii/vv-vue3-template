export type TBigData = {
    id: number
    name: string
}

export class BigData {
    list: TBigData[]

    constructor() {
        this.list = []
        for (let i = 0; i < 10000; i++) {
            this.list.push({
                id: i,
                name: 'name for item #'.concat(i.toString()),
            })
        }
    }
}
