const code = 
`<template>
    <div class="message-test">
        <input v-model="message">
        {{ messageTest }}
    </div>
</template>
<script>
    export default {
        data () {
            return {
                message: 'hello lily'
            }
        },
        computed: {
            messageTest(newVal) {
                return this.message + '增加测试'
            }
        }
    }
</script>
<style>
.message-test {
    color: blue;
}
</style>
`

export default code