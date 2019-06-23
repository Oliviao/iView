## 具有数据校验功能的表单组建
> 用到的组件间通信方式

provide / inject : 把 form 实例分发给 FormItem，常用于获取父组件的状态

this.dispatch / this.$on, this.broadcast / this.$on，常用于父子组件间通过自定义事件进行通信

ref = "form"

> 验证功能的实现办法

使用 npm 包 async-validate, 用户输入的数据 model 和验证规则 rules

验证在 FormItem, 有 2 种验证方式：单项验证、点击 "提交" 后一起验证

> 一种重要思想

缓存组件实例
