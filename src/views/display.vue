<template>
  <div>
    <i>这里是动态渲染的组件</i>
    <Display :code="code"></Display>
  </div>
</template>
<script>
  import Display from '../components/display/display.vue';
  import defaultCode from './default-code.js';

  export default {
    components: { Display },
    data () {
      return {
        code: defaultCode
      }
    }
  }
</script>