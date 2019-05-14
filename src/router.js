import Vue from 'vue'
import Router from 'vue-router'
import Todos from './components/Todos'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/:tid',
            name: 'todo',
            component: Todos
        }
    ]
})