<template>
    <form>
        <slot></slot>
    </form>
</template>

<script>
    export default {
        name: 'Form',
        provide() {
            return {
                form: this
            }
        },
        data() {
            return {
                fields: []
            }
        },
        props: {
            model: Object,
            rules: Object
        },
        created() {
            this.$on('on-form-item-add', (field) => {
                if(field) {
                    this.fields.push(field)
                }
            }),
            this.$on('on-form-item-remove', (field) => {
                if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
            })
        },
        methods: {
            resetFields() {
                this.fields.forEach(field => {
                    field.resetField()
                })
            },
            validate() {
                this.fields.forEach(field => {
                    field.validate('', errors => {
                        console.log(errors)
                    })
                })
            }
        }
    }
</script>