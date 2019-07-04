<template>
    <div>
        <TreeNode
            v-for="(item, index) in cloneData"
            :key="index"
            :data="item"
        ></TreeNode>
    </div>
</template>
<script>
import TreeNode from './node.vue'
import { deepCopy } from '../../utils/assist';

export default {
    components: { TreeNode },
    name: 'Tree',
    provide() {
        return {
            tree: this
        }
    },
    props: [ 'data' ],
    created() {
        this.buildData()
    },
    watch: {
        data() {
            this.buildData()
        }
    },
    mounted() {
        // console.log('----', this.data)
    },
    methods: {
        buildData() {
            this.cloneData = deepCopy(this.data)
        },
        emitEvent (eventName, data) {
          this.$emit(eventName, data, this.cloneData);
        }    
    }
}
</script>