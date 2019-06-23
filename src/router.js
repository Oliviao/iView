import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/form',
            component: () => import('./views/form.vue')
        },
        {
            path: '/display',
            component: () => import('./views/display.vue')
        }
    ]
})