import Alert from './alert.vue'
import Vue from 'vue'

// vue-loader 将Alert转化成为一个对象，所以能够动态添加属性
Alert.newInstance = () => {

  const Instance = new Vue({
    data: {},
    render (h) {
      return h(Alert)
    }
  })

  const component = Instance.$mount()
  document.body.appendChild(component.$el)

  // 获得刚渲染好的vue实例
  const alert = Instance.$children[0]

  // console.log('----当前实例的直接子组件',Instance, Instance.$children[0], component)
  return {
    add (noticeProps) {
      alert.add(noticeProps)
    }
  }
}

export default {
  info ({ duration = 1.5, content = '' }) {
    let instance = Alert.newInstance()

    instance.add({
      content: content,
      duration: duration
    })  
  }
}