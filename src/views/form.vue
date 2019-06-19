<template>
    <div>
        <Form ref="form" :model="formValidate" :rules="ruleValidate">
            <FormItem label="用户名" prop="name">
                <Input v-model="formValidate.name"></Input>
            </FormItem>
            <FormItem label="邮箱" prop="mail">
                <Input v-model="formValidate.mail"></Input>
            </FormItem>
        </Form>
        <button @click="handleSubmit">提交</button>
        <button @click="handleReset">重置</button>
    </div>
</template>

<script>
    import Form from '../components/form/form.vue';
    import FormItem from '../components/form/form-item.vue';
    import Input from '../components/input/input.vue';

    export default {
        components: {Form, FormItem, Input}, 
        data() {
            return {
                formValidate: {
                    name: '',
                    mail: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '用户名不能为空', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: '邮箱不能为空', trigger: 'blur' },
                        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }  
                    ]
                }
            }
        },
        methods: {
            handleSubmit () {
              this.$refs.form.validate((valid) => {
                if (valid) {
                  window.alert('提交成功');
                } else {
                  window.alert('表单校验失败');
                }
              })
            },
            handleReset () {
              this.$refs.form.resetFields();
            },
            test () {
                console.log('----test---')
            }
        }
    }
</script>