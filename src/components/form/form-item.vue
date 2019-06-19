<template>
    <div>
        <label :class="{ 'i-form-item-label-required': isRequired }">{{label}}</label>
        <slot></slot>
        <div v-if="validateState === 'error'" class="i-form-item-message">{{ validateMessage }}</div>
    </div>
</template>

<script>
    import Emitter from '../../mixins/emitter.js';
    import AsyncValidator from 'async-validator'

    export default {
        name: 'FormItem',
        inject: ['form'],
        mixins: [ Emitter ],
        data() {
            return {
                name: 'lily',
                validateState: '',  // 校验状态
                validateMessage: '',  // 校验不通过时的提示信息
                isRequired: false,
                initialValue: ''
            }
        },
        props: {
            label: String,
            prop: String
        },
        computed: {
            fieldValue () {
                return this.form.model[this.prop];
            }
        },
        mounted() {
            if (this.prop) {
                this.dispatch('Form', 'on-form-item-add', this)

                this.$on('on-form-blur', this.onFieldBlur)
                this.$on('on-form-change', this.onFieldChange)

                this.initialValue = this.fieldValue
            }
        },
        beforeDestory() {
            this.dispatch('Form', 'on-form-item-remove', this)
        },
        methods: {
            validate(trigger, callback = function () {}){
                let rules = this.form.rules ? this.form.rules[this.prop] : [];
                if(rules.length === 0) {
                    return true
                }

                this.validateState = '校验中......'

                // 以下为 async-validator 库的调用方法
                let descriptor = {};
                descriptor[this.prop] = rules;

                const validator = new AsyncValidator(descriptor);
                let model = {};

                model[this.prop] = this.fieldValue;

                validator.validate(model, { firstFields: true }, errors => {
                  this.validateState = !errors ? 'success' : 'error';
                  this.validateMessage = errors ? errors[0].message : '';

                  callback(this.validateMessage);
                });
            },
            onFieldBlur() {
                this.validate('blur')
            },
            onFieldChange() {
                this.validate('change')
            },
            resetField() {
                this.validateState = ''
                this.validateMessage = ''

                this.form.model[this.prop] = this.initialValue
            }
        }
    }
</script>

<style>
  .i-form-item-label-required:before {
    content: '*';
    color: red;
  }
  .i-form-item-message {
    color: red;
  }
</style>