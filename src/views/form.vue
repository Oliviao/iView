<template>
    <div>
        <Form ref="form" :model="formValidate" :rules="ruleValidate">
            <FormItem label="用户名" prop="name">
                <Input v-model="formValidate.name"></Input>
            </FormItem>
            <FormItem label="邮箱" prop="mail">
                <Input v-model="formValidate.mail"></Input>
            </FormItem>
            </FormItem label="爱好" prop="hobby">
                <CheckboxGroup v-model="formValidate.hobby">
                  <Checkbox label="eat">吃饭</Checkbox>
                  <Checkbox label="sleep">睡觉</Checkbox>
                  <Checkbox label="run">跑步</Checkbox>
                  <Checkbox label="movie">看电影</Checkbox>
                </CheckboxGroup>
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
    import CheckboxGroup from '../components/checkbox/checkboxgroup.vue';
    import Checkbox from '../components/checkbox/checkbox.vue';

    export default {
        components: { Form, FormItem, Input, CheckboxGroup, Checkbox }, 
        data() {
            return {
                formValidate: {
                    name: '',
                    mail: '',
                    hobby: ['eat', 'sleep']
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '用户名不能为空', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: '邮箱不能为空', trigger: 'blur' },
                        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }  
                    ],
                    hobby: [
                        {required: true, type: 'array', min: 1, message: '至少选择1项', trigger: 'change'},
                        {type: 'array', max: 3, message: '至多选3项', trigger: 'change'}
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
            }
        }
    }
</script>