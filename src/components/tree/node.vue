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
        <TreeNode
            v-if="data.expand"
            v-for="(item, index) in data.children"
            :key="index"
            :data="item"
        ></TreeNode>
    </div>
</template>

<script>
export default {
    name: 'TreeNode',
    props: [ 'data' ],
    data() {
        return {
            showChildren: false
        }
    },
    mounted() {
        // this.showChildren = Boolean(`${this.data.expand && !!this.data.children}`)
        // console.log(this.showChildren)
    },
    methods: {
        toggle() {
            this.$set(this.data, 'expand', !this.data.expand)
            console.log(this.data.expand)
            console.log(this.data)
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