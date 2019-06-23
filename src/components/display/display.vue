<template>
  <div ref="display"></div>
</template>
<script>
  import Vue from 'vue'
  import randomStr from '../../utils/random_str.js'

  export default {
    props: {
      code: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        html: '',
        js: '',
        css: '',
        id: randomStr(),
        component: null
      }
    },
    methods: {
        getSource(source, type) {
            const regex = /`<${type}[^>]*>`/
            let openingTag = source.match(regex);

        if (!openingTag) {
            return ''
        } else{
            openingTag = openingTag[0]
        } 

        return source.slice(source.indexOf(openingTag) + openingTag.length, source.lastIndexOf(`</${type}>`))
        },
        splitCode() {
            const template = '<div id="app">' + this.getSource(this.code, 'template') + '</div>'
            const script = this.getSource(this.code, 'script').replace(/export default/, 'return ')
            const style = this.getSource(this.code, 'style')

            this.html = template
            this.js = script
            this.css = style
        },
        renderCode() {
            this.splitCode()
            console.log('---', this.html, this.js, this.css)

            if (this.html !== '' && this.js !== '') {
              const parseStrToFunc = new Function(this.js)()

              parseStrToFunc.template =  this.html
              const Component = Vue.extend( parseStrToFunc )
              this.component = new Component().$mount()

              this.$refs.display.appendChild(this.component.$el)

              if (this.css !== '') {
                const style = document.createElement('style');
                style.type = 'text/css';
                style.id = this.id;
                style.innerHTML = this.css;
                document.getElementsByTagName('head')[0].appendChild(style);
              }
            }
        },
        destroyCode() {
            const $target = document.getElementById(this.id);
            if ($target) $target.parentNode.removeChild($target);

            if (this.component) {
              this.$refs.display.removeChild(this.component.$el);
              this.component.$destroy();
              this.component = null;
            }            
        }
    },
    watch: {
        code() {
            this.destroyCode()
            this.renderCode()
        }
    },
    mounted() {
        console.log('--')
        this.renderCode()
    },
    beforeDestroy() {
        this.destroyCode()
    }
  }
</script>