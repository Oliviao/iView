<template>
    <div>
        <h3>大家好，这里是🌲树tree的展示</h3>
        <Tree :data="data"></Tree>
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
                    expand: false,
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
                            expand: true,
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
    }
}
</script>