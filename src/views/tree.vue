<template>
    <div>
        <h3>大家好，这里是🌲树tree的展示</h3>
        <Tree @on-toggle-expand="toggle" :data="data"></Tree>
    </div>
</template>

<script>
import Tree from '../components/tree/tree.vue'
export default {
    components: { Tree },
    data () {
        return {
            data: [
                {
                    title: 'parent 1',
                    // 是否是展开的
                    expand: true,
                    children: [
                        {
                            title: 'parent 1-1',
                            expand: true,
                            children: [
                                {
                                    title: 'leaf 1-1-1'
                                },
                                {
                                    title: 'leaf 1-1-2'
                                }
                            ]
                        },
                        {
                            title: 'parent 1-2',
                            expand: false,
                            children: [
                                {
                                    title: 'leaf 1-2-1'
                                },
                                {
                                    title: 'leaf 1-2-1'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'parent2',
                    expand: false,
                    children: [
                        {
                            title: 'parent 2-1'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        toggle() {
            console.log('暴露出一个方法，供用户调用')
        }
    }
}
</script>