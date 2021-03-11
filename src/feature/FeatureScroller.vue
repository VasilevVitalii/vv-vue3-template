<template>
    <div :style="scrollerStyle" @scroll="onScroll" tabindex="1">
        <div :style="containerStyle">
            <div v-for="i in visibleItems" :style="itemStyle" :index="i" :key="i">
                <slot :index="i" />
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
    export default {
        name: 'FeatureScroller',
        props: {
            itemHeightPx: {
                type: Number,
                default: 50,
            },
            itemCount: Number,
            bufferSize: {
                type: Number,
                default: 5,
            },
            height: {
                type: String,
                default: '300px',
            },
        },
        data() {
            return {
                startItem: 0,
                visibleItemCount: 0,
                topMargin: 0,
                bottomMargin: 0,
                scrollTop: 0,
                scrollerStyle: {
                    overflowY: 'scroll',
                    outline: 'none',
                    height: this.height,
                },
            }
        },
        mounted() {
            this.initialise()
        },
        watch: {
            itemCount() {
                this.initialise()
            },
            startItem() {
                this.topMargin =
                    Math.max(0, Math.floor((this.itemHeightPx * (this.startItem - 1)) / this.marginFactor)) +
                    this.itemHeightPx / 2
                this.bottomMargin = this.totalMargin - this.topMargin
            },
            scrollTop() {
                this.startItem = Math.round((this.scrollTop * this.marginFactor) / this.itemHeightPx) - this.bufferSize
                this.startItem = Math.min(this.startItem, this.maxStartItem)
                this.startItem = Math.max(this.startItem, -this.bufferSize)
            },
        },
        computed: {
            visibleItems() {
                let visibleItems = []
                for (var i = 0; i <= this.visibleItemCount; ++i) {
                    const item = this.startItem + i
                    if (item > 0 && item <= this.itemCount) {
                        visibleItems.push(item)
                    }
                }
                return visibleItems
            },
            containerStyle() {
                return {
                    marginTop: this.topMargin + 'px',
                    marginBottom: this.bottomMargin + 'px',
                }
            },
            itemStyle() {
                return {
                    height: this.itemHeightPx + 'px',
                    overflow: 'hidden',
                }
            },
        },
        methods: {
            initialise() {
                this.startItem = -this.bufferSize
                const containerHeight = this.$el.clientHeight
                this.visibleItemCount =
                    Math.floor((containerHeight - 2 * this.itemHeightPx) / this.itemHeightPx) + 2 * this.bufferSize
                const visibleHeight = this.itemHeightPx * this.visibleItemCount
                const realTotalHeight = this.itemHeightPx * this.itemCount
                const totalHeight = Math.min(realTotalHeight, 10e6)
                this.totalMargin = totalHeight - visibleHeight
                this.marginFactor = (realTotalHeight - visibleHeight) / this.totalMargin
                this.maxScrollTop = Math.max(0, totalHeight - containerHeight)
                this.maxStartItem = Math.max(0, this.itemCount - this.visibleItemCount)
                this.topMargin = 0
                this.bottomMargin = this.totalMargin
            },
            onScroll() {
                this.scrollTop = this.$el.scrollTop
            },
        },
    }
</script>
