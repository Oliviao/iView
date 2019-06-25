## 一、具有数据校验功能的表单组建
> 用到的组件间通信方式

provide / inject : 把 form 实例分发给 FormItem，常用于获取父组件的状态

this.dispatch / this.$on, this.broadcast / this.$on，常用于父子组件间通过自定义事件进行通信

ref = "form"

> 验证功能的实现办法

使用 npm 包 async-validate, 用户输入的数据 model 和验证规则 rules

验证在 FormItem, 有 2 种验证方式：单项验证、点击 "提交" 后一起验证

> 一种重要思想

缓存组件实例

## 二、动态渲染组件
> 用途

只需要修改某个 .vue 文件就可以实现更新，不需要重新打包、编译、上传等操作

> 核心实现步骤

<img src="images/t1.jpeg" width="400">

> 实现难点：构建 Vue.extend() 的参数

1、使用 return 包裹 export default 里面的内容

2、使用 new Function(this.js)() 执行语句，生成 Vue.extend() 需要的参数内容