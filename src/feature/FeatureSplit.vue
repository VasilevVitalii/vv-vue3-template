<template>
    <div
        :style="{ cursor, userSelect, flexDirection }"
        style="height: inherit; display: flex"
        @mouseup="onUp"
        @mousemove="onMouseMove"
        @touchmove="onMove"
        @touchend="onUp"
    >
        <div style="height: inherit; overflow-y: auto" :style="leftPaneStyle" class="left-pane splitter-pane">
            <slot name="left-pane"></slot>
        </div>
        <a-divider
            v-if="!horizontal"
            class="ant-slider-dot-active ant-tag-checkable"
            type="vertical"
            style="height: 100%; width: 5px; cursor: ew-resize"
            :dashed="!active"
            @mousedown="onDown"
            @dblclick="onDblClick"
            @touchstart.prevent="onDown"
        />
        <a-divider
            v-if="horizontal"
            class="ant-slider-dot-active ant-tag-checkable"
            type="horizontal"
            style="height: 5px; width: 100%; cursor: ns-resize"
            :dashed="!active"
            @mousedown="onDown"
            @dblclick="onDblClick"
            @touchstart.prevent="onDown"
        />
        <div style="height: inherit; overflow-y: auto" :style="rightPaneStyle" class="right-pane splitter-pane">
            <slot name="right-pane"></slot>
        </div>
    </div>
</template>

<script lang="js">
    import { defineComponent } from 'vue'
    export default defineComponent({
        name: 'FeatureSplit',
        emits: ['resize'],
        props: {
            margin: {
                type: Number,
                default: 10,
            },
            horizontal: {
                type: Boolean,
                default: false,
            },
            defaultPercent: {
                type: Number,
                default: 50,
            },
        },
        data() {
            return {
                active: false,
                percent: 50,
                hasMoved: false,
            }
        },
        computed: {
            flexDirection() {
                return this.horizontal ? 'column' : 'row'
            },
            leftPaneStyle() {
                return this.horizontal ? { height: this.percent + '%' } : { width: this.percent + '%' }
            },
            rightPaneStyle() {
                return this.horizontal ? { height: 100 - this.percent + '%' } : { width: 100 - this.percent + '%' }
            },
            userSelect() {
                return this.active ? 'none' : ''
            },
            cursor() {
                return this.active ? (this.horizontal ? 'ns-resize' : 'ew-resize') : ''
            },
        },
        methods: {
            onDblClick() {
                if (!this.hasMoved) {
                    this.percent = this.defaultPercent
                    this.$emit('resize')
                }
            },
            onDown() {
                this.active = true
                this.hasMoved = false
            },
            onUp() {
                this.active = false
            },
            onMove(e) {
                let offset = 0
                let target = e.currentTarget
                let percent = 0
                if (this.active) {
                    if (this.horizontal) {
                        while (target) {
                            offset += target.offsetTop
                            target = target.offsetParent
                        }
                        percent = Math.floor(((e.pageY - offset) / e.currentTarget.offsetHeight) * 10000) / 100
                    } else {
                        while (target) {
                            offset += target.offsetLeft
                            target = target.offsetParent
                        }
                        percent = Math.floor(((e.pageX - offset) / e.currentTarget.offsetWidth) * 10000) / 100
                    }
                    if (percent > this.margin && percent < 100 - this.margin) {
                        this.percent = percent
                    }
                    this.$emit('resize')
                    this.hasMoved = true
                }
            },
            onMouseMove(e) {
                if (e.buttons === 0 || e.which === 0) {
                    this.active = false
                }
                this.onMove(e)
            },
        },
        created() {
            this.percent = this.defaultPercent
        },
    })
</script>
