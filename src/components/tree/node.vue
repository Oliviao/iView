<!-- 这是一个递归组件,自己引用自己 -->
<template>
    <div class="tree">
        <div>
            <span @click="toggle">
                <span v-if="data.children && data.children.length && !data.expand">+</span>
                <span v-if="data.children && data.children.length && data.expand">-</span>
            </span>
            <span class="hover">{{ data.title }}</span>
        </div>
        <div v-show="showChildren">
            <TreeNode
                v-for="(item, index) in data.children"
                :key="index"
                :data="item"
            ></TreeNode>
        </div>
    </div>
</template>

<script>
import { findComponentUpward } from '../../utils/assist.js'

export default {
    name: 'TreeNode',
    props: [ 'data' ],
    data() {
        return {
            tree: findComponentUpward(this, 'Tree'),
            showChildren: this.data.expand
        }
    },
    mounted() {
        // this.showChildren = Boolean(`${this.data.expand && !!this.data.children}`)
        // console.log(this.showChildren)
    },
    methods: {
        toggle() {
            this.$set(this.data, 'expand', !this.data.expand)
            this.showChildren = this.data.expand

            if(this.tree) {
                this.tree.emitEvent('on-toggle-expand', this.data)
            }
        }
    }
}
</script>

<style>
.tree {
    padding-left: 10px;
}
.hover {
    padding:0px 10px;
    border-radius: 3px;
}
.hover:hover {
    background-color: cadetblue;
}
</style>