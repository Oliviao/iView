<template>
    <div>
        <label>
            <input
                v-if="group"
                type="checkbox"
                :disabled="disabled"
                :value="label"
                v-model="model"
                @change="change"
            />
            <input 
                v-else
                type="checkbox" 
                :disabled="disabled" 
                :checked="currentValue" 
                @change="change"
            />
            <slot></slot>
        </label>
    </div>
</template>

<script>
import Emitter from '../../mixins/emitter.js'
import { findComponentUpward } from '../../utils/assist.js'

export default {
    name: "Checkbox",
    mixins: [ Emitter ],
    props: {
        label: {
            type: [String, Number, Boolean]
        },
        disabled: {
            type: Boolean,
            default: false
        },
        trueValue: {
          type: [String, Number, Boolean],
          default: true
        },
        falseValue: {
          type: [String, Number, Boolean],
          default: false
        },
        value: {
            type: [String, Number, Boolean]
        }
    },
    data() {
        return {
            model: [],
            group: false,
            parent: null,
            currentValue: this.value
        }
    },
    watch: {
      value (val) {
        if (val === this.trueValue || val === this.falseValue) {
          this.updateModel();
        } else {
          throw 'Value should be trueValue or falseValue.';
        }
      }
    },
    mounted() {
      this.parent = findComponentUpward(this, 'CheckboxGroup');

      if (this.parent) {
        this.group = true;
      }

      if (this.group) {
        this.$parent.updateModel(true);
      } else {
        this.updateModel();
      }
    },
    methods: {
      updateModel () {
        this.currentValue = this.value === this.trueValue;
      },
      change(event) {
          if(this.disabled) {
              return false
          }

          var checked = event.target.checked
          this.currentValue = checked
  
          var value =  checked ? this.trueValue : this.falseValue
          this.$emit('input', value)
        
          if(this.group) {
              this.$parent.change(this.model)
          }else {
              this.$emit('on-change', value)
              this.dispatch('FormItem', 'on-form-change', value)
          } 
      }
    }
}
</script>